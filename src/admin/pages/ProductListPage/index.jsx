import React, { useState } from 'react'
import { useContext, useEffect } from 'react'
import { AdminContext } from 'admin/contexts/AdminProvider'
import { Wraper } from './styles'
import { Button, Table } from 'admin/components'
import { formatDateTime } from 'admin/utils/formatDateTime'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductListAction } from 'admin/redux/actions'
import styled from 'styled-components'
import { ROUTER_ADMIN } from 'admin/routes'
import { NstatusProducts, NstatusProductsSTring } from './constant'
import clsx from 'clsx'

const HoverableSpan = styled.span`
    color: #0088FF;
    &:hover {
        text-decoration: underline; 
    }
`;

const thumbnail = {
    height: "35px", width: "35px", objectFit: "cover", borderRadius: "2px"
}

const ProductListPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { setBreadcrum } = useContext(AdminContext)

    const { productList } = useSelector(state => state.productReducer);
    const lastPage = productList.meta.lastPage;
    const totalOfPage = productList.meta.total;

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(50)
    const [searchKeyword, setSearchKeyword] = useState("");
    const [selectedRows, setSelectedRows] = useState([]);

    const columns = [
        {
            name: "Ảnh",
            element: row => <img style={thumbnail}
                src={row.images ? process.env.REACT_APP_API_URL + '/' + row.images.split('<&space>')[0]
                    : require('admin/assets/images/placeholder-1.png')} alt='' />,
            width: "150px"
        },
        {
            name: "Sản phẩm",
            element: row => <Link><HoverableSpan>{row.name}</HoverableSpan></Link>,
            width: "300px"
        },
        {
            name: "Giá",
            element: row => row.price,
            width: "300px"
        },
        // {
        //     name: "Loại",
        //     element: row => row.user.first_name,
        //     width: "150px"
        // },
        // {
        //     name: "Có thể bán",
        //     element: row => row.user.first_name,
        //     width: "150px"
        // },
        {
            name: "Trạng thái",
            element: row => <div className={clsx({'tag-warning': row.status === NstatusProducts.ACTIVE, 'tag-danger': row.status === NstatusProducts.INACTIVE})}>{NstatusProductsSTring[row.status]}</div>,
            width: "150px"
        },
        {
            name: "Ngày khởi tạo",
            element: row => formatDateTime(row.created_at),
            width: "150px"
        },
        // {
        //     name: "Actions",
        //     element: row => (
        //         <>
        //             <Link to={`/post/edit/${row.id}`} className='btn btn-sm btn-warning me-1'><i className='fa fa-pen'></i></Link>
        //             <button type='button' className='btn btn-sm btn-danger me-1' onClick={() => null}><i className='fa fa-trash'></i></button>
        //         </>
        //     )
        // }
    ]

    useEffect(() => {
        setBreadcrum("Danh sách sản phẩm")
    }, [])

    useEffect(() => {
        // console.log(window);
        // window.$$.loading(true);
        // console.log($$)
        // R.loading();
        dispatch(getProductListAction({
            params: {
                currentPage,
                itemsPerPage,
                searchKeyword
            },
        }))

    }, [itemsPerPage, currentPage, searchKeyword])

    // useEffect(() => {
    //     setLastPage(productList.meta.lastPage);
    //     setTotalOfPage(productList.meta.total);
    //     setCurrentPage(productList.meta.currentPage);
    // }, [productList])


    return (
        <Wraper>
            <div className="menu-container">
                <div className="menu-container-left"></div>
                <div className="menu-container-right">
                    <Button text={"Thêm sản phẩm"} icon={<i className="fa-solid fa-plus"></i>} onClick={() => navigate(ROUTER_ADMIN.CREATE_PRODUCT)} />
                </div>
            </div>
                <Table
                    name='Tất cả sản phẩm'
                    data={productList.data}
                    columns={columns}

                    lastPage={lastPage}
                    totalOfPage={totalOfPage}

                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}

                    itemsPerPage={itemsPerPage}
                    setItemsPerPage={setItemsPerPage}

                    setSearchKeyword={setSearchKeyword}
                    setSelectedRows={setSelectedRows}
                    selectedRows={selectedRows}
                />
        </Wraper>
    )
}

export default ProductListPage