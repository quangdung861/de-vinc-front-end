import React from "react";

const SkeletonTypicalProduct = () => {
  return Array(4)
    .fill()
    .map((_, index) => (
      <div className="typical-product-item" key={index}>
        <div className="typical-product-box-image">
          <div className="typical-product-image skeleton" />
        </div>
        <div className="typical-product-describe">
          <div className="product-name skeleton" style={{ height: 20 }}></div>
          <div className="product-price skeleton" style={{ height: 20 }}></div>
        </div>
      </div>
    ));
};

export default SkeletonTypicalProduct;
