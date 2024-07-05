import React from 'react'
import './styles.scss'
import { useNavigate, generatePath } from 'react-router-dom';
import { ROUTER_CLIENT } from 'client/routes';
import SkeletonTypicalProduct from './Skeleton/SkeletonTypicalProduct';

const TypicalProduct = ({ data }) => {
    const navigate = useNavigate();
    const handleRedirectDetail = (id) => {
        navigate(generatePath(ROUTER_CLIENT.PRODUCT_DETAIL, { id }));
    };

    const rendeTypicalList = data.data?.map((item, index) => {
        return (
            <div className="typical-product-item" key={index}>
                <div className="typical-product-box-image" onClick={() => handleRedirectDetail(item.id)}>
                    <img className="typical-product-image" src={process.env.REACT_APP_API_URL + "/" + item?.images?.split("<&space>")[0]} alt="" />
                </div>
                <div className="typical-product-describe">
                    <div className="product-name" onClick={() => handleRedirectDetail(item.id)}>{item.name}</div>
                    <div className="product-price">{item.price.toLocaleString()}đ</div>
                </div>
            </div>
        )
    })

    return (
        <div className="typical-products-container">
            <div className="typical-products-centent">
                <div className="typical-products-name">{data.name}</div>
                <div className="typical-products-list">
                    {!data.loading ? rendeTypicalList : <SkeletonTypicalProduct />}
                </div>
            </div>
        </div>
    )
}

export default TypicalProduct