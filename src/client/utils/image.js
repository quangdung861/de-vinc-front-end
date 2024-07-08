export const getImage = (url) => {
    if (!url) return require('client/assets/images/placeholder-5.png')
    return process.env.REACT_APP_API_URL + "/" + url.split("<&space>")[0]
}