import { Dimensions } from 'react-native'

const CONFIG: { BASE_URL: string; SCREEN_HEIGHT: number } = {
    BASE_URL: 'https://',
    SCREEN_HEIGHT: Dimensions.get('window').height,
}

export default CONFIG
