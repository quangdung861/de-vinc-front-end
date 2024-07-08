import React, { useEffect } from 'react'
import { Wrapper } from './styles'
import Carousel from '../../layouts/components/Carousel'
import TypicalProduct from 'client/layouts/components/TypicalProduct'
import BannerBlock from 'client/layouts/components/BannerBlock'
import bgTemplate1 from "client/assets/images/mceclip2_67.webp"
import bgTemplate2 from "client/assets/images/mceclip1_85.webp"
import bgTemplate3 from "client/assets/images/mceclip0_71.webp"
import { getCategoryListAction } from 'admin/redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { clearProductListAction, getProductListAction } from 'client/redux/actions'

const HomePage = () => {
  const dispatch = useDispatch();
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
        itemsPerPage: 4
      },
    }))
    return () => dispatch(clearProductListAction())
  }, [])

  return (
    <Wrapper>
      <Carousel />
      <div className="wraper-typical-products">
        <TypicalProduct data={productList} />
      </div>
      <BannerBlock {...data[0]} />
      <div className="wraper-typical-products">
        <TypicalProduct data={productList} />
      </div>
      <BannerBlock {...data[1]} />
      <div className="wraper-typical-products">
        <TypicalProduct data={productList} />
      </div>
      <BannerBlock {...data[2]} />
      <div className="wraper-typical-products">
        <TypicalProduct data={productList} />
      </div>
    </Wrapper>
  )
}

export default HomePage