import React, { useMemo, useCallback } from 'react'
import { ActivityIndicator, FlatList, StyleSheet } from 'react-native'
import { Text, View } from '../components/Theme'
import colors from '../constants/colors'
import AppStrings from '../constants/appStrings'
import { StockItem } from '../interfaces/models'

interface StockCardProps {
    data: StockItem[]
    viewExpanded: boolean
}

const calculatePL = (item: StockItem) => {
    return Math.round((item.ltp - item.avgPrice) * item.quantity)
}

const ListItemComponent: React.FC<{ item: StockItem }> = ({ item }) => {
    const memoizedPL = useMemo(() => calculatePL(item), [item])

    return (
        <View
            lightColor={colors.light.dataBackground}
            darkColor={colors.dark.dataBackground}
            style={styles.mainView}
        >
            <View
                lightColor={colors.light.dataBackground}
                darkColor={colors.dark.dataBackground}
                style={styles.stockDetails}
            >
                <Text style={styles.stockName}>{item?.symbol}</Text>
                <Text>
                    {AppStrings.ltp}
                    <Text style={styles.stockPrice}>
                        {' '}
                        {AppStrings.rupee} {item.ltp}
                    </Text>
                </Text>
            </View>
            <View
                lightColor={colors.light.dataBackground}
                darkColor={colors.dark.dataBackground}
                style={styles.stockDetails}
            >
                <Text>{item.quantity}</Text>
                <Text>
                    {AppStrings.pl}
                    <Text style={styles.stockPrice}>
                        {AppStrings.rupee} {memoizedPL}
                    </Text>
                </Text>
            </View>
        </View>
    )
}

const itemSeperator = () => {
    return <View style={styles.itemSeperator}></View>
}

const loader = () => {
    return (
        <View style={styles.loader}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    )
}

const StockCard: React.FC<StockCardProps> = ({ data, viewExpanded }) => {
    const renderItem = useCallback(
        ({ item }: { item: StockItem }) => <ListItemComponent item={item} />,
        []
    )

    const MemoizedItemSeparator = useMemo(() => itemSeperator, [])

    const MemoizedLoader = useMemo(() => loader, [])

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                keyExtractor={(item: StockItem) => item.symbol}
                data={data}
                renderItem={renderItem}
                ItemSeparatorComponent={MemoizedItemSeparator}
                ListEmptyComponent={MemoizedLoader}
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingBottom: viewExpanded ? '48%' : '16%',
                }}
            ></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        paddingHorizontal: '4%',
        paddingVertical: '2%',
        gap: 8,
    },
    stockName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    stockPrice: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    stockDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    loader: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemSeperator: {
        height: StyleSheet.hairlineWidth,
        marginLeft: '4%',
    },
})

export default StockCard
