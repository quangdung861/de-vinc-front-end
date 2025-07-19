import getApiUrl from 'admin/utils/getApiUrl'

export const getImage = (urls) => {
    if (!urls) return require('client/assets/images/placeholder-5.png')
    return urls[0]
}

export const getImages = (urls) => {
    if (!urls) return [require('client/assets/images/placeholder-5.png')]
    let images = urls.map(url => {
        return url
    })
    return images;
}