import React from 'react'
import * as S from './styles'
import { useNavigate, generatePath } from 'react-router-dom';
import { ROUTER_CLIENT } from 'client/routes';
import SkeletonTypicalProduct from './Skeleton/SkeletonTypicalProduct';
import { getImage } from 'client/utils';
import { formatCurrency } from 'client/utils/currency';
import clsx from 'clsx';

const TypicalProduct = ({ data, show }) => {
    const navigate = useNavigate();
    const handleRedirectDetail = (id) => {
        navigate(generatePath(ROUTER_CLIENT.PRODUCT_DETAIL, { id }));
    };

    const rendeTypicalList = data?.map((item, index) => {
        return (
            <div className="typical-product-item" key={index} >
                <div className="typical-product-box-image" onClick={() => handleRedirectDetail(item.id)}>
                    <img className="typical-product-image" src={getImage(item?.images)} alt="" />
                </div>
                <div className="typical-product-describe">
                    <div className="product-name" onClick={() => handleRedirectDetail(item.id)}>{item.name}</div>
                    <div className="product-price-box">
                        {!!item?.reducedPrice && <div className="product-reduced-price">{formatCurrency(item?.reducedPrice)}</div>}
                        <div className={clsx("product-price", item?.reducedPrice  && "throught")}>{formatCurrency(item?.price)}</div>
                        {!!item?.reducedPercent && <div className="product-price-percent tag-percent-md">-{item?.reducedPercent}%</div>}
                    </div>
                </div>
            </div>
        )
    })

    return (
        <S.Wrapper $show={show}>
            <div className="typical-products-container">
                <div className="typical-products-centent">
                    {/* <div className="typical-products-name">{data?.name}</div> */}
                    <div className="typical-products-list">
                        {!data?.loading ? rendeTypicalList : <SkeletonTypicalProduct />}
                    </div>
                </div>
            </div>
        </S.Wrapper >
    )
}

export default TypicalProduct