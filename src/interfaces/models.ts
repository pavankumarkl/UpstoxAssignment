export interface StockItem {
    symbol: string
    quantity: number
    ltp: number
    avgPrice: number
    close: number
}

export interface Summary {
    totalCurrentValue: string
    totalInvestment: string
    totalPL: string
    todaysPL: string
}
