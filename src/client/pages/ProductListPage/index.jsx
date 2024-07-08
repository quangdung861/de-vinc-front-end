import React, { useEffect, useMemo, useState } from "react";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import {
  clearProductListAction,
  getProductListAction,
} from "client/redux/actions";
import { ROUTER_CLIENT } from "client/routes";
import { generatePath, useNavigate } from "react-router-dom";
import { Dropdown } from "@common";
import { NFilterProducts, NFilterProductsSTring } from "./constant";
import Button from "client/components/Button";
import SkeletonProduct from "./Skeleton/SkeletonProduct";

const filterItems = [
  {
    name: NFilterProductsSTring[NFilterProducts.NEW],
    sortValue: "created_at",
    order: "DESC",
  },
  {
    name: NFilterProductsSTring[NFilterProducts.PRICE_DESC],
    sortValue: "price",
    order: "DESC",
  },
  {
    name: NFilterProductsSTring[NFilterProducts.PRICE_ASC],
    sortValue: "price",
    order: "ASC",
  },
];

const ProductListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productList } = useSelector((state) => state.client.productReducer);
  const [isShowFilterList, setIsShowFilterList] = useState(false);
  const [filterData, setFilterData] = useState({
    sort: filterItems[0],
    currentPage: 1,
    itemsPerPage: 10,
  });

  useEffect(() => {
    return () => dispatch(clearProductListAction());
  }, []);

  useEffect(() => {
    dispatch(
      getProductListAction({
        params: {
          currentPage: filterData.currentPage,
          itemsPerPage: filterData.itemsPerPage,
          order: filterData.sort.order,
          sortValue: filterData.sort.sortValue,
        },
      })
    );
  }, [filterData]);

  const handleRedirectDetail = (id) => {
    navigate(generatePath(ROUTER_CLIENT.PRODUCT_DETAIL, { id }));
  };

  const renderProductList = useMemo(() => {
    return productList.data?.map((item, index) => {
      return (
        <div className="product-item" key={index}>
          <div className="product-box-image">
            <img
              className="product-image"
              src={
                process.env.REACT_APP_API_URL +
                "/" +
                item?.images?.split("<&space>")[0]
              }
              alt=""
              onClick={() => handleRedirectDetail(item.id)}
            />
          </div>
          <div className="product-describe">
            <span className="product-name">{item.name}</span>
            <div className="product-price">
              {item?.price?.toLocaleString()}đ
            </div>
          </div>
        </div>
      );
    });
  }, [productList.data]);

  const handleFilterProduct = (item) => {
    dispatch(clearProductListAction());
    setFilterData({
      currentPage: 1,
      itemsPerPage: 10,
      sort: item,
    });
    setIsShowFilterList(false);
  };

  const renderFilterList = () => {
    return filterItems.map((item, index) => {
      return (
        <div
          className="filter-dropdown-item"
          key={index}
          onClick={() => handleFilterProduct(item)}
        >
          {item.name}
        </div>
      );
    });
  };

  const handleSeeMore = () => {
    setFilterData({
      ...filterData,
      currentPage: filterData.currentPage + 1,
    });
  };

  return (
    <S.Wrapper>
      <div className="product-list-container">
        <div className="product-filter">
          <span className="product-total">
            {productList.meta?.total || 0} sản phẩm
          </span>
          <div className="filter-box">
            <span>PHÂN LOẠI</span>
            <div className="filter-list">
              <div
                className="filter-btn"
                onClick={() => setIsShowFilterList(true)}
              >
                <span>{filterData.sort.name}</span>
                <i className="fa-solid fa-chevron-down"></i>
              </div>
              <div className="filter-dropdown">
                <Dropdown
                  isShow={isShowFilterList}
                  setIsShow={setIsShowFilterList}
                  render={() => {
                    return (
                      <div className="filter-dropdown-list">
                        {renderFilterList()}
                      </div>
                    );
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="products-list">
          {renderProductList}
          {productList.loading && <SkeletonProduct />}
        </div>
        <div className="btn-container">
          {productList.data?.length < productList.meta?.total && (
            <Button text="XEM THÊM" action={handleSeeMore} />
          )}
          <div className="describe-per-page">
            {productList.meta?.total
              ? `Hiển thị  ${productList.data?.length} trên tổng ${productList.meta?.total} sản phẩm`
              : "Không có sản phẩm nào được hiển thị, hãy thử bộ lọc khác."}
          </div>
        </div>
      </div>
    </S.Wrapper>
  );
};

export default ProductListPage;
