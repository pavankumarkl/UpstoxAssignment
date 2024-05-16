import { StyleSheet, Text } from 'react-native'
import { View } from './Theme'
import React from 'react'
import colors from '../constants/colors'

interface HeaderProps {
    heading: string
    style?: {} // Example of an optional prop
}

const Header: React.FC<HeaderProps> = ({ heading, style }) => {
    return (
        <View style={style}>
            <Text style={styles.headerFont}>{heading}</Text>
        </View>
    )
}

export default React.memo(Header)

const styles = StyleSheet.create({
    headerFont: {
        fontWeight: 'bold',
        color: colors.dark.text,
        fontSize: 16,
    },
})
