import { StyleSheet } from 'react-native'
import { Text, View } from './Theme'
import colors from '../constants/colors'
import AppStrings from '../constants/appStrings'
import React from 'react'

const SummaryItem: React.FC<{ label: string; value: string }> = ({
    label,
    value,
}) => (
    <View
        lightColor={colors.light.dataBackground}
        darkColor={colors.dark.dataBackground}
        style={styles.singleExpandItem}
    >
        <Text style={styles.expandViewFont}>{label} </Text>
        <Text>
            {AppStrings.rupee}
            {value}
        </Text>
    </View>
)

export default React.memo(SummaryItem)

const styles = StyleSheet.create({
    expandViewFont: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingBottom: '3%',
    },
    singleExpandItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})
