import React from 'react'
import * as S from './styles'
import { useNavigateWithSlug } from 'client/utils';
import clsx from 'clsx';
import { ROUTER_CLIENT } from 'client/routes';
import SkeletonTypicalProduct from './Skeleton/SkeletonTypicalProduct';
import { getImage } from 'client/utils';
import { formatCurrency } from 'client/utils';

const TypicalProduct = ({ data, show }) => {
    const navigateWithSlug = useNavigateWithSlug();
    const handleRedirectDetail = (slug) => {
        navigateWithSlug(ROUTER_CLIENT.PRODUCT_DETAIL, slug);
    }

    const rendeTypicalList = data?.map((item, index) => {
        return (
            <div className="typical-product-item" key={index} >
                <div className="typical-product-box-image" onClick={() => handleRedirectDetail(item.slug)}>
                    <img className="typical-product-image" src={getImage(item?.images)?.thumbnail} alt="" />
                </div>
                <div className="typical-product-describe">
                    <div className="product-name" onClick={() => handleRedirectDetail(item.slug)}>{item.name}</div>
                    <div className="product-price-box">
                        {!!item?.reducedPrice && <div className="product-reduced-price">{formatCurrency(item?.reducedPrice)}</div>}
                        <div className={clsx("product-price", item?.reducedPrice && "throught")}>{formatCurrency(item?.price)}</div>
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
                    <div className="typical-products-list">
                        {!data?.loading ? rendeTypicalList : <SkeletonTypicalProduct />}
                    </div>
                </div>
            </div>
        </S.Wrapper >
    )
}

export default TypicalProduct