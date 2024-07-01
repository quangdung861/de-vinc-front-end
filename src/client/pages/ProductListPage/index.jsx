import React, { useEffect, useMemo } from 'react'
import * as S from "./styles";
import { useDispatch, useSelector } from 'react-redux';
import { getProductListAction } from 'client/redux/actions';

const ProductListPage = () => {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.client.productReducer)

  useEffect(() => {
    dispatch(getProductListAction({ params: {} }))
  }, [])

  const renderProductList = useMemo(() => {
    return productList.data.map((item, index) => {
      return (
        <div className="typical-product-item" key={index}>
          <div className="typical-product-box-image">
            <img className="typical-product-image" src={process.env.REACT_APP_API_URL + "/" + item?.images?.split("<&space>")[0]} alt="" />
          </div>
          <div className="typical-product-describe">
            <div className="product-name">{item.name}</div>
            <div className="product-price">{item.price.toLocaleString()}đ</div>
          </div>
        </div>
      )
    })
  }, [productList.data])


  return (
    <S.Wrapper>
      <div className="product-list-container">
        <div className="typical-products-list">
          {renderProductList}
        </div>
      </div>
    </S.Wrapper>
  )
}

export default ProductListPage