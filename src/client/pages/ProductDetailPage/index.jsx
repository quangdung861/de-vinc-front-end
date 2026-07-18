import React, { useState, useEffect, useRef, useMemo } from "react";
import { Rating } from "react-simple-star-rating";
import "./styles.scss";
import { getImage, getImages } from "client/utils";
import { useDispatch, useSelector } from "react-redux";
import {
  clearProductDetailAction,
  clearProductListAction,
  getProductDetailAction,
  getProductListAction,
} from "client/redux/actions";
import { useParams } from "react-router-dom";
import clsx from "clsx";
import { formatCurrency } from "client/utils";
import { Dropdown, Modal } from "@common";
import TypicalProduct from "client/layouts/components/TypicalProduct";
import { set } from "react-hook-form";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import transporImg from "client/assets/images/transpor3.png"
import securityImg from "client/assets/images/security3.png"
import placeholder from "client/assets/images/placeholder-5.png"
import { useMediaQuery } from "react-responsive";
import NotFoundContent from "admin/layouts/components/NotFoundContent";

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
  "#f1d045",
];

const fillColor = "#f17a45";

const ProductDetail = () => {
  const dispatch = useDispatch();
  let { slug } = useParams();
  const id = slug.split("-").pop();
  const { productDetail, productList } = useSelector(
    (state) => state.client.productReducer
  );
  const [imageSelected, setImageSelected] = useState(
    placeholder
  );
  const [filterRatingData, setFilterRatingData] = useState({
    rate: null,
    image: null,
    response: null,
  });
  const [showFilterRating, setShowFilterRating] = useState(false);
  const [showFilterImage, setShowFilterImage] = useState(false);
  const [showFilterResponse, setShowFilterResponse] = useState(false);
  const [isShowModalGuideSize, setIsShowModalGuideSize] = useState(false);
  const [isShowOverlayModalDetailImage, setIsShowOverlayModalDetailImage] =
    useState(false);
  const [imageFormat, setImageFormat] = useState({
    rotate: 0,
    scale: 1,
  });
  const [isShowContainerImageList, setIsShowContainerImageList] =
    useState(true);
  const [cartInfo, setCartInfo] = useState({
    productId: id,
    color: "",
    size: "",
    quantity: 1,
  });
  const [uiState, setUiState] = useState({
    isShowFullName: false,
  })


  const filterRatingRef = useRef(null);
  const filterImageRef = useRef(null);
  const filterResponeRef = useRef(null);
  const imagesRef = useRef();

  useEffect(() => {
    dispatch(
      getProductDetailAction({
        data: { id },
      })
    );
    dispatch(
      getProductListAction({
        params: {
          bestSelling: 1,
        },
      })
    );
    return () => {
      dispatch(clearProductListAction())
      dispatch(clearProductDetailAction())
    };
  }, []);

  const [isOptionColor, setIsOptionColor] = useState(false);
  const [isOptionSize, setIsOptionSize] = useState(false);
  const [isFirstSubmit, setIsFirstSubmit] = useState(false);
  useEffect(() => {
    setImageSelected(0);
    setCartInfo({
      ...cartInfo,
      color: productDetail.data?.options?.[0]?.color || '',
    })
    let isOptionColor = productDetail.data?.options?.[0]?.color !== "" ? true : false;
    setIsOptionColor(isOptionColor);
    let isOptionSize = productDetail.data?.options?.[0]?.sizes?.length > 0 ? true : false;
    setIsOptionSize(isOptionSize);
  }, [productDetail.data]);

  // const editor = CKEDITOR.instances.myEditor;
  // const content = editor.getData();
  // console.log(content); // Hiển thị nội dung HTML trong trình chỉnh sửa

  const DeliveryEstimate = () => {
    const today = new Date();

    const datePlus2 = new Date(today);
    datePlus2.setDate(today.getDate() + 2);

    const datePlus4 = new Date(today);
    datePlus4.setDate(today.getDate() + 4);

    const day2 = datePlus2.getDate();
    const day4 = datePlus4.getDate();
    const month = datePlus2.getMonth() + 1;

    return (
      <span>
        Đảm bảo nhận từ {day2}-{day4} tháng {month}
      </span>
    );
  };

  const renderImageProductList = () => {
    let images = getImages(productDetail?.data?.images);
    return images.map((item, index) => {
      return (
        <div
          className={clsx(
            "product-image-item",
            imageSelected === index && "active"
          )}
          key={index}
        >
          <img src={item?.thumbnail} alt="" onClick={() => {
            handleGoToSlide(index);
          }} />
        </div>
      );
    });
  };

  const sliderRef = useRef(null);

  const handleGoToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
    setImageSelected(index)
  };

  const renderImageProductCurrent = () => {
    let images = getImages(productDetail?.data?.images);
    return images.map((item, index) => {
      return (
        <div key={index} className='carousel-item'>
          <img className="custom-image-current" src={item?.original} alt="" onClick={() => { setImageSelected(index) }} />
        </div>
      );
    });
  };

  const renderFeedbackList = () => {
    return Array.from({ length: 4 }).map((item, index) => {
      return (
        <div className="product-feedback-item" key={index}>
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
          <p className="product-feedback-item-content">
            Chất vải mềm, màu sắc đẹp, giặt không bị nhăn
          </p>
          <div className="product-feedback-item-images">
            <img src={require("client/assets/images/anh-mau.webp")} alt="" />
            <img src={require("client/assets/images/anh-mau.webp")} alt="" />
            <img src={require("client/assets/images/anh-mau.webp")} alt="" />
          </div>
          <div className="product-feedback-item-response">
            <div className="product-feedback-item-response-content">
              <p className="product-feedback-item-response-content-content">
                Cảm ơn bạn đã chia sẻ, chúng tôi sẽ cố gắng hơn nữa để mang lại
                trải nghiệm tốt nhất cho khách hàng
              </p>
            </div>
          </div>
          <div className="product-feedback-item-date">06.01.2024</div>
        </div>
      );
    });
  };

  const renderContainerImages = () => {
    return getImages(productDetail.data?.images).map((image, index) => {
      return (
        <img
          className="image-item"
          key={index}
          src={image.thumbnail}
          alt=""
          onClick={() => { setImageSelected(index); handleGoToSlide(index) }}
          style={
            index === imageSelected
              ? {
                minWidth: "100px",
                minHeight: "100px",
                filter: "none",
                border: "2px solid #fff",
                transition: "all .3s ease",
              }
              : {}
          }
        />
      );
    });
  };

  const renderColorList = () => {
    return productDetail.data?.options?.map((item, index) => {
      if (item.color === '') return [];
      return (
        <div className={clsx(
          "color-item-text", item.quantity === 0 && "disable", cartInfo.color === item.color && "active"
        )} key={index} onClick={() => setCartInfo({ color: item.color, size: '', quantity: 1 })}>
          {item.color}
        </div>
      );
    });
  };

  const renderSizeList = useMemo(() => {
    if (!productDetail.data || !productDetail.data.options || productDetail.data.options.length === 0) {
      return [];
    }

    const selectedOption = productDetail.data.options.find(option => option.color === cartInfo.color);

    if (!selectedOption || !selectedOption.sizes) {
      return [];
    }

    return selectedOption.sizes.map((item, index) => (
      <div
        className={clsx(
          "size-item",
          !item.quantity && "disable",
          cartInfo.size === item.name && "active"
        )}
        key={index}
        onClick={() => setCartInfo({ ...cartInfo, size: item.name })}
      >
        {item.name}
      </div>
    ));
  }, [cartInfo, productDetail]);

  const handleAddToCart = () => {
    setIsFirstSubmit(true);
    if (isOptionSize && !cartInfo.size) $$.toast("Bạn chưa chọn loại sản phẩm");
  }

  const renderHighlights = () => productDetail.data.highlights?.map((item, index) => <div key={index} className="product-features-item">
    ─ &nbsp;{item}
  </div>
  )

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 200,
    afterChange: (current) => {
      setImageSelected(current);
    },
  };

  const isLarge = useMediaQuery({ minWidth: 998 });
  const isMedium = useMediaQuery({ minWidth: 768, maxWidth: 997 });
  const isSmall = useMediaQuery({ maxWidth: 767 });
  let ratingSize = 18;

  if (isLarge) ratingSize = 24;
  else if (isMedium) ratingSize = 18;
  else if (isSmall) ratingSize = 16;

  if (productDetail.isNotFound) {
    return <NotFoundContent />;
  }
  return (
    <div className="product-detail-page">
      <div className="product-main">
        <div className="product-left">
          <div className="product-images-container">
            <div className="product-image-current"
              onClick={() => setIsShowOverlayModalDetailImage(true)}
            >
              <Slider ref={sliderRef} {...settings} >
                {renderImageProductCurrent()}
              </Slider>
              <div className="current-photo">
                {imageSelected + 1}/{productDetail?.data?.images?.length}
              </div>
            </div>
            {/* <img src={imageSelected} alt="" /> */}
            <div className="product-image-list">{renderImageProductList()}</div>
          </div>
        </div>
        <div className="product-right">
          <div className="product-title">
            <div className="product-name-box" onClick={() => setUiState({ ...uiState, isShowFullName: !uiState.isShowFullName })}>
              <div className={clsx("product-name", uiState.isShowFullName && "open")} >
                {productDetail.data?.name}
              </div>
              {
                uiState.isShowFullName && <span className="icon-open-name">▼</span>
              }
            </div>
            <div className="product-describe">Premium</div>
          </div>
          <div className="product-rating">
            <Rating
              allowFraction
              size={ratingSize}
              transition
              fillColor={fillColor}
              initialValue={4.5}
              readonly={true}
            />{" "}
            <span>
              (4.9)
            </span>
            <div className="product-describe">Premium</div>
          </div>
          <div className="product-price-infomation">
            <div
              className={clsx(
                "price-original-product",
                productDetail.data?.reducedPrice && "throught"
              )}
            >
              {formatCurrency(productDetail.data?.price, "vn")}
            </div>
            <div className="price-discount-product">
              {!!productDetail.data?.reducedPrice && (
                <div className="price-discount-product__price">
                  {formatCurrency(productDetail.data.reducedPrice, "vn")}
                </div>
              )}
              {!!productDetail.data?.reducedPercent && (
                <div className="price-discount-product__percent tag-percent-lg">
                  -{productDetail.data.reducedPercent}%
                </div>
              )}
            </div>
          </div>
          <div className="product-promotion-infomation">
            <div className="product-promotion-infomation__item">
              <img src={transporImg} alt="" />
              <span>
                <span className="freeship-tag">
                  Miễn phí vận chuyển
                </span> khi mua từ 2 cái · {DeliveryEstimate()}
              </span>
            </div>
            <div className="product-promotion-infomation__item">
              <img src={securityImg} alt="" />
              Thanh toán khi nhận · Chính hãng 100% · Trả hàng miễn phí
            </div>
          </div>
          {/* {isOptionColor && (
            <div className="product-color">
              <div className="color-selected">
                Màu sắc: <span>{cartInfo.color}</span>
              </div>
              <div className="color-list">
                <div className="color-item"><img src={getImage(null)} alt="" /></div>
              <div className="color-item"><img src={getImage(null)} alt="" /></div>
              <div className="color-item"><img src={getImage(null)} alt="" /></div>
                {renderColorList()}
              </div>
            </div>
          )} */}
          {/* {isOptionSize && (
            <div className={clsx("size-product", !cartInfo.size && isFirstSubmit && 'required')}>
              <div className="size-selected">
                <div className="size-selected-describe">
                  Kích thước Áo: <span>{cartInfo.size}</span>
                </div>
                <div
                  className="size-guide"
                  onClick={() => setIsShowModalGuideSize(true)}
                >
                  Hướng dẫn chọn size
                </div>
              </div>
              <div className="size-list">
                {renderSizeList}
              </div>
            </div>
          )} */}

          <div className="product-action">
            {/* <div className="product-quantity">
              <div className="decrease-quantity" onClick={() => cartInfo.quantity > 1 && setCartInfo({ ...cartInfo, quantity: cartInfo.quantity - 1 })}>-</div>
              <div className="quantity">{cartInfo.quantity}</div>
              <div className="increase-quantity" onClick={() => setCartInfo({ ...cartInfo, quantity: cartInfo.quantity + 1 })}>+</div>
            </div> */}
            <a
              href="https://zalo.me/0935411853"
              target="_blank"
              rel="noopener noreferrer"
              className="--btn-default btn-add-to-cart"
            >
              Nhắn tin mua hàng
            </a>
          </div>
          <div className="chat-with-devinc">
            <img
              src={require("client/assets/images/Icon_of_Zalo.svg.webp")}
              alt=""
            />
            <div>
              <a
                href="https://zalo.me/0935411853"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat để được De Vinc tư vấn ngay (8:30 - 22:00)
              </a>
            </div>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
          <div className="product-policy">
            <div className="product-policy-item">
              <img src={require("client/assets/images/return.png")} alt="" />
              <div>Đổi trả cực dễ chỉ cần số điện thoại</div>
            </div>
            <div className="product-policy-item">
              <img src={require("client/assets/images/return-60.png")} alt="" />
              <div>15 ngày đổi trả vì bất kỳ lý do gì</div>
            </div>
            <div className="product-policy-item">
              <img src={require("client/assets/images/phone.png")} alt="" />
              <div>Hotline 0935 411 853 hỗ trợ từ 8h30 - 22h mỗi ngày</div>
            </div>
            <div className="product-policy-item">
              <img src={require("client/assets/images/location.png")} alt="" />
              <div>Đến tận nơi nhận hàng trả, hoàn tiền trong 24h</div>
            </div>
          </div>
          <div className="product-features">
            <div className="product-features-header">
              <div className="product-features-title">Đặc điểm nổi bật</div>
              {/* <i className="fa-solid fa-xmark btn-expand"></i> */}
            </div>
            <div className="product-features-content">
              {renderHighlights()}
            </div>
          </div>
        </div>
      </div>
      <div className="product-description">
        <div className="product-description-header">
          <div className="product-description-title">Chi tiết sản phẩm</div>
        </div>
        <div className="product-description-content">
          <div
            className="ck5-html"
            dangerouslySetInnerHTML={{ __html: productDetail.data.description }}
          />
        </div>
        <div className="product-description-footer">
          <p>
            Mua sắm online đa kênh tiện lợi: website{" "}
            <span className="link-text">
              devinc.vn, Shopee Mall, Lazada Mall, Tik Tok Shop.
            </span>
          </p>
          <p>
            Theo dõi kênh <span className="link-text">Facebook De Vinc</span> để
            cập nhật tình trạng tiếp nhận đơn hàng và các chương trình khuyến
            mãi.
          </p>
          <p>
            Nếu muốn trải nghiệm sản phẩm và mua hàng trực tiếp, ghé ngay Cơ sở
            Đà Nẵng:{" "}
            <span className="link-text">
              K82/25 Nguyễn Lương Bằng, Phường Hoà Khánh Bắc, Quận Liên Chiểu,
              TP Đà Nẵng.
            </span>
          </p>
          <p>
            Đừng quên truy cập{" "}
            <span className="link-text">Mã giảm giá De Vinc</span> để cập nhật
            nhanh nhất các mã giảm giá và voucher ưu đãi hấp dẫn theo từng tháng
            nhé.
          </p>
        </div>
      </div>

      {/* <div className="product-review">
        <div className="product-review-left">
          <div className="product-review-current">
            <div className="product-review-current-title">
              ĐÁNH GIÁ SẢN PHẨM
            </div>
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
            <div className="product-review-current-rating-total">
              1201 đánh giá
            </div>
          </div>
        </div>
        <div className="product-review-right">
          <div className="product-review-right-header">
            <div className="product-review-right-filter">
              <div className="product-review-right-filter-item">
                <div
                  className="product-review-filter-btn"
                  ref={filterRatingRef}
                  onClick={() => setShowFilterRating(!showFilterRating)}
                >
                  <div className="filter-review-name">Đánh giá</div>
                  <i className="fa-solid fa-chevron-down"></i>
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
                    );
                  }}
                />
              </div>
              <div className="product-review-right-filter-item">
                <div
                  className="product-review-filter-btn"
                  ref={filterImageRef}
                  onClick={() => setShowFilterImage(!showFilterImage)}
                >
                  <div className="filter-review-name">Ảnh</div>
                  <i className="fa-solid fa-chevron-down"></i>
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
                    );
                  }}
                />
              </div>
              <div className="product-review-right-filter-item">
                <div
                  className="product-review-filter-btn"
                  ref={filterResponeRef}
                  onClick={() => setShowFilterResponse(!showFilterResponse)}
                >
                  <div className="filter-review-name">Phản hồi</div>
                  <i className="fa-solid fa-chevron-down"></i>
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
                        <div className="dropdown-filter-item">
                          Chưa phản hồi
                        </div>
                      </div>
                    );
                  }}
                />
              </div>
            </div>
          </div>
          <div className="product-review-right-content">
            <div className="product-feedback-list">{renderFeedbackList()}</div>
          </div>
        </div>
      </div>

      <div className="product-releated">
        <div className="product-releated-header">SẢN PHẨM BẠN ĐÃ XEM</div>
        <TypicalProduct data={productList?.data} show={5} />
      </div> */}

      <Modal
        isShow={isShowModalGuideSize}
        setIsShow={setIsShowModalGuideSize}
        id={"modal-guide-size"}
        modalName="Bảng size"
      >
        <div className="guide-size-container">
          <div className="guide-size-content">
            <div className="guide-size-left">
              <p className="title">💁‍♂️ BẢNG SIZE QUẦN SHORT GAP</p>
              <p>- Size 28 : 46 - 56kg / Cao 1m53 - 1m70</p>
              <p>- Size 29 : 57 - 60kg / Cao 1m57 - 1m75</p>
              <p>- Size 30 : 61 - 64kg / Cao 1m66 - 1m75</p>
              <p>- Size 31 : 65 - 69kg / Cao 1m66 - 1m80</p>
              <p>- Size 32 : 70 - 75kg / Cao 1m66 - 1m82</p>
              <p>- Size 34 : 76 - 81kg / Cao 1m66 - 1m83</p>
              <p>- Size 36 : 82 - 85kg / Cao 1m66 - 1m85</p>
              <p>
                Tuỳ mỗi người thích body hoặc rộng thì tăng hoặc giảm 1 size,
                chỉ số trên là tương đối mặc thoải mái.
              </p>
            </div>
            <div className="guide-size-right">
              <img
                src={require("client/assets/images/anh-mau.webp")}
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div className="guide-size-footer">
            Trường hợp số đo của bạn nằm trong khoảng giữa các size với nhau:{" "}
            <br />
            Với áo thun, bạn hãy lựa chọn ưu tiên theo chiều cao
            <br />
            Ví dụ chiều cao của bạn theo size L nhưng cân nặng của bạn theo size
            M, Hãy chọn L.
            <br />
            <p>97% khách hàng của chúng tôi đã chọn đúng size theo cách này.</p>
          </div>
        </div>
      </Modal>

      {isShowOverlayModalDetailImage && (
        <div className="images-container">
          <div className="image-show__title">
            <div>Chi tiết sản phẩm</div>
            <i
              className="fa-solid fa-xmark"
              onClick={() => setIsShowOverlayModalDetailImage(false)}
            ></i>
          </div>
          <div className="image-show__center">
            <div className="main-image">
              <img
                src={productDetail.data?.images[imageSelected]?.original}
                alt=""
                style={{
                  zIndex: 2,
                  position: "relative",
                  scale: `${imageFormat.scale}`,
                  rotate: `${imageFormat.rotate}deg`,
                }}
              />
              <div
                className="background-overlay"
                style={{ position: "absolute", inset: "0 0 0 0", zIndex: 1 }}
                onClick={() => {
                  setIsShowOverlayModalDetailImage(false);
                  setIsShowContainerImageList(true);
                }}
              ></div>
            </div>

            {isShowContainerImageList && (
              <div className="container-image-list">
                <div className="dividing">
                  <div className="dividing-line"></div>
                </div>

                <div className="images" ref={imagesRef}>
                  <div className="image-list__title"> </div>
                  {renderContainerImages()}
                </div>
              </div>
            )}
          </div>
          <div className="image-show__bottom">
            <div className="image-show__bottom__sender"></div>
            <div className="image-show__bottom__ctrl">
              <i
                className="fa-solid fa-rotate-right fa-flip-horizontal"
                onClick={() => {
                  imageFormat.scale <= 7 &&
                    setImageFormat((current) => ({
                      ...current,
                      rotate: current.rotate - 90,
                    }));
                }}
              ></i>
              <i
                className="fa-solid fa-rotate-right"
                onClick={() => {
                  imageFormat.scale <= 7 &&
                    setImageFormat((current) => ({
                      ...current,
                      rotate: current.rotate + 90,
                    }));
                }}
              ></i>
              <i
                className="fa-solid fa-magnifying-glass-plus"
                onClick={() => {
                  imageFormat.scale <= 7 &&
                    setImageFormat((current) => ({
                      ...current,
                      scale: current.scale + 0.25,
                    }));
                }}
              ></i>
              <i
                className="fa-solid fa-magnifying-glass-minus"
                onClick={() => {
                  setImageFormat((current) => ({
                    ...current,
                    scale: 1,
                  }));
                }}
              ></i>
            </div>
            <div className="image-show__bottom__slider-wrapper">
              <i
                className="fa-solid fa-expand"
                onClick={() =>
                  setIsShowContainerImageList(!isShowContainerImageList)
                }
              ></i>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
