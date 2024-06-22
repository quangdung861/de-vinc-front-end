import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import clsx from "clsx";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import CustomUploadAdapter from "common/Editor/CustomUploadAdapter";
import { ROUTER_ADMIN } from "admin/routes";
import { Button } from "admin/components";
import { Confirm } from "@common";
import { Wraper } from "./styles";
import { createProductAction } from "admin/redux/actions";

const CreateProductPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [active, setActive] = useState(1);
    const [images, setImages] = useState([]);
    const [draggingIndex, setDraggingIndex] = useState(null);
    const [
        isShowModalConfirmRemoveImageAll,
        setIsShowModalConfirmRemoveImageAll,
    ] = useState(false);

    const {
        register,
        handleSubmit,
        control,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "",
            cost: "",
            images: [],
            description: "",
            price: "",
            status: 1,
        },
    });

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
        setImages([...images, ...files]);
    };

    function uploadPlugin(editor) {
        editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
            // Configure the URL to the upload script in your backend here!
            return new CustomUploadAdapter(loader);
        };
    }

    const handleCreateProduct = (data) => {
        dispatch(createProductAction({...data, images, status: active}))
    };

    const renderProductImage = () => {
        return images.map((image, index) => (
            <div
                className={clsx("box")}
                key={index}
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragOver={() => handleDragOver(index)}
                onDragEnd={handleDragEnd}
            >
                <span className="box-close" onClick={() => handleRemoveImage(index)}>
                    <i className={clsx("fa-solid fa-circle-xmark")}></i>
                </span>
                <img src={URL.createObjectURL(image)} alt="" className="image" />
            </div>
        ));
    };

    return (
        <Wraper>
            <form onSubmit={handleSubmit((data) => handleCreateProduct(data))}>
                <div className="create-product-header">
                    <Link to={ROUTER_ADMIN.PRODUCT_LIST}>
                        <div className="header-content-left">
                            <i className="fa-solid fa-chevron-left"></i>
                            Quay lại danh sách sản phẩm
                        </div>
                    </Link>
                    <div className="header-content-right">
                        <Button
                            className="btn-dash"
                            text={"Thoát"}
                            onClick={() => navigate(ROUTER_ADMIN.PRODUCT_LIST)}
                        />
                        <Button text={"Lưu"} type="submit" />
                    </div>
                </div>
                <div className="create-product-container">
                    <div className="create-product-left">
                        <div className="content-block">
                            <div className="content-block-header">
                                <div className="block-name">Thông tin chung</div>
                            </div>
                            <div className="content-block-main">
                                <div className="content-section">
                                    <label htmlFor="product-name">
                                        Tên sản phẩm <i className="fa-solid fa-circle-info"></i>
                                    </label>
                                    <input
                                        {...register("name")}
                                        type="text"
                                        id="product-name"
                                        placeholder="Nhập tên sản phẩm"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="content-block">
                            <div className="content-block-header">
                                <div className="block-name">Giá sản phẩm</div>
                            </div>
                            <div className="content-block-main two">
                                <div className="content-section">
                                    <label htmlFor="price">
                                        Giá bán lẻ <i className="fa-solid fa-circle-info"></i>
                                    </label>
                                    <input
                                        {...register("price")}
                                        type="text"
                                        id="price"
                                        placeholder="Nhập tên sản phẩm"
                                    />
                                </div>
                                <div className="content-section">
                                    <label htmlFor="cost">
                                        Giá nhập <i className="fa-solid fa-circle-info"></i>
                                    </label>
                                    <input
                                        {...register("cost")}
                                        type="text"
                                        id="cost"
                                        placeholder="Nhập tên sản phẩm"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="content-block upload-image">
                            <div className="content-block-header">
                                <div className="block-name">
                                    Ảnh sản phẩm {images.length > 0 && `(${images.length})`}
                                </div>
                                <div
                                    className="btn-remove-all"
                                    onClick={() => setIsShowModalConfirmRemoveImageAll(true)}
                                >
                                    Xoá tất cả
                                </div>
                            </div>
                            <div className="content-block-main">
                                <div className="boxes">
                                    <label
                                        htmlFor="input-upload-image"
                                        className="label-upload-image"
                                    >
                                        <i className="fa-solid fa-plus"></i>
                                    </label>
                                    <input
                                        id="input-upload-image"
                                        type="file"
                                        multiple
                                        onChange={handleFileUpload}
                                    />
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
                                <CKEditor
                                    editor={ClassicEditor}
                                    // data={field.value}
                                    onReady={(editor) => { }}
                                    config={{
                                        extraPlugins: [uploadPlugin],
                                        toolbar: {
                                            items: [
                                                "heading",
                                                "|",
                                                "bold",
                                                "italic",
                                                "|",
                                                "bulletedList",
                                                "numberedList",
                                                "|",
                                                "blockQuote",
                                                "imageUpload",
                                                "|",
                                                "undo",
                                                "redo",
                                            ],
                                            shouldNotGroupWhenFull: true,
                                        },
                                    }}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        setValue("description", data);
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="create-product-right">
                        <div className="content-block">
                            <div className="content-block-header">
                                <div className="block-name">Thông tin bổ sung</div>
                            </div>
                            <div className="content-block-main">
                                <div className="content-section">
                                    <label htmlFor="product-name" style={{ fontWeight: 500 }}>
                                        Loại sản phẩm
                                    </label>
                                    <input
                                        type="text"
                                        id="product-name"
                                        placeholder="Nhập loại sản phẩm"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="content-block status">
                            <div className="content-block-main">
                                <div className="block-name">
                                    Trạng thái <i className="fa-solid fa-circle-info"></i>
                                </div>
                                <div className="status-option">
                                    <div>Cho phép bán</div>
                                    <i
                                        className={clsx(
                                            "fa-solid",
                                            active ? "fa-toggle-on" : "fa-toggle-off disabled"
                                        )}
                                        onClick={() => {
                                            setActive(active ? 0 : 1);
                                        }}
                                    ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-content">
                    <Button
                        className="btn-dash"
                        text={"Thoát"}
                        onClick={() => navigate(ROUTER_ADMIN.PRODUCT_LIST)}
                    />
                    <Button text={"Lưu"} type="submit" />
                </div>
            </form>
            <Confirm
                isShow={isShowModalConfirmRemoveImageAll}
                setIsShow={setIsShowModalConfirmRemoveImageAll}
                modalName="Xoá tất cả ảnh?"
                action={handleRemoveImageAll}
            >
                Bạn có chắc chắn muốn xóa tất cả ảnh sản phẩm? Thao tác này không thể
                khôi phục.
            </Confirm>
        </Wraper>
    );
};

export default CreateProductPage;
