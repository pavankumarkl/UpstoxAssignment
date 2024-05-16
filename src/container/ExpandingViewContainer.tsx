import React, { useCallback, useMemo, useState } from 'react'
import ExpandingView from '../screens/ExpandingView'
import { StockItem, Summary } from '../interfaces/models'

type ToggleExpandFunction = (newState: boolean) => void

interface ExpandingViewContainerProps {
    toggleExpand: ToggleExpandFunction
    data: StockItem[]
}

const calculateSummary = (data: StockItem[]): Summary => {
    let totalCurrentValue = 0
    let totalInvestment = 0
    let todaysPL = 0
    let totalPL = 0

    data.forEach((stockItem) => {
        totalCurrentValue += stockItem.ltp * stockItem.quantity
        totalInvestment += stockItem.avgPrice * stockItem.quantity
        totalPL = totalCurrentValue - totalInvestment
        todaysPL += (stockItem.close - stockItem.ltp) * stockItem.quantity
    })

    return {
        totalCurrentValue: totalCurrentValue.toFixed(2),
        totalInvestment: totalInvestment.toFixed(2),
        totalPL: totalPL.toFixed(2),
        todaysPL: todaysPL.toFixed(2),
    }
}

const ExpandingViewContainer: React.FC<ExpandingViewContainerProps> = ({
    toggleExpand,
    data,
}) => {
    const [viewExpanded, setViewExpanded] = useState(false)

    const toggleView = useCallback(() => {
        setViewExpanded((prevExpanded) => !prevExpanded)
        toggleExpand(!viewExpanded)
    }, [toggleExpand, viewExpanded])

    const memoizedSummary = useMemo(() => calculateSummary(data), [data])

    return (
        <ExpandingView
            toggleView={toggleView}
            viewExpanded={viewExpanded}
            memoizedSummary={memoizedSummary}
        />
    )
}

export default ExpandingViewContainer
