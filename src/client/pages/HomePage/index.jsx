import React, { useEffect } from 'react'
import { Wrapper } from './styles'
import Carousel from '../../layouts/components/Carousel'
import TypicalProduct from 'client/layouts/components/TypicalProduct'
import BannerBlock from 'client/layouts/components/BannerBlock'
import bgTemplate1 from "client/assets/images/mceclip2_67.webp"
import bgTemplate2 from "client/assets/images/mceclip1_85.webp"
import bgTemplate3 from "client/assets/images/mceclip0_71.webp"
import BtnToTop from 'client/components/BtnToTop'
import { getCategoryListAction } from 'admin/redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { getProductListAction } from 'client/redux/actions'

const HomePage = () => {
  const dispatch = useDispatch();
  const { productList } = useSelector(state => state.client.productReducer)
  console.log("🚀 ~ HomePage ~ productList:", productList)
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

  const bestSellerData = {
    title: "SẢN PHẨM BÁN CHẠY",
    data: [
      {
        name: "Quần Jean Straight Patchwork Style",
        img_URL: require('client/assets/images/160_polo_1m_-3_ff63f40d38384af8b52b763b1a77f512_1024x1024.jpg'),
        price: "380.000đ",
      },
      {
        name: "Quần Jean Straight Patchwork Style",
        img_URL: require('client/assets/images/160_polo_1m_-3_ff63f40d38384af8b52b763b1a77f512_1024x1024.jpg'),
        price: "380.000đ",
      },
      {
        name: "Quần Jean Straight Patchwork Style",
        img_URL: require('client/assets/images/160_polo_1m_-3_ff63f40d38384af8b52b763b1a77f512_1024x1024.jpg'),
        price: "380.000đ",
      },
      {
        name: "Quần Jean Straight Patchwork Style",
        img_URL: require('client/assets/images/160_polo_1m_-3_ff63f40d38384af8b52b763b1a77f512_1024x1024.jpg'),
        price: "380.000đ",
      }
    ]
  }

  useEffect(() => {
    dispatch(getProductListAction({
      params: {
        itemsPerPage: 4
      },
    }))
  }, [])

  return (
    <Wrapper>
      <Carousel />
      <div className="wraper-typical-products">
        <TypicalProduct data={productList.data} />
      </div>
      <BannerBlock {...data[0]} />
      <div className="wraper-typical-products">
        <TypicalProduct data={productList.data} />
      </div>
      <BannerBlock {...data[1]} />
      <div className="wraper-typical-products">
        <TypicalProduct data={productList.data} />
      </div>
      <BannerBlock {...data[2]} />
      <div className="wraper-typical-products">
        <TypicalProduct data={productList.data} />
      </div>
      <BtnToTop />
    </Wrapper>
  )
}

export default HomePage