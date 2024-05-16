import React, { useState, useEffect } from 'react'
import StockCard from '../screens/StockCard'
import { StockItem } from '../interfaces/models'
import { getStocksData } from '../services/template'
import ExpandingViewContainer from './ExpandingViewContainer'

const StockCardContainer: React.FC = () => {
    const [data, setData] = useState<StockItem[]>([])
    const [viewExpanded, setViewExpanded] = useState(false)

    const toggleExpand = (expanded: boolean) => {
        setViewExpanded(expanded)
    }

    const getData = async () => {
        try {
            const stockData = await getStocksData()
            setData(stockData?.data?.userHolding)
        } catch (error) {
            console.log('error: ', error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <StockCard data={data} viewExpanded={viewExpanded} />
            <ExpandingViewContainer toggleExpand={toggleExpand} data={data} />
        </>
    )
}

export default StockCardContainer
