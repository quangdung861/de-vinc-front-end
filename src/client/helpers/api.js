import getApiUrl from "admin/utils/getApiUrl";
import axios from "axios";

export default function requestApi(endpoint, method, body = [], responseType = 'json', contentType = 'application/json') {
    const headers = {
        "Accept": "application/json",
        "Content-Type": contentType,
        "Access-Control-Allow-Origin": "*"
    };

    const instance = axios.create({ headers });

    return instance.request({
        method: method,
        url: `${getApiUrl()}${endpoint}`,
        data: body,
        responseType: responseType
    })
}

export function buildQuery(params) {
    return '?' + Object.keys(params)
        .filter(key => params[key] !== undefined && params[key] !== null && params[key] !== '')
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&');
}
