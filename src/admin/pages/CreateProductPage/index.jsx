import { useState, useRef, useEffect, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import clsx from "clsx";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Controller, set, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import CustomUploadAdapter from "common/Editor/CustomUploadAdapter";
import { ROUTER_ADMIN } from "admin/routes";
import { Button } from "admin/components";
import { Confirm, Dropdown } from "@common";
import { Wraper } from "./styles";
import {
  createCategoryAction,
  getCategoryListAction,
  createProductAction,
} from "admin/redux/actions";
import requestApi from "admin/helpers/api";
import { produce } from "immer";

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
  const [isShowCategoryDropdown, setIsShowCategoryDropdown] = useState(false);
  const [isShowCreateCategoryModal, setIsShowCreateCategoryModal] =
    useState(false);

  const [categoryData, setCategoryData] = useState({});
  const [categoryErrors, setCategoryErrors] = useState({});
  const [isSubmitedCategory, setIsSubmitedCategory] = useState(false);
  const { categoryList } = useSelector((state) => state.admin.categoryReducer);
  const [categoryKeywords, setCategoryKeywords] = useState("");
  const [categorySelected, setCategorySelected] = useState({});
  const [infomationForm, setInfomationForm] = useState({
    options: [
      {
        color: "",
        price: 0,
        quantity: 0,
        sizes: [
          {
            name: "",
            price: 0,
            quantity: 0,
          },
        ],
      },
    ],
  });
  const [errorsColor, setErrorsColor] = useState([]);
  const [errorsSize, setErrorsSize] = useState([]);
  const [applyAllValue, setApplyAllValue] = useState({
    price: "",
    quantity: "",
  });

  const categoryDropdownRef = useRef(null);
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
      reducedPrice: "",
      images: [],
      description: "",
      price: "",
      status: 1,
    },
  });

  useEffect(() => {
    dispatch(getCategoryListAction());
  }, []);

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

  const handleFileUpload = async (e, field) => {
    const files = Array.from(e.target.files);
    let formData = new FormData();
    files.forEach((file) => {
      formData.append("images", file);
    });

    const result = await requestApi(
      `/products/uploads`,
      "POST",
      formData,
      "json",
      "multipart/form-data"
    );
    setImages([...images, ...result.data]);
    field.onChange([...images, ...result.data]);
  };

  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      // Configure the URL to the upload script in your backend here!
      return new CustomUploadAdapter(loader);
    };
  }

  const handleCreateProduct = (data) => {
    if (errorsColor.length > 0 || errorsSize.length > 0) return;
    const isOptions =
      infomationForm.options.length > 1 ||
      infomationForm.options[0]?.sizes?.length > 1;
    const arrayWithoutLastColor =
      infomationForm.options.length > 1
        ? infomationForm.options.slice(0, -1)
        : infomationForm.options;
    const arrayWithoutLastSize = arrayWithoutLastColor.map((option) => {
      return {
        ...option,
        sizes: option.sizes.length > 1 ? option.sizes.slice(0, -1) : [],
      };
    });
    const formatData = {
      ...data,
      status: active,
      price:
        (!isOptions &&
          Number(
            isNaN(data.price) ? data.price.replace(/,/g, "") : data.price
          )) ||
        0,
      cost: Number(isNaN(data.cost) ? data.cost.replace(/,/g, "") : data.cost),
      reducedPrice: Number(
        isNaN(data.reducedPrice)
          ? data.reducedPrice.replace(/,/g, "")
          : data.reducedPrice
      ),
      quantity: (!isOptions && Number(data.quantity)) || 0,
      options: isOptions ? arrayWithoutLastSize : [],
      isOptions,
      images,
      categoryId: categorySelected?.id || null,
    };

    dispatch(
      createProductAction({
        data: formatData,
        callback: {
          redirect: () => navigate(ROUTER_ADMIN.PRODUCT_LIST),
        },
      })
    );
  };

  const renderProductImage = () => {
    return images.map((image, index) => {
      return (
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
          <img
            src={process.env.REACT_APP_API_URL + "/" + image}
            alt=""
            className="image"
          />
        </div>
      );
    });
  };

  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const onChange = (e) => {
    let target = e.target;
    setCategoryData({
      ...categoryData,
      [target.name]: target.value,
    });
  };

  useEffect(() => {
    if (isSubmitedCategory) {
      validateForm();
    }
  }, [categoryData]);

  const validateForm = () => {
    let isValid = true;
    const errors = {};
    if (categoryData?.category === "" || categoryData?.category === undefined) {
      errors.category = "Tên loại sản phẩm không được để trống";
    }

    if (Object.keys(errors).length > 0) {
      setCategoryErrors(errors);
      isValid = false;
    } else {
      setCategoryErrors({});
    }

    return isValid;
  };

  const handleCreateCategory = () => {
    let isValid = validateForm();
    if (isValid) {
      dispatch(
        createCategoryAction({
          data: {
            name: categoryData.category,
          },
          callback: {
            closeModal: () => setIsShowCreateCategoryModal(false),
          },
        })
      );
    } else {
      $$.toast("Tên loại sản phẩm không được để trống");
    }
    setIsSubmitedCategory(true);
  };

  const renderCategoryList = useMemo(() => {
    let newCategoryList = categoryList.data;
    if (categoryKeywords !== "") {
      newCategoryList = categoryList.data.filter((category) =>
        category.name.toLowerCase().includes(categoryKeywords.toLowerCase())
      );
    }
    return newCategoryList?.map((item, index) => {
      return (
        <div
          className="category-item"
          key={index}
          onClick={() => {
            setCategorySelected(item);
            setIsShowCategoryDropdown(false);
          }}
        >
          {item.name}
        </div>
      );
    });
  }, [categoryList.data, categoryKeywords]);

  const handleChangeForm = (value, optionIndex, name) => {
    let newInfomationForm = { ...infomationForm };
    if (name === "color") {
      if (value === "") {
        if (errorsColor.indexOf(optionIndex) === -1) {
          setErrorsColor([...errorsColor, optionIndex]);
        }
      } else {
        setErrorsColor(errorsColor.filter((error) => error !== optionIndex));
      }
      newInfomationForm.options = newInfomationForm.options.map(
        (option, index) => {
          if (index === optionIndex) {
            return {
              ...option,
              color: value,
            };
          }
          return option;
        }
      );
    }

    if (name === "sizes") {
      if (value === "") {
        if (errorsSize.indexOf(optionIndex) === -1) {
          setErrorsSize([...errorsSize, optionIndex]);
        }
      } else {
        setErrorsSize(errorsSize.filter((error) => error !== optionIndex));
      }
      newInfomationForm.options = newInfomationForm.options.map(
        (option, index) => {
          return {
            ...option,
            sizes: option.sizes.map((size, sizeIndex) => {
              if (sizeIndex === optionIndex) {
                return {
                  ...size,
                  name: value,
                };
              }
              return size;
            }),
          };
        }
      );
    }
    setInfomationForm(newInfomationForm);
  };

  const handleDeleteForm = (optionIndex, name) => {
    let newInfomationForm = { ...infomationForm };
    if (name === "color") {
      if (errorsColor.includes(optionIndex)) {
        setErrorsColor(errorsColor.filter((error) => error !== optionIndex));
      }
      newInfomationForm.options = newInfomationForm.options.filter(
        (option, index) => {
          return index !== optionIndex;
        }
      );
    }

    if (name === "sizes") {
      if (errorsSize.includes(optionIndex)) {
        setErrorsSize(errorsSize.filter((error) => error !== optionIndex));
      }
      newInfomationForm.options = newInfomationForm.options.map(
        (option, index) => {
          return {
            ...option,
            sizes: option.sizes.filter((size, sizeIndex) => {
              return sizeIndex !== optionIndex;
            }),
          };
        }
      );
    }

    console.log(newInfomationForm);
    setInfomationForm(newInfomationForm);
  };

  const renderColorList = () => {
    let list = infomationForm?.options?.map((option, index) => {
      return (
        <div className="block-option-content-item" key={index}>
          <div className="upload-btn">
            <i className="fa-regular fa-image"></i>
          </div>
          <div className="input-box">
            <input
              //  {...(index !== infomationForm?.options?.length - 1 ? register(`color-${index}`, {
              //   required: "Không được để trống ô",
              // }) : {})}
              value={option.color}
              type="text"
              placeholder="Nhập"
              autoComplete="off"
              onChange={(e) => handleChangeForm(e.target.value, index, "color")}
            />
            {index !== infomationForm?.options?.length - 1 &&
              option.color === "" && (
                <span className="error-message colors">
                  Không được để trống ô
                </span>
              )}
          </div>

          <i
            className="fa-regular fa-trash-can"
            onClick={() =>
              infomationForm?.options.length - 1 !== index &&
              handleDeleteForm(index, "color")
            }
          ></i>
        </div>
      );
    });

    if (
      infomationForm?.options &&
      infomationForm?.options[infomationForm?.options.length - 1].color !== ""
    ) {
      setInfomationForm({
        ...infomationForm,
        options: [
          ...infomationForm.options,
          {
            color: "",
            sizes: infomationForm?.options[0]?.sizes?.map((size) => ({
              ...size,
              quantity: 0,
            })),
          },
        ],
      });
    }

    return list;
  };

  const renderSizeList = () => {
    if (!infomationForm?.options) return;
    let list = infomationForm?.options[0]?.sizes?.map((size, index) => {
      return (
        <div className="block-option-content-item" key={index}>
          <div className="upload-btn">
            <i className="fa-regular fa-image"></i>
          </div>
          <div className="input-box">
            <input
              value={size.name}
              type="text"
              placeholder="Nhập"
              autoComplete="off"
              onChange={(e) => handleChangeForm(e.target.value, index, "sizes")}
            />
            {index !== infomationForm?.options[0]?.sizes.length - 1 &&
              size.name === "" && (
                <span className="error-message colors">
                  Không được để trống ô
                </span>
              )}
          </div>
          <i
            className="fa-regular fa-trash-can"
            onClick={() => handleDeleteForm(index, "sizes")}
          ></i>
        </div>
      );
    });

    if (
      infomationForm?.options &&
      infomationForm?.options[0]?.sizes &&
      infomationForm?.options[0]?.sizes[
        infomationForm?.options[0]?.sizes.length - 1
      ]?.name !== ""
    ) {
      setInfomationForm({
        ...infomationForm,
        options: [
          ...infomationForm.options.map((option) => ({
            ...option,
            sizes: [
              ...option.sizes,
              {
                name: "",
                quantity: 0,
              },
            ],
          })),
        ],
      });
    }

    return list;
  };

  const handleInputChange = (optionIndex, sizeIndex, key, value) => {
    if (sizeIndex >= 0)
      setInfomationForm(
        produce((draft) => {
          draft.options[optionIndex].sizes[sizeIndex][key] = value;
        })
      );
    else
      setInfomationForm(
        produce((draft) => {
          draft.options[optionIndex][key] = value;
        })
      );
  };

  const applyPriceToAllSizesAndOptions = () => {
    setInfomationForm(
      produce((draft) => {
        draft.options.forEach((option) => {
          if (applyAllValue.price !== "") option.price = applyAllValue.price;
          if (applyAllValue.quantity !== "")
            option.quantity = applyAllValue.quantity;
          option.sizes.forEach((size) => {
            // if (size.name) {
            if (applyAllValue.price !== "") size.price = applyAllValue.price;
            if (applyAllValue.quantity !== "")
              size.quantity = applyAllValue.quantity;
            // }
          });
        });
      })
    );
  };

  const renderProductClassificationTable = () => {
    return infomationForm?.options?.map((option, optionIndex) => {
      if (optionIndex === infomationForm?.options.length - 1 && optionIndex > 0)
        return;
      const renderSizeRow = option.sizes.map((size, sizeIndex) => {
        if (sizeIndex === option.sizes.length - 1) return;
        let price = size.price ?? 0;
        let quantity = size.quantity ?? 0;
        return (
          <div className="size-row-block" key={sizeIndex}>
            {option.sizes?.length > 1 && (
              <div className="product-classification-table-content-item size">
                {size.name}
              </div>
            )}
            <div className="product-classification-table-content-item price">
              <input
                name="size-price"
                type="text"
                placeholder="Nhập vào"
                autoComplete="off"
                value={price}
                onChange={(e) =>
                  handleInputChange(
                    optionIndex,
                    sizeIndex,
                    "price",
                    e.target.value
                  )
                }
              />
            </div>
            <div className="product-classification-table-content-item quantity">
              <input
                name="size-quantity"
                type="text"
                placeholder="Nhập vào"
                autoComplete="off"
                value={quantity}
                onChange={(e) =>
                  handleInputChange(
                    optionIndex,
                    sizeIndex,
                    "quantity",
                    e.target.value
                  )
                }
              />
            </div>
          </div>
        );
      });

      let price = option.price ?? 0;
      let quantity = option.quantity ?? 0;

      const renderColorRow = (
        <div className="size-row-block">
          <div className="product-classification-table-content-item price">
            <input
              name="size-price"
              type="text"
              placeholder="Nhập vào"
              autoComplete="off"
              value={price}
              onChange={(e) =>
                handleInputChange(optionIndex, null, "price", e.target.value)
              }
            />
          </div>
          <div className="product-classification-table-content-item quantity">
            <input
              name="size-quantity"
              type="text"
              placeholder="Nhập vào"
              autoComplete="off"
              value={quantity}
              onChange={(e) =>
                handleInputChange(optionIndex, null, "quantity", e.target.value)
              }
            />
          </div>
        </div>
      );

      return (
        <div
          className="product-classification-table-content-list"
          key={optionIndex}
        >
          {infomationForm?.options.length > 1 && (
            <div className="product-classification-table-content-item color">
              {option.color}
            </div>
          )}

          <div className="size-row">
            {renderSizeRow.length > 1 ? renderSizeRow : renderColorRow}
          </div>
        </div>
      );
    });
  };

  return (
    <Wraper>
      <form
        id="create-form"
        onSubmit={handleSubmit((data) => handleCreateProduct(data))}
      >
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
                    {...register("name", {
                      required: "Tên sản phẩm không được để trống",
                    })}
                    type="text"
                    id="product-name"
                    placeholder="Nhập tên sản phẩm"
                    autoComplete="off"
                  />
                  {errors.name && (
                    <span className="error-message">{errors.name.message}</span>
                  )}
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
                  <Controller
                    name="images"
                    control={control}
                    rules={{ required: "Ảnh sản phẩm không được để trống" }}
                    render={({ field }) => (
                      <input
                        id="input-upload-image"
                        type="file"
                        multiple
                        onChange={(e) => handleFileUpload(e, field)}
                        autoComplete="off"
                      />
                    )}
                  />
                  {renderProductImage()}
                  {errors.images && (
                    <span className="error-message">
                      {errors.images.message}
                    </span>
                  )}
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
                <Controller
                  name="description"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Mô tả không được để trống" }}
                  render={({ field }) => (
                    <CKEditor
                      editor={ClassicEditor}
                      data={field.value}
                      onReady={(editor) => {}}
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
                        field.onChange(data);
                      }}
                    />
                  )}
                />
                {errors.description && (
                  <span className="error-message">
                    {errors.description.message}
                  </span>
                )}
              </div>
            </div>

            <div className="content-block">
              <div className="content-block-header">
                <div className="block-name">Thông tin bán hàng</div>
              </div>
              <div className="content-block-main option classification-1">
                <div className="content-section">
                  <label htmlFor="product-name">
                    <span className="gif-icon"></span>
                    Phân loại hàng <i className="fa-solid fa-circle-info"></i>
                  </label>
                  <div className="block-option box-color">
                    <div className="block-option-header">Màu sắc</div>
                    <div className="block-option-content">
                      {renderColorList()}
                    </div>
                  </div>
                  <div className="block-option box-size">
                    <div className="block-option-header">Size</div>
                    <div className="block-option-content">
                      {renderSizeList()}
                    </div>
                  </div>
                </div>
              </div>
              {(infomationForm?.options?.length > 1 ||
                (infomationForm?.options?.length > 0 &&
                  infomationForm?.options[0]?.sizes?.length > 1)) && (
                <div className="content-block-main option classification-2">
                  <div className="content-section">
                    <label htmlFor="product-name">
                      <span className="gif-icon"></span>
                      Danh sách phân loại hàng
                    </label>
                    <div className="batch-edit-row">
                      <div className="block-input">
                        <input
                          type="text"
                          placeholder="Giá"
                          value={applyAllValue.price}
                          onChange={(e) =>
                            !isNaN(e.target.value) &&
                            setApplyAllValue({
                              ...applyAllValue,
                              price: Number(e.target.value),
                            })
                          }
                        />
                        <input
                          type="text"
                          placeholder="Kho hàng"
                          value={applyAllValue.quantity}
                          onChange={(e) =>
                            !isNaN(e.target.value) &&
                            setApplyAllValue({
                              ...applyAllValue,
                              quantity: Number(e.target.value),
                            })
                          }
                        />
                      </div>
                      <div
                        className="btn-primary btn-apply-edit"
                        onClick={() => applyPriceToAllSizesAndOptions()}
                      >
                        Áp dụng cho tất cả phân loại
                      </div>
                    </div>
                    <div className="product-classification-table">
                      <div className="product-classification-table-header">
                        {infomationForm?.options?.length > 1 && (
                          <div className="product-classification-table-header-item color">
                            Màu sắc
                          </div>
                        )}
                        {infomationForm?.options &&
                          infomationForm?.options[0]?.sizes?.length > 1 && (
                            <div className="product-classification-table-header-item size">
                              Size
                            </div>
                          )}
                        <div className="product-classification-table-header-item price">
                          Giá
                        </div>
                        <div className="product-classification-table-header-item quantity">
                          Kho hàng
                        </div>
                      </div>
                      <div className="product-classification-table-content">
                        {renderProductClassificationTable()}
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
                  <Controller
                    name="price"
                    control={control}
                    rules={{ required: "Giá bán lẻ không được để trống" }}
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <input
                          type="text"
                          placeholder="Nhập giá bán lẻ"
                          autoComplete="off"
                          value={
                            field.value
                              ? formatNumberWithCommas(field.value)
                              : ""
                          }
                          onChange={(e) => {
                            const value = e.target.value.replace(/,/g, "");
                            if (/^\d*$/.test(value)) {
                              const formattedValue =
                                formatNumberWithCommas(value);
                              setValue("price", formattedValue);
                              field.onChange(value);
                            }
                          }}
                        />
                        {error && (
                          <span className="error-message">{error.message}</span>
                        )}
                      </>
                    )}
                  />
                </div>
                <div className="content-section">
                  <label htmlFor="reducedPrice">
                    Giá giảm <i className="fa-solid fa-circle-info"></i>
                  </label>
                  <Controller
                    name="reducedPrice"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <input
                          type="text"
                          placeholder="Nhập giá bán nhập"
                          autoComplete="off"
                          value={
                            field.value
                              ? formatNumberWithCommas(field.value)
                              : ""
                          }
                          onChange={(e) => {
                            const value = e.target.value.replace(/,/g, "");
                            if (/^\d*$/.test(value)) {
                              const formattedValue =
                                formatNumberWithCommas(value);
                              setValue("reducedPrice", formattedValue);
                              field.onChange(value);
                            }
                          }}
                        />
                        {error && (
                          <span className="error-message">{error.message}</span>
                        )}
                      </>
                    )}
                  />
                </div>
                <div className="content-section">
                  <label htmlFor="cost">
                    Giá nhập <i className="fa-solid fa-circle-info"></i>
                  </label>
                  <Controller
                    name="cost"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <input
                          type="text"
                          placeholder="Nhập giá bán nhập"
                          autoComplete="off"
                          value={
                            field.value
                              ? formatNumberWithCommas(field.value)
                              : ""
                          }
                          onChange={(e) => {
                            const value = e.target.value.replace(/,/g, "");
                            if (/^\d*$/.test(value)) {
                              const formattedValue =
                                formatNumberWithCommas(value);
                              setValue("cost", formattedValue);
                              field.onChange(value);
                            }
                          }}
                        />
                        {error && (
                          <span className="error-message">{error.message}</span>
                        )}
                      </>
                    )}
                  />
                </div>
                {infomationForm?.options?.length <= 1 &&
                  (infomationForm?.options.length === 0 ||
                    infomationForm?.options[0]?.sizes?.length <= 1) && (
                    <div className="content-section">
                      <label htmlFor="quantity">
                        Số lượng <i className="fa-solid fa-circle-info"></i>
                      </label>
                      <Controller
                        name="quantity"
                        control={control}
                        rules={{ required: "Giá nhập không được để trống" }}
                        render={({ field, fieldState: { error } }) => (
                          <>
                            <input
                              type="text"
                              placeholder="Nhập giá bán nhập"
                              autoComplete="off"
                              value={field.value || ""}
                              onChange={(e) => {
                                const value = e.target.value;
                                setValue("quantity", value);
                                field.onChange(value);
                              }}
                            />
                            {error && (
                              <span className="error-message">
                                {error.message}
                              </span>
                            )}
                          </>
                        )}
                      />
                    </div>
                  )}
              </div>
            </div>
          </div>
          <div className="create-product-right">
            <div className="create-product-right-container">
              <div className="content-block">
                <div className="content-block-header">
                  <div className="block-name">Thông tin bổ sung</div>
                </div>
                <div className="content-block-main">
                  <div className="content-section">
                    <label htmlFor="product-name" style={{ fontWeight: 500 }}>
                      Loại sản phẩm
                    </label>
                    {/* <input
                                        type="text"
                                        id="product-name"
                                        placeholder="Nhập loại sản phẩm"
                                        autoComplete="off"
                                    /> */}

                    <div className="category-block">
                      <div
                        className={clsx(
                          "category-box",
                          isShowCategoryDropdown && "active"
                        )}
                        ref={categoryDropdownRef}
                        onClick={() =>
                          setIsShowCategoryDropdown(!isShowCategoryDropdown)
                        }
                      >
                        <div>
                          {" "}
                          {categorySelected?.name || "Chọn loại sản phẩm"}
                        </div>
                        <i
                          className={clsx(
                            "fa-solid",
                            !isShowCategoryDropdown
                              ? "fa-caret-down"
                              : "fa-caret-up"
                          )}
                        ></i>
                      </div>
                      <Dropdown
                        affect={categoryDropdownRef}
                        isShow={isShowCategoryDropdown}
                        setIsShow={setIsShowCategoryDropdown}
                        render={() => {
                          return (
                            <div className="category-dropdown">
                              <div className="catergory-search-keyword">
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <input
                                  type="text"
                                  className="input-category-keyword"
                                  placeholder="Tìm kiếm hoặc nhập mới"
                                  onChange={(e) =>
                                    setCategoryKeywords(e.target.value)
                                  }
                                />
                              </div>
                              <div
                                className="btn-add-category"
                                onClick={() =>
                                  setIsShowCreateCategoryModal(true)
                                }
                              >
                                <i className="fa-solid fa-circle-plus"></i>
                                <div>Thêm mới loại sản phẩm</div>
                              </div>
                              <div className="category-list">
                                {renderCategoryList}
                              </div>
                            </div>
                          );
                        }}
                      />
                    </div>
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
              <div className="content-block education-container">
                <div className="education-header">
                  <div className="tip-title">Gợi ý</div>
                  <i className="fa-regular fa-lightbulb"></i>
                </div>
                <div className="education-content">
                  <div className="education-title">Phân loại</div>
                  <div className="education-description">
                    <p>
                      Điền phân loại hàng nếu sản phẩm có màu sắc kích thước
                      khác nhau để khách hàng dễ lựa chọn.
                    </p>
                    <p>
                      Xem hướng dẫn cách phân loại hàng trên De Vinc{" "}
                      <span>tại đây</span>
                    </p>
                  </div>
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

      <Confirm
        isShow={isShowCreateCategoryModal}
        setIsShow={setIsShowCreateCategoryModal}
        modalName="Thêm loại sản phẩm"
        footer={
          <>
            <div
              className="btn-dash"
              onClick={() => setIsShowCreateCategoryModal(false)}
            >
              Thoát
            </div>
            <div
              className="btn-primary"
              onClick={() => {
                handleCreateCategory();
              }}
            >
              Thêm loại sản phẩm
            </div>
          </>
        }
      >
        <label
          htmlFor="category-name"
          className="category-name"
          style={{ marginBottom: "8px" }}
        >
          Tên loại sản phẩm <span style={{ color: "rgb(238, 77, 45)" }}>*</span>
        </label>
        <input
          type="text"
          id="category-name"
          name="category"
          autoComplete="off"
          onChange={(e) => onChange(e)}
        />
        {categoryErrors.category && (
          <span className="error-message">{categoryErrors.category}</span>
        )}
      </Confirm>
    </Wraper>
  );
};

export default CreateProductPage;
