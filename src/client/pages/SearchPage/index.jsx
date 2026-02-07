import React, { useState, useContext, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import * as S from "./styles";
import { getSearchListAction } from "client/redux/actions";
import { getImage, useNavigateWithSlug } from "client/utils";
import { useLocation } from "react-router-dom";
import { ClientContext } from "client/contexts/ClientProvider";
import { ROUTER_CLIENT } from "client/routes";

const SearchPage = () => {
    const navigateWithSlug = useNavigateWithSlug();
    const dispatch = useDispatch();
    const location = useLocation();
    const [keyword, setKeyword] = useState('');
    const { setIsBoxSearch } = useContext(ClientContext);
    const { searchList } = useSelector((state) => state.client.productReducer);
  
    const handleRedirectDetail = (slug) => {
        navigateWithSlug(ROUTER_CLIENT.PRODUCT_DETAIL, slug);
    }
    useEffect(() => {
        setIsBoxSearch(false);
        return () => {
            setIsBoxSearch(true);
        };
    }, []);

    useEffect(() => {
        const keyword = location.state?.keyword;
        if (keyword) {
            setKeyword(keyword);
        }
    }, []);

    useEffect(() => {
        if (keyword.length >= 1) {
            dispatch(
                getSearchListAction({
                    params: {
                        q: keyword,
                    },
                })
            );
        } else {
            dispatch(
                getSearchListAction({
                    params: {
                        search: "",
                    },
                })
            );
        }
    }, [keyword]);

    const renderProducts = () => {
        if (searchList.data[0]) {
            return searchList.data.map((item, index) => {
                return (
                    <div className="result-search-item" key={index} onClick={() => handleRedirectDetail(item.slug)}>
                        <div className="result-search-item__left">
                            <img src={getImage(item?.images).thumbnail} alt="" />
                        </div>
                        <div className="result-search-item__right">
                            <h2 className="name">{item.name}</h2>
                        </div>
                    </div>
                );
            });
        }
        return (
            <div style={{ marginTop: "40px", color: "rgba(0, 0, 0, 0.54)" }}>
                Chưa có kết quả nào phù hợp.
            </div>
        );
    };

    return (
        <S.Wrapper>
            <S.Container>
                <input
                    className="search-input"
                    type="text"
                    onChange={(e) => setKeyword(e.target.value)}
                    style={keyword.length > 1 ? { fontSize: "32px" } : {}}
                    value={keyword}
                    placeholder="Tìm kiếm..."
                />
                <div className="container-result-search">
                    <div className="nav-search">
                        <div
                            className={
                                "nav-search__courses nav-search__courses--active"
                            }
                        >
                            Sản phẩm
                        </div>
                    </div>

                    {searchList.loading ? (
                        <div style={{ marginTop: "40px", color: "rgba(0, 0, 0, 0.54)" }}>
                            Đang tìm kiếm...
                        </div>
                    ) : (
                        <div className="result-search-list">
                            {renderProducts()}
                        </div>
                    )}
                </div>
            </S.Container>
        </S.Wrapper>
    );
};

export default SearchPage;
