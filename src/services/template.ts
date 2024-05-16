import url from '../constants/url'
import { httpClient } from '../utils/httpClient'

export async function getStocksData() {
    try {
        return await httpClient.get(url.MOCK_URL)
    } catch (err) {
        console.log('GET_DATA ERROR', err)
    }
}
