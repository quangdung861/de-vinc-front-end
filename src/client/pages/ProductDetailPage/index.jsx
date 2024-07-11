import React, { useState, useEffect, useRef } from 'react'
import { Rating } from 'react-simple-star-rating'
import "./styles.scss"
import { getImage, getImages } from 'client/utils';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetailAction } from 'client/redux/actions';
import { useParams } from 'react-router-dom';
import clsx from 'clsx';
import { formatCurrency } from 'client/utils/currency';
import { Dropdown, Modal } from '@common';

const fillColorArray = [
  "#f17a45",
  "#f17a45",
  "#f19745",
  "#f19745",
  "#f1a545",
  "#f1a545",
  "#f1b345",
  "#f1b345",
  "#f1d045",
  "#f1d045"
];

const fillColor = "#f17a45";


const ProductDetail = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const { productDetail } = useSelector(state => state.client.productReducer)
  const [imageSelected, setImageSelected] = useState(null)
  const [filterRatingData, setFilterRatingData] = useState({
    rate: null,
    image: null,
    response: null,
  })
  const [showFilterRating, setShowFilterRating] = useState(false);
  const [showFilterImage, setShowFilterImage] = useState(false);
  const [showFilterResponse, setShowFilterResponse] = useState(false);
  const [isShowModalGuideSize, setIsShowModalGuideSize] = useState(false)

  const filterRatingRef = useRef(null)
  const filterImageRef = useRef(null)
  const filterResponeRef = useRef(null)

  useEffect(() => {
    dispatch(getProductDetailAction({
      data: { id }
    }))
  }, [])

  const renderImageProductList = () => {
    let images = getImages(productDetail?.data?.images)
    return images.map((item, index) => {
      return (
        <div className={clsx("product-image-item", imageSelected === item && 'active')} key={index}>
          <img src={item} alt="" onClick={() => setImageSelected(item)} />
        </div>
      )
    })
  }

  const renderFeedbackList = () => {
    return Array.from({ length: 4 }).map((item, index) => {
      return (
        <div className="product-feedback-item">
          <Rating
            allowFraction
            size={24}
            transition
            fillColor={fillColor}
            initialValue={4.5}
            readonly={true}
          />
          <div className="product-feedback-item-author">Ngô Phú</div>
          <div className="product-feedback-item-option">Đen 2XL</div>
          <p className="product-feedback-item-content">Chất vải mềm, màu sắc đẹp, giặt không bị nhăn</p>
          <div className="product-feedback-item-images">
            <img src={require('client/assets/images/anh-mau.webp')} alt="" />
            <img src={require('client/assets/images/anh-mau.webp')} alt="" />
            <img src={require('client/assets/images/anh-mau.webp')} alt="" />
          </div>
          <div className="product-feedback-item-response">
            <div className="product-feedback-item-response-content">
              <p className="product-feedback-item-response-content-content">Cảm ơn bạn đã chia sẻ, chúng tôi sẽ cố gắng hơn nữa để mang lại trải nghiệm tốt nhất cho khách hàng</p>
            </div>
          </div>
          <div className="product-feedback-item-date">
            06.01.2024
          </div>
        </div>
      )
    })
  }
  return (
    <div className='product-detail-page'>
      <div className="product-main">
        <div className="product-left">
          <div className="product-images-container">
            <div className="product-image-current">
              <img src={imageSelected || require('client/assets/images/anh-mau.webp')} alt="" />
            </div>
            <div className="product-image-list">
              {renderImageProductList()}
            </div>
          </div>
        </div>
        <div className="product-right">
          <div className="product-title">
            <div className="product-name">{productDetail.data?.name}</div>
            <div className="product-describe">Premium</div>
          </div>
          <div className="product-rating">
            <Rating
              allowFraction
              size={30}
              transition
              fillColor={fillColor}
              initialValue={4.5}
              readonly={true}
            // onClick={handleRating}
            /> (4.8)
          </div>
          <div className="product-price-infomation">
            <div className="price-original-product">{formatCurrency(productDetail.data?.price, 'vn')}</div>
            <div className="price-discount-product">
              <div className="price-discount-product__price">{formatCurrency(productDetail.data?.price, 'vn')}</div>
              <div className="price-discount-product__percent">-23%</div>
            </div>
          </div>
          <div className="product-promotion-infomation">
            <div className="product-promotion-infomation__item">
              Mua 2 được giảm thêm 5%
            </div>
            <div className="product-promotion-infomation__item">
              Hoàn tiền x2 Coolcash đến ngày 31/07/2024
            </div>
          </div>
          <div className="product-color">
            <div className="color-selected">Màu sắc: <span>Đen</span></div>
            <div className="color-list">
              <div className="color-item"><img src={getImage(null)} alt="" /></div>
              <div className="color-item"><img src={getImage(null)} alt="" /></div>
              <div className="color-item"><img src={getImage(null)} alt="" /></div>
            </div>
          </div>
          <div className="size-product">
            <div className="size-selected">
              <div className='size-selected-describe'>
                Kích thước Áo: <span>XL</span> (1m72 - 1m77 | 69kg - 75kg)
              </div>
              <div className='size-guide' onClick={() => setIsShowModalGuideSize(true)} >Hướng dẫn chọn size</div>
            </div>
            <div className="size-list">
              <div className="size-item">S</div>
              <div className="size-item">M</div>
              <div className="size-item">L</div>
              <div className="size-item">XL</div>
            </div>
          </div>
          <div className="product-action">
            <div className="product-quantity">
              <div className="decrease-quantity">-</div>
              <div className='quantity'>1</div>
              <div className="increase-quantity">+</div>
            </div>
            <div className="--btn-default btn-add-to-cart">Thêm vào giỏ hàng</div>
          </div>
          <div className="chat-with-devinc">
            <img src={require('client/assets/images/Facebook_Logo_2023.png')} alt="" />
            <div>Chat để được De Vinc tư vấn ngay (8:30 - 22:00)</div>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
          <div className="product-policy">
            <div className="product-policy-item">
              <img src={require('client/assets/images/return.png')} alt="" />
              <div>Đổi trả cực dễ chỉ cần số điện thoại</div>
            </div>
            <div className="product-policy-item">
              <img src={require('client/assets/images/return-60.png')} alt="" />
              <div>60 ngày đổi trả vì bất kỳ lý do gì</div>
            </div>
            <div className="product-policy-item">
              <img src={require('client/assets/images/phone.png')} alt="" />
              <div>Hotline 1900.27.27.37 hỗ
                trợ từ 8h30 - 22h mỗi ngày</div>
            </div>
            <div className="product-policy-item">
              <img src={require('client/assets/images/location.png')} alt="" />
              <div>Đến tận nơi nhận hàng trả,
                hoàn tiền trong 24h</div>
            </div>
          </div>
          <div className="product-features">
            <div className="product-features-header">
              <div className="product-features-title">
                Đặc điểm nổi bật
              </div>
              <i className="fa-solid fa-xmark btn-expand"></i>
            </div>
            <div className="product-features-content">
              <div className="product-features-item">
                <i className="fa-solid fa-minus"></i>
                <div>Chất liệu: 95% Cotton Compact - 5% Spandex</div>
              </div>
              <div className="product-features-item">
                <i className="fa-solid fa-minus"></i>
                <div>Phù hợp với: mặc ở nhà, đi làm, đi chơi</div>
              </div>
              <div className="product-features-item">
                <i className="fa-solid fa-minus"></i>
                <div>Kiểu dáng: Regular Fit dáng suông</div>
              </div>
              <div className="product-features-item">
                <i className="fa-solid fa-minus"></i>
                <div>Tự hào sản xuất tại Việt Nam</div>
              </div>
              <div className="product-features-item">
                <i className="fa-solid fa-minus"></i>
                <div>Người mẫu: 184 cm, 73 kg, mặc size 2XL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-description">
        <div className="product-description-header">
          <div className="product-description-title">
            Chi tiết sản phẩm
          </div>
        </div>
        <div className="product-description-content">
          Áo thun nam cotton Compact Premium sử dụng chất liệu cotton mềm mại, mang đến cảm giác dễ chịu cho cả ngày dài hoạt động. Nếu bạn là người yêu sự đơn giản và ưu tiên sự tiện lợi, linh hoạt thì đây chính là sản phẩm dành cho bạn.
        </div>
        <div className="product-description-footer">
          <p>Mua sắm online đa kênh tiện lợi: website <span className='link-text'>devinc.vn, Shopee Mall, Lazada Mall, Tik Tok Shop.</span></p>
          <p>Theo dõi kênh <span className='link-text'>Facebook De Vinc</span> để cập nhật tình trạng tiếp nhận đơn hàng và các chương trình khuyến mãi.</p>
          <p>Nếu muốn trải nghiệm sản phẩm và mua hàng trực tiếp, ghé ngay Cơ sở Đà Nẵng: <span className='link-text'>K82/25 Nguyễn Lương Bằng, Phường Hoà Khánh Bắc, Quận Liên Chiểu, TP Đà Nẵng.</span></p>
          <p>Đừng quên truy cập <span className='link-text'>Mã giảm giá De Vinc</span> để cập nhật nhanh nhất các mã giảm giá và voucher ưu đãi hấp dẫn theo từng tháng nhé.</p>
        </div>
      </div>

      <div className="product-review">
        <div className="product-review-left">
          <div className="product-review-current">
            <div className="product-review-current-title">ĐÁNH GIÁ SẢN PHẨM</div>
            <div className="product-review-current-rating-number">4.8</div>
            <div className="product-review-current-rating-star">
              <Rating
                allowFraction
                size={30}
                transition
                fillColor={fillColor}
                initialValue={4.5}
                readonly={true}
              />
            </div>
            <div className="product-review-current-rating-total">1201 đánh giá</div>
          </div>
        </div>
        <div className="product-review-right">
          <div className="product-review-right-header">
            <div className="product-review-right-filter">
              <div className="product-review-right-filter-item">
                <div className="product-review-filter-btn" ref={filterRatingRef} onClick={() => setShowFilterRating(!showFilterRating)}>
                  <div className="filter-review-name">Đánh giá</div>
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
                <Dropdown
                  isShow={showFilterRating}
                  setIsShow={setShowFilterRating}
                  affect={filterRatingRef}
                  render={() => {
                    return (
                      <div className="dropdown-filter-list">
                        <div className="dropdown-filter-item">Đánh giá</div>
                        <div className="dropdown-filter-item">1 sao</div>
                        <div className="dropdown-filter-item">2 sao</div>
                        <div className="dropdown-filter-item">3 sao</div>
                        <div className="dropdown-filter-item">4 sao</div>
                        <div className="dropdown-filter-item">5 sao</div>
                      </div>
                    )
                  }} />
              </div>
              <div className="product-review-right-filter-item">
                <div className="product-review-filter-btn" ref={filterImageRef} onClick={() => setShowFilterImage(!showFilterImage)}>
                  <div className="filter-review-name">Ảnh</div>
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
                <Dropdown
                  isShow={showFilterImage}
                  setIsShow={setShowFilterImage}
                  affect={filterImageRef}
                  render={() => {
                    return (
                      <div className="dropdown-filter-list">
                        <div className="dropdown-filter-item">Ảnh</div>
                        <div className="dropdown-filter-item">Có ảnh</div>
                        <div className="dropdown-filter-item">Không ảnh</div>
                      </div>
                    )
                  }} />
              </div>
              <div className="product-review-right-filter-item">
                <div className="product-review-filter-btn" ref={filterResponeRef} onClick={() => setShowFilterResponse(!showFilterResponse)}>
                  <div className="filter-review-name">Phản hồi</div>
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
                <Dropdown
                  isShow={showFilterResponse}
                  setIsShow={setShowFilterResponse}
                  affect={filterResponeRef}
                  render={() => {
                    return (
                      <div className="dropdown-filter-list">
                        <div className="dropdown-filter-item">Phản hồi</div>
                        <div className="dropdown-filter-item">Đã phản hồi</div>
                        <div className="dropdown-filter-item">Chưa phản hồi</div>
                      </div>
                    )
                  }} />
              </div>
            </div>
          </div>
          <div className="product-review-right-content">
            <div className="product-feedback-list">
              {renderFeedbackList()}
            </div>
          </div>
        </div>
      </div>
      <Modal
        isShow={isShowModalGuideSize}
        setIsShow={setIsShowModalGuideSize}
        className='modal-guide-size'
        modalName='Bảng size'
      >
        <div className="guide-size-container">
          <div className="guide-size-content">
            <div className="guide-size-left">
              <p className='title'>💁‍♂️ BẢNG SIZE QUẦN SHORT GAP</p>
              <p>- Size 28 : 46 - 56kg / Cao 1m53 - 1m70</p>
              <p>- Size 29 : 57 - 60kg / Cao 1m57 - 1m75</p>
              <p>- Size 30 : 61 - 64kg / Cao 1m66 - 1m75</p>
              <p>- Size 31 : 65 - 69kg / Cao 1m66 - 1m80</p>
              <p>- Size 32 : 70 - 75kg / Cao 1m66 - 1m82</p>
              <p>- Size 34 : 76 - 81kg / Cao 1m66 - 1m83</p>
              <p>- Size 36 : 82 - 85kg / Cao 1m66 - 1m85</p>
              <p>Tuỳ mỗi người thích body hoặc rộng thì tăng hoặc giảm 1 size, chỉ số trên là tương đối mặc thoải mái.</p>
            </div>
            <div className="guide-size-right">
              <img src={require('client/assets/images/anh-mau.webp')} alt="" srcset="" />
            </div>
          </div>
          <div className="guide-size-footer">
            Trường hợp số đo của bạn nằm trong khoảng giữa các size với nhau: <br />
            Với áo thun, bạn hãy lựa chọn ưu tiên theo chiều cao<br />
            Ví dụ chiều cao của bạn theo size L nhưng cân nặng của bạn theo size M, Hãy chọn L.<br />
            <p>97% khách hàng của chúng tôi đã chọn đúng size theo cách này.</p>
          </div>
        </div>
      </Modal>
    </div >
  )
}

export default ProductDetail