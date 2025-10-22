import { styled } from "styled-components";

const boxShadowBlock = "0px 2px 4px rgba(168, 168, 168, 0.25)";
export const Wraper = styled.div`
  .create-product-header {
    top: 0;
    height: 52px;
    display: flex;
    padding: 0 32px;
    z-index: 998;
    position: sticky;
    background: #fff;
    box-shadow: ${boxShadowBlock};
    align-items: center;
    justify-content: space-between;
    .header-content-left {
      font-weight: 500;
      white-space: nowrap;
      cursor: pointer;
      color: #747c87;
      > i {
        margin-right: 12px;
      }
    }
    .header-content-right {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 12px;
    }
    @media only screen and (max-width: 576px) {
    .header-content-left {
      span {
        display: none;
      }}
    }
  }

  .create-product-container {
    padding: 24px 32px;
    display: flex;
    gap: 24px;
    .create-product-left {
      width: 66.66%;
    }
    .create-product-right {
      width: 33.33%;
      .create-product-right-container {
        position: sticky;
        top: calc(24px + 52px);
      }
    }
    .content-block {
      margin-bottom: 24px;
      border-radius: 3px;
      box-shadow: ${boxShadowBlock};
      background-color: #fff;
      .content-block-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: var(--boder-dividing);
        > * {
          padding: 16px 24px;
        }
        .block-name {
          font-size: 16px;
          font-weight: 500;
          display: flex;
          align-items: center;
          > i {
            color: var(--primary-color);
            margin-left: 8px;
            margin-top: 2px;
            font-size: 12px;
          }
        }
        & > :nth-child(2) {
          cursor: pointer;
        }
      }
      .content-block-main {
        display: flex;
        flex-wrap: wrap;
        padding: 20px 24px;
        .content-section {
          display: flex;
          flex-direction: column;
          width: 100%;
          > label {
            margin-bottom: 8px;
            > span {
              display: inline-block;
              margin-right: 8px;
              margin-bottom: 3px;
              width: 5px;
              height: 5px;
              border-radius: 50%;
              background: var(--secondary-color);
              animation: pulsateDotShadow 1.5s ease-in-out 0s infinite;
            }
            > i {
              font-size: 12px;
              margin-left: 4px;
              color: var(--primary-color);
            }
          }
          > input {
            height: 40px;
            width: 100%;
            padding: 0 12px;
            border-radius: 3px;
          }
        }
      }
      .content-block-main.two {
        margin-left: -16px;
        .content-section {
          width: calc(50% - 16px);
          margin-left: 16px;
          margin-bottom: 16px;
        }
        @media only screen and (max-width: 992px) {
          .content-section {
            width: 100%;
          }
        }
      }
      .content-block-main-describe {
        padding: 20px 24px;
        width: 100%;
        * {
          width: auto;
        }
        .ck-content {
          max-height: 500px;
          min-height: 200px;
        }
      }
      .content-block-main.option {
        .content-section {
          .block-option {
            padding: 16px;
            margin-bottom: 16px;
            border-radius: 4px;
            background-color: var(--gray-color-5);
            .block-option-header {
              font-weight: 500;
              padding-bottom: 16px;
              border-bottom: var(--boder-dividing);
            }
            .block-option-content {
              display: flex;
              align-items: baseline;
              flex-wrap: wrap;
              gap: 10px 30px;
              padding: 10px;
              .block-option-content-item {
                display: flex;
                align-items: baseline;
                width: calc(50% - 15px);
                .upload-btn {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  flex-shrink: 0;
                  width: 40px;
                  height: 40px;
                  margin-right: 4px;
                  border-radius: 4px;
                  border: 1px dashed #d8d8d8;
                  cursor: pointer;
                  > i {
                    font-size: 16px;
                    color: var(--secondary-color);
                  }
                  &:hover {
                    border: 1px dashed var(--secondary-color);
                    background-color: rgba(238, 77, 45, 0.03);
                  }
                }
                .input-box {
                  flex: 1;
                  position: relative;
                  .colors {
                    position: relative;
                    left: 0;
                  }
                }
                > i {
                  margin-left: 8px;
                  font-size: 16px;
                  color: #d8d8d8;
                  cursor: pointer;
                  &:hover {
                    color: #000;
                  }
                }
              }
              .block-option-content-item:last-child {
                .fa-trash-can {
                  pointer-events: none;
                }
              }
            }
          }
          .batch-edit-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: nowrap;
            padding-bottom: 14px;
            .block-input {
              display: flex;
              align-items: center;
              input {
                margin-right: 16px;
              }
            }
            .btn-apply-edit {
              font-size: 14px;
              font-weight: 400;
            }
          }
          .product-classification-table {
            border-radius: 4px;
            border: var(--boder-dividing);
            overflow: hidden;
            overflow-x: auto;
            max-width: 100%;
            &::-webkit-scrollbar {
              -webkit-appearance: none;
            }
            &::-webkit-scrollbar:horizontal {
              height: 12px;
            }
            &::-webkit-scrollbar-thumb {
              background-color: #ccc;
              border-radius: 8px;
            }
            .product-classification-table-header {
              display: flex;
              align-items: center;
              .product-classification-table-header-item {
                display: flex;
                justify-content: center;
                text-align: center;
                font-weight: 500;
                padding: 12px 0;
                background-color: var(--gray-color-5);
                border-bottom: var(--boder-dividing);
                flex-shrink: 0;
              }
              .product-classification-table-header-item.color {
                width: 150px;
              }
              .product-classification-table-header-item.size {
                width: 100px;
              }
              .product-classification-table-header-item.price {
                width: 220px;
              }
              .product-classification-table-header-item.quantity {
                min-width: 220px;
                flex: 1;
              }
              .product-classification-table-header-item:not(:first-child) {
                border-left: var(--boder-dividing);
              }
            }

            .product-classification-table-content {
              .product-classification-table-content-list {
                display: flex;
                align-items: center;
                .product-classification-table-content-item {
                  min-height: 72px;
                  justify-content: center;
                  text-align: center;
                  display: flex;
                  text-align: center;
                  flex-shrink: 0;
                }

                .product-classification-table-content-item.color {
                  padding: 24px 16px;
                  width: 150px;
                  /* border: none !important; */
                  border-bottom: var(--boder-dividing);
                  align-self: stretch;
                  align-items: center;
                }
                .product-classification-table-content-item.size {
                  padding: 24px 16px;
                  width: 100px;
                  border-left: var(--boder-dividing);
                }
                .product-classification-table-content-item.price {
                  padding: 16px;
                  width: 220px;
                  border-left: var(--boder-dividing);
                }
                .product-classification-table-content-item.quantity {
                  padding: 16px;
                  min-width: 220px;
                  flex: 1;
                  border-left: var(--boder-dividing);
                }

                /* .product-classification-table-content-item:not(:first-child) {
                  border-left: var(--boder-dividing);
                } */

                .size-row {
                  flex: 1;
                  .size-row-block {
                    display: flex;
                    flex: 1;
                  }
                  .size-row-block {
                    border-bottom: var(--boder-dividing);
                  }
                }
              }
              /* .product-classification-table-content-list:not(:last-child) {
                border-bottom: var(--boder-dividing-2);
              } */
            }
          }
        }
      }
      .content-block-main.option.classification-1 {
        padding: 20px 24px 0px 24px;
      }
      .content-block-main.option.classification-2 {
        padding: 0 20px 24px 20px;
      }
    }
    .content-block.status {
      .content-block-main {
        display: block;
        .block-name {
          font-weight: 500;
          i {
            margin-left: 4px;
            color: var(--primary-color);
            font-size: 12px;
          }
        }
        .status-option {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 4px;
          > i {
            font-size: 24px;
            color: var(--primary-color);
            cursor: pointer;
            transition: 0.2s all ease;
          }
          > i.disabled {
            color: #ccc;
          }
        }
        .status-option:not(:last-child) {
          padding-bottom: 16px;
        }
      }
    }
    .content-block.upload-image {
      .content-block-header {
        .btn-remove-all {
          color: var(--primary-color);
        }
      }
      .boxes {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        .box {
          width: 90px;
          height: 90px;
          border-radius: 3px;
          user-select: none;
          position: relative;
          box-shadow: rgb(168, 168, 168) 3px 3px 6px;
          .image {
            width: 100%;
            height: 100%;
            border-radius: 3px;
            object-fit: cover;
            cursor: grab;
          }
          .box-close {
            display: none;
            align-items: center;
            justify-content: center;
            position: absolute;
            right: 0;
            width: 20px;
            height: 20px;
            border-radius: 50px;
            cursor: pointer;
            background-color: white;
            > i {
              font-size: 12px;
              color: red;
            }
          }
          &:hover {
            .box-close {
              display: flex;
            }
          }
          .dragging {
          }
        }
        .label-upload-image {
          width: 90px;
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 3px;
          border: 1px dashed #e6e6e6;
          cursor: pointer;
          > i {
            font-size: 16px;
          }
        }
        #input-upload-image {
          display: none;
        }
      }
    }

    .content-block.education-container {
      .education-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 16px;
        .tip-title {
          font-size: 16px;
          font-weight: 600;
          color: var(--primary-color);
        }
        > i {
          font-size: 50px;
          transform: rotate(40deg);
          color: var(--primary-color-3);
        }
      }
      .education-content {
        padding-bottom: 4px;
        .education-title {
          padding: 0 16px 8px;
          font-size: 16px;
          font-weight: 500;
        }
        p {
          padding: 0 16px 8px;
          > span {
            color: var(--primary-color);
          }
        }
      }
    }
    @media only screen and (max-width: 998px) {
      flex-direction: column;
      padding: 32px 16px;
      .create-product-left {
      width: 100%;
      }
      .create-product-right {
      width: 100%;
      }
    } 
    @media only screen and (max-width: 576px) {
      padding: 16px 8px;
    }
  }

  .category-block {
    position: relative;
    user-select: none;
    .category-box {
      width: 100%;
      height: 40px;
      padding: 0 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 3px;
      border: var(--boder-dividing);
      cursor: pointer;
      > i {
        color: #a3a8af;
      }
      .fa-caret-up {
        color: var(--primary-color);
      }
      &:hover {
        border: 1px solid #b8b8b8;
      }
      &.active {
        border: 1px solid var(--primary-color);
      }
    }

    .category-dropdown {
      position: absolute;
      width: 100%;
      margin-top: 6px;
      border-radius: 3px;
      box-shadow: var(--box-shadow-default);
      background-color: #fff;
      .catergory-search-keyword {
        height: 40px;
        padding: 0 16px;
        overflow: hidden;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-radius: 3px;
        border: 1px solid #fff;
        i {
          color: #999;
        }
        input {
          height: 40px;
          width: 100%;
          border: none;
        }
        &:hover {
          border: 1px solid #ccc;
        }
      }
      .btn-add-category {
        display: flex;
        align-items: center;
        height: 40px;
        padding: 0 16px;
        font-weight: 500;
        border-bottom: var(--boder-dividing);
        color: var(--primary-color);
        cursor: pointer;
        > i {
          font-size: 16px;
          margin-right: 6px;
          margin-top: 1px;
        }
        &:hover {
          background-color: #f2f9ff;
        }
      }
      .category-list {
        max-height: 200px;
        overflow: hidden;
        overflow-y: scroll;

        &::-webkit-scrollbar {
          -webkit-appearance: none;
        }
        &::-webkit-scrollbar:vertical {
          width: 8px;
        }
        &::-webkit-scrollbar-thumb {
          background-color: #ccc;
          border-radius: 8px;
        }
        .category-item {
          height: 40px;
          padding: 10px 16px;
          border-bottom: var(--boder-dividing);
          cursor: pointer;
          &:hover {
            color: var(--primary-color);
            background-color: #f2f9ff;
          }
        }
      }
    }
  }

  .footer-content {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    padding: 0 32px 24px;
  }

  @keyframes pulsateDotShadow {
    0% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    100% {
      opacity: 0.1;
      -webkit-transform: scale(2.6);
      transform: scale(2.6);
    }
  }
`;
