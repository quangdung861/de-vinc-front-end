import React from 'react'

const SkeletonProduct = () => {
    return Array(10).fill().map((_, index) => <div className="product-item" key={index}>
        <div className="product-box-image" >
            <div className="product-image skeleton" />
        </div>
        <div className="product-describe">
            <div className="product-name skeleton" style={{ height: 20 }}></div>
            <div className="product-price skeleton" style={{ height: 20 }}></div>
        </div>
    </div>)
}

export default SkeletonProduct