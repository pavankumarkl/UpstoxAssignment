import { StyleSheet } from 'react-native'
import Header from '../components/Header'
import AppStrings from '../constants/appStrings'
import colors from '../constants/colors'
import { View } from '../components/Theme'
import StockCardContainer from '../container/StockCardContainer'

const HomeScreen = () => {
    return (
        <View style={styles.homeScreen}>
            <Header
                heading={AppStrings.upstoxHoldings}
                style={styles.header}
            ></Header>
            <StockCardContainer />
        </View>
    )
}

const styles = StyleSheet.create({
    homeScreen: {
        flex: 1,
    },
    header: {
        backgroundColor: colors.light.header,
        padding: '4%',
    },
})

export default HomeScreen
