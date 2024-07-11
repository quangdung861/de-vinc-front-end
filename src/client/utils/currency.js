export const formatCurrency = (value, locale) => {
    switch (locale) {
        case "vn":
            return value?.toLocaleString('vi-VN', { currency: 'VND' }) + 'đ';
        default:
            return value?.toLocaleString('vi-VN', { currency: 'VND' }) + 'đ';
    }

}