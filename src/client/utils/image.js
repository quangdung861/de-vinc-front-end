export const getImage = (url) => {
    if (!url) return require('client/assets/images/placeholder-5.png')
    return process.env.REACT_APP_API_URL + "/" + url.split("<&space>")[0]
}

export const getImages = (urls) => {
    if (!urls) return [require('client/assets/images/placeholder-5.png')]
    let images = urls.split("<&space>").map(url => {
        return process.env.REACT_APP_API_URL + "/" + url
    })
    return images;
}