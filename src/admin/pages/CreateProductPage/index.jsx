import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Wraper } from './styles'
import { ROUTER_ADMIN } from 'admin/routes'
import { Button } from 'admin/components'
import img from "admin/assets/images/avatar-mac-dinh-1.png"
import img2 from "admin/assets/images/placeholder-1.png"
import img3 from "admin/assets/images/dashboard-examples-hero.avif"
import { Confirm } from '@common'

const fileTypes = ["JPG", "PNG", "GIF"];

const editorStyle = {
    height: '400px', // Chiều cao tùy chỉnh
};

const CreateProductPage = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState(true)
    const [images, setImages] = useState([img, img2, img3])
    const [draggingIndex, setDraggingIndex] = useState(null);
    const [isShowModalConfirmRemoveImageAll, setIsShowModalConfirmRemoveImageAll] = useState(false)
    const [describe, setDescribe] = useState('');

    const handleDragStart = (index) => {
        setDraggingIndex(index);
    };

    const handleDragOver = (index) => {
        if (draggingIndex === index) return;

        const updatedImages = [...images];
        const draggedImage = updatedImages.splice(draggingIndex, 1)[0];
        updatedImages.splice(index, 0, draggedImage);

        setDraggingIndex(index);
        setImages(updatedImages);
    };

    const handleDragEnd = () => {
        setDraggingIndex(null);
    };

    const renderProductImage = () => {
        return images.map((image, index) => (
            <div
                className={clsx('box')}
                key={index}
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragOver={() => handleDragOver(index)}
                onDragEnd={handleDragEnd}
            >
                <span className='box-close' onClick={() => handleRemoveImage(index)}>
                    <i className={clsx("fa-solid fa-circle-xmark")}></i>
                </span>
                <img src={image} alt="" className='image' />
            </div>
        ));
    };

    function handleRemoveImage(index) {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);
    }

    function handleRemoveImageAll() {
        setImages([]);
    }

    const handleFileUpload = (event) => {
        const files = Array.from(event.target.files);
        const imageUrls = files.map(file => URL.createObjectURL(file));
        setImages([...images, ...imageUrls]);
    };

    const handleDescribe = (value) => {
        console.log(value);
    }

    return (
        <Wraper>
            <div className="create-product-header">
                <Link to={ROUTER_ADMIN.PRODUCT_LIST}>
                    <div className="header-content-left">
                        <i className="fa-solid fa-chevron-left"></i>
                        Quay lại danh sách sản phẩm
                    </div>
                </Link>
                <div className="header-content-right">
                    <Button className="btn-dash" text={"Thoát"} onClick={() => navigate(ROUTER_ADMIN.PRODUCT_LIST)} />
                    <Button text={"Lưu"} />
                </div>
            </div>
            <div className="create-product-container">
                <div className="create-product-left">
                    <div className="content-block">
                        <div className="content-block-header">
                            <div className="block-name">
                                Thông tin chung
                            </div>
                        </div>
                        <div className="content-block-main">
                            <div className="content-section">
                                <label htmlFor="product-name">Tên sản phẩm <i className="fa-solid fa-circle-info"></i></label>
                                <input type="text" id="product-name" placeholder='Nhập tên sản phẩm' />
                            </div>
                        </div>
                    </div>
                    <div className="content-block">
                        <div className="content-block-header">
                            <div className="block-name">
                                Giá sản phẩm
                            </div>
                        </div>
                        <div className="content-block-main two">
                            <div className="content-section">
                                <label htmlFor="price">Giá bán lẻ <i className="fa-solid fa-circle-info"></i></label>
                                <input type="text" id="price" placeholder='Nhập tên sản phẩm' />
                            </div>
                            <div className="content-section">
                                <label htmlFor="cost">Giá nhập <i className="fa-solid fa-circle-info"></i></label>
                                <input type="text" id="cost" placeholder='Nhập tên sản phẩm' />
                            </div>
                        </div>
                    </div>
                    <div className="content-block upload-image">
                        <div className="content-block-header">
                            <div className="block-name">
                                Ảnh sản phẩm {images.length > 0 && `(${images.length})`}
                            </div>
                            <div className='btn-remove-all' onClick={() => setIsShowModalConfirmRemoveImageAll(true)}>
                                Xoá tất cả
                            </div>
                        </div>
                        <div className="content-block-main">
                            <div className="boxes">
                                <label htmlFor="input-upload-image" className='label-upload-image'>
                                    <i className="fa-solid fa-plus"></i>
                                </label>
                                <input id='input-upload-image' type="file" multiple onChange={handleFileUpload} />
                                {renderProductImage()}
                            </div>
                        </div>
                    </div>

                    <div className="content-block">
                        <div className="content-block-header">
                            <div className="block-name">
                                Mô tả <i className="fa-solid fa-circle-info"></i>
                            </div>
                        </div>
                        <div className="content-block-main-describe">
                            <ReactQuill theme="snow" onChange={handleDescribe} className="custom-quill" />
                        </div>
                    </div>

                </div>
                <div className="create-product-right">
                    <div className="content-block">
                        <div className="content-block-header">
                            <div className="block-name">
                                Thông tin bổ sung
                            </div>
                        </div>
                        <div className="content-block-main">
                            <div className="content-section">
                                <label htmlFor="product-name" style={{ fontWeight: 500 }}>Loại sản phẩm</label>
                                <input type="text" id="product-name" placeholder='Nhập tên sản phẩm' />
                            </div>
                            <div className="content-section">
                                <label htmlFor="product-name" style={{ fontWeight: 500 }}>Nhãn Hiệu</label>
                                <input type="text" id="product-name" placeholder='Nhập tên sản phẩm' />
                            </div>
                        </div>
                    </div>
                    <div className="content-block status">
                        <div className="content-block-main">
                            <div className='block-name'>Trạng thái <i className="fa-solid fa-circle-info"></i></div>
                            <div className='status-option'>
                                <div>Cho phép bán</div>
                                <i className={clsx("fa-solid", active ? "fa-toggle-on" : "fa-toggle-off disabled")} onClick={() => setActive(!active)}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Confirm
                isShow={isShowModalConfirmRemoveImageAll}
                setIsShow={setIsShowModalConfirmRemoveImageAll}
                modalName='Xoá tất cả ảnh?'
                action={handleRemoveImageAll}
            >
                Bạn có chắc chắn muốn xóa tất cả ảnh sản phẩm? Thao tác này không thể khôi phục.
            </Confirm>
        </Wraper >
    )
}

export default CreateProductPage