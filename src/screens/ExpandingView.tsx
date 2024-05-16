import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../constants/colors'
import AppStrings from '../constants/appStrings'
import SummaryItem from '../components/SummaryItem'
import { Text, View } from '../components/Theme'

interface ExpandingViewProps {
    toggleView: () => void
    viewExpanded: boolean
    memoizedSummary: Summary
}

interface Summary {
    totalCurrentValue: string
    totalInvestment: string
    totalPL: string
    todaysPL: string
}

const ExpandingView: React.FC<ExpandingViewProps> = ({
    toggleView,
    viewExpanded,
    memoizedSummary,
}) => {
    return (
        <View
            lightColor={colors.light.dataBackground}
            darkColor={colors.dark.dataBackground}
            style={styles.expandViewContainer}
        >
            <View
                lightColor={colors.light.dataBackground}
                darkColor={colors.dark.dataBackground}
                style={styles.cardView}
            >
                <TouchableOpacity onPress={toggleView}>
                    <Text style={styles.expandButton}>
                        {viewExpanded ? '▼' : '▲'}
                    </Text>
                </TouchableOpacity>
            </View>
            {viewExpanded && (
                <>
                    <SummaryItem
                        label={AppStrings.currentValue}
                        value={memoizedSummary.totalCurrentValue}
                    />
                    <SummaryItem
                        label={AppStrings.totalInvestment}
                        value={memoizedSummary.totalInvestment}
                    />
                    <SummaryItem
                        label={AppStrings.todaysProfitLoss}
                        value={memoizedSummary.todaysPL}
                    />
                </>
            )}
            <View
                lightColor={colors.light.dataBackground}
                darkColor={colors.dark.dataBackground}
                style={[
                    styles.singleExpandItem,
                    viewExpanded ? styles.expandedView : styles.collapsedView,
                ]}
            >
                <Text style={styles.pLoss}>{AppStrings.profitLoss}</Text>
                <Text>
                    {AppStrings.rupee}
                    {memoizedSummary.totalPL}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    expandViewContainer: {
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
        paddingHorizontal: '4%',
        shadowColor: colors.light.text,
        shadowOpacity: 0.1,
    },
    cardView: {
        alignItems: 'center',
    },
    expandButton: {
        color: colors.light.header,
        fontSize: 25,
    },
    expandViewFont: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingBottom: '3%',
    },
    singleExpandItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    pLoss: {
        fontWeight: 'bold',
        color: colors.light.expandViewText,
        fontSize: 18,
    },
    expandedView: {
        paddingVertical: '5.5%',
    },
    collapsedView: {
        paddingBottom: '4%',
    },
})

export default React.memo(ExpandingView)
