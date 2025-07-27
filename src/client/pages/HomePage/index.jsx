import React, { useEffect } from 'react'
import { Wrapper } from './styles'
import Carousel from '../../layouts/components/Carousel'
import TypicalProduct from 'client/layouts/components/TypicalProduct'
import BannerBlock from 'client/layouts/components/BannerBlock'
import bgTemplate1 from "client/assets/images/mceclip2_67.webp"
import bgTemplate2 from "client/assets/images/mceclip1_85.webp"
import bgTemplate3 from "client/assets/images/mceclip0_71.webp"
import bgTemplate4 from "client/assets/images/slide_4_img.jpg"
import bgTemplate5 from "client/assets/images/slide_5_img.jpg"
import bgTemplate6 from "client/assets/images/slide_6_img.jpg"
import { getCategoryListAction } from 'admin/redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { clearProductListAction, getProductListAction } from 'client/redux/actions'
import { useNavigate } from 'react-router-dom'
import { ROUTER_CLIENT } from 'client/routes'

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productList } = useSelector(state => state.client.productReducer)
  const data = [
    {
      title: "ĐỒ CHẠY BỘ",
      describe: "Trải nghiệm chưa từng có trong mỗi sải chân",
      textBtn: "Khám phá ngay",
      image: bgTemplate1,
    },
    {
      title: "POLO THỂ THAO",
      describe: "Công nghệ Ex-Dry thấm hút tối ưu & khô thoáng nhanh chóng",
      textBtn: "Khám phá ngay",
      image: bgTemplate2,
    },
    {
      title: "QUẦN LÓT",
      describe: "Mát lạnh cùng công nghệ Excool",
      textBtn: "Khám phá ngay",
      image: bgTemplate3,
    }
  ]

  useEffect(() => {
    dispatch(getProductListAction({
      params: {
        items_per_page: 4
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
        <span className='products-name'>Quần áo</span>
        <TypicalProduct data={productList?.data} />
        <div className="wrapper-button">
          <div className='btn-custom' onClick={() => {
            navigate(ROUTER_CLIENT.PRODUCT_LIST)
          }}>Xem thêm</div>
        </div>
      </div>
      <img src={bgTemplate6} alt="" className="banner-img" />
      <div className="wraper-typical-products">
        <span className='products-name'>Nước hoa</span>
        <TypicalProduct data={productList?.data} />
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