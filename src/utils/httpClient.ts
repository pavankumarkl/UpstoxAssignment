import CONFIG from '../constants/config'

class HttpClient {
    private async _fetchJSON(
        endpoint: string,
        options: Record<string, any> = {}
    ) {
        const res = await fetch(CONFIG.BASE_URL + endpoint, {
            ...options,
            headers: {
                'content-type': 'application/json',
                accept: 'application/json',
            },
        })

        if (!res.ok) throw new Error(res.statusText)

        if (options.parseResponse !== false && res.status !== 204)
            return res.json()

        return undefined
    }

    public get(endpoint: string, options: Record<string, any> = {}) {
        return this._fetchJSON(endpoint, {
            ...options,
            method: 'GET',
        })
    }
}

const client = new HttpClient()
export { client as httpClient }
