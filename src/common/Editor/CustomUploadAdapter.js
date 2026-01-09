import requestApi from "admin/helpers/api"

export default class CustomUploadAdapter {
    constructor(loader) {
        this.loader = loader
    }

    upload = () => {
        return this.loader.file.then(file => new Promise((resolve, reject) => {
            //upload image to server
            const formData = new FormData()
            formData.append('upload', file)
            requestApi('/products/cke-upload', 'POST', formData, 'json', 'multipart/form-data').then(res => {
                resolve({
                    default: `${res.data.url}`
                })
            }).catch(err => {
                reject(err)
            })
        }))
    }
}