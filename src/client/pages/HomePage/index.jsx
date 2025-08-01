import React, { useEffect } from 'react'
import { Wrapper } from './styles'
import Carousel from '../../layouts/components/Carousel'
import TypicalProduct from 'client/layouts/components/TypicalProduct'
import BannerBlock from 'client/layouts/components/BannerBlock'
import bgTemplate1 from "client/assets/images/mceclip2_67.webp"
import bgTemplate2 from "client/assets/images/mceclip1_85.webp"
import bgTemplate3 from "client/assets/images/mceclip0_71.webp"
import bgTemplate4 from "client/assets/images/slide_4_img.jpg"
import bgTemplate6 from "client/assets/images/slide_6_img.jpg"
import { getCategoryListAction } from 'admin/redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { clearProductListAction, getProductListAction, getProductListByCategoryAction } from 'client/redux/actions'
import { useNavigate } from 'react-router-dom'
import { ROUTER_CLIENT } from 'client/routes'
import { CATEGORY_ID, CATEGORY_MAP, DEFAULT_ITEMS_PER_PAGE } from './constant'

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productList, productListByCategory } = useSelector(state => state.client.productReducer)

  useEffect(() => {
    dispatch(getProductListAction({
      params: {
        items_per_page: DEFAULT_ITEMS_PER_PAGE
      },
    }))

    dispatch(getProductListByCategoryAction({
      params: {
        items_per_page: DEFAULT_ITEMS_PER_PAGE,
        categoryId: CATEGORY_ID.PERFUME
      },
    }))

     dispatch(getProductListByCategoryAction({
      params: {
        items_per_page: DEFAULT_ITEMS_PER_PAGE,
        categoryId: CATEGORY_ID.CLOTHING
      },
    }))

    return () => dispatch(clearProductListAction())
  }, [])

  return (
    <Wrapper>
      <Carousel />
      <div className="wraper-typical-products">
        <span className='products-name'>Sản phẩm bán chạy</span>
        <TypicalProduct data={productList?.data} />
        <div className="wrapper-button">
          <div className='btn-custom' onClick={() => {
            navigate(ROUTER_CLIENT.PRODUCT_LIST)
          }}>Xem thêm</div>
        </div>
      </div>
      <img src={bgTemplate4} alt="" className="banner-img" />
      <div className="wraper-typical-products">
        <span className='products-name'>{CATEGORY_MAP[CATEGORY_ID.CLOTHING]}</span>
        <TypicalProduct data={productListByCategory[CATEGORY_ID.CLOTHING]?.data} />
        <div className="wrapper-button">
          <div className='btn-custom' onClick={() => {
            navigate(ROUTER_CLIENT.PRODUCT_LIST)
          }}>Xem thêm</div>
        </div>
      </div>
      <img src={bgTemplate6} alt="" className="banner-img" />
      <div className="wraper-typical-products">
        <span className='products-name'>{CATEGORY_MAP[CATEGORY_ID.PERFUME]}</span>
        <TypicalProduct data={productListByCategory[CATEGORY_ID.PERFUME]?.data} />
        <div className="wrapper-button">
          <div className='btn-custom' onClick={() => {
            navigate(ROUTER_CLIENT.PRODUCT_LIST)
          }}>Xem thêm</div>
        </div>
      </div>
    </Wrapper>
  )
}

export default HomePage