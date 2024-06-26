import styled, { Styled } from "styled-components";

export const Wrapper = styled.div`
.container {
  .container-top {
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 64px;
    background-color: #efefef;
    .header-left {
      flex: 1;
    }
    .header-center {
      flex: 1;
      .promotion-description {
        text-align: center;
        user-select: none;
        white-space: nowrap;
      }
    }
    .header-right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 12px;
      .btn { 
        height: 30px;
        line-height: 30px;
        padding: 0px 16px;
        background-color: #f05123;
        color: white;
        font-weight: 500;
        border-radius: 20px;
        cursor: pointer;
        flex-shrink: 0;
        text-align: center;
        display: inline-block;
        transition: all 0.2s ease;
        border: none;
        user-select: none;
        &:hover {
          opacity: 0.9;
        }
      }
      .btn-login {
        background-color: rgba(0, 0, 0, 0.0);
        color: #000;
      }
    }
  }
  .container-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 100px;
    padding: 16px 64px;
    background-color: #fff;
    .header-left {
      .header-logo {
        > span {
          font-size: 22px;
          font-weight: 600;
          letter-spacing: 8px;
          user-select: none;
          white-space: nowrap;
          cursor: pointer;
        }
      }
    }
    .header-center {
      display: flex;
      align-items: center;
      flex: 1;
      gap: 24px;
      .header-menu {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 16px;
        * {
          white-space: nowrap;
        }
        .header-menu-dropdown {
          .dropdown-title{
            cursor: pointer;
          }
          .dropdown-list {
            display: none;
            .dropdown-item {

            }
          }
        }
      }

   
    }
    .header-right {
      display: flex;
      align-items: center;
      gap: 32px;
      .box-search {
        width: 320px;
        border-radius: 20px;
        height: 42px;
        padding: 0px 16px 0px 8px;
        border: 2px solid #e8e8e8;
        transition: border-color 0.2s ease-in-out;
        display: flex;
        align-items: center;
        position: relative;
        .container-search-result {
          display: none;
          position: absolute;
          left: 0;
          top: 50px;
          width: 100%;
          max-height: calc(90vh - 66px);
          overflow: hidden;
          overflow-y: auto;
          &::-webkit-scrollbar {
            -webkit-appearance: none;
          }
          &::-webkit-scrollbar:vertical {
            width: 10px;
          }
          &::-webkit-scrollbar-thumb {
            background-color: #ccc;
            border-radius: 10px;
          }
          &::-webkit-scrollbar-track {
            background: transparent;
          }
          padding: 12px 24px;
          box-shadow: 0 -4px 32px rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          background-color: #fff;
          .top {
            display: flex;
            align-items: center;
            overflow: hidden;
            overflow-x: auto;
            &::-webkit-scrollbar {
              -webkit-appearance: none;
            }
            &::-webkit-scrollbar:horizontal {
              height: 10px;
            }
            &::-webkit-scrollbar-thumb {
              background-color: #ccc;
              border-radius: 10px;
            }
            &::-webkit-scrollbar-track {
              background: transparent;
            }
            > i {
              color: #585757;
              padding: 0 8px 0 0;
            }
            > span {
              color: #0000008a;
            }
            .icon-spin--active {
              margin-right: 8px;
              animation: mymove 1s linear infinite;
              animation-duration: 1s;
              padding: 0px;
            }
          }
          .center {
            .content-list {
              .content-item {
                .result-header {
                  padding: 24px 0 12px;
                  margin-bottom: 6px;
                  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  &__left {
                    font-weight: 500;
                    text-transform: uppercase;
                    margin: 0;
                  }
                  &__right {
                    color: #0000008a;
                    cursor: pointer;
                    &:hover {
                      color: #f05123;
                    }
                  }
                }
                .result-list {
                  .result-item {
                    display: flex;
                    align-items: center;
                    margin: 12px 0px;
                    cursor: pointer;
                    > img {
                      width: 32px;
                      height: 32px;
                      border-radius: 50%;
                      object-fit: cover;
                      margin-right: 12px;
                    }
                    > span {
                      line-height: 1.6;
                    }
                  }
                }
              }
            }
          }
        }
        .container-search-result--active {
          display: block;
        }
        &:focus-within {
          border-color: #444;
        }
        .icon-search {
          font-size: 16px;
          padding: 0px 8px;
          color: #929191;
        }
        .icon-close {
          color: #929191;
          cursor: pointer;
        }
        .input-search {
          height: 100%;
          width: 100%;
          border: none;
          padding: 0px;
        }
      }
      .header-action {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 24px;
        .btn-profile {
          cursor: pointer;
          > i {
          font-size: 16px;
          }
        }
        .btn-cart {
          cursor: pointer;
          > i {
          font-size: 16px;
          }
        }
      }
    }
  }
}
`

