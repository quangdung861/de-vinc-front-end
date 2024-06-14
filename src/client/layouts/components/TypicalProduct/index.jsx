import React from 'react'
import './styles.scss'

const TypicalProduct = ({ data }) => {

    const rendeTypicalList = data?.data?.map((item, index) => {
        return (
            <div className="typical-product-item" key={index}>
                <div className="typical-product-box-image">
                    <img className="typical-product-image" src={item.img_URL} alt="" />
                </div>
                <div className="typical-product-describe">
                    <div className="product-name">{item.name}</div>
                    <div className="product-price">{item.price}</div>
                </div>
            </div>
        )
    })

    return (
        <div className="typical-products-container">
            <div className="typical-products-centent">
                <div className="typical-products-name">{data.title}</div>
                <div className="typical-products-list">
                    {rendeTypicalList}
                </div>
            </div>
        </div>
    )
}

export default TypicalProduct