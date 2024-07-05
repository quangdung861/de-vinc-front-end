export const NFilterProducts = {
    NEW: 0,
    PRICE_ASC: 1,
    PRICE_DESC: 2,
}

export const NFilterProductsSTring = {
    [NFilterProducts.NEW] : 'Mới nhất',
    [NFilterProducts.PRICE_DESC]: 'Giá cao đến thấp',
    [NFilterProducts.PRICE_ASC]: 'Giá thấp đến cao',
}