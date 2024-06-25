import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 68px 64px 40px;
  background-color: #181821;
  .footer-container {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 0 auto;
    padding: 0px 12px;
    .container-item-start {
      width: 25%;
      .logo-dmca {
        margin-top: 20px;
      }
      .title-first {
        display: flex;
        align-items: center;
        color: #fff;
        img {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          margin-right: 8px;
        }
      }
      .content {
        color: #a9b3bb;
      }
    }

    .container-item-end {
      width: 25%;
      .title-first {
        display: flex;
        align-items: center;
        color: #fff;
        img {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          margin-right: 8px;
        }
      }
      .title {
        color: #fff;
      }
      .content {
        color: #a9b3bb;
        .list-content {
          > li {
            margin-bottom: 8px;
          }
        }
      }
    }

    .container-item {
      width: 16.66%;
      .title {
        color: #fff;
      }
      .content {
        color: #a9b3bb;
        .list-content {
          li {
            margin-bottom: 8px;
            cursor: pointer;
            &:hover {
              color: #fff;
            }
          }
        }
      }
    }

    .footer-top {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      gap: 50px;
      padding-bottom: 30px;
      margin-bottom: 12px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      .foo-item {
        width: 33.33%;
        color: #a9b3bb;
      }
      .feed-back-title {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 8px;
        color: #fff;
      }
      .feedback-btn {
        padding: 0px 16px;
        background-color: #f05123;
        color: white;
        font-weight: 600;
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
        span {
        display: inline-block;
        line-height: 60px;
        }
      }
    
      .foo-item-phone, .foo-item-email {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-bottom: 12px;
        color: #fff;

        > i {
          font-size: 24px;
        }
        .title {
          font-size: 14px;
        }
        .detail {
          font-size: 18px;
          font-weight: 500;
          word-wrap: break-word;

        }
      }
      .social {
        white-space: nowrap;
        > i {
          font-size: 32px;
          margin-right: 40px;
          cursor: pointer;
          &:hover {
            color: #fa983a;
          }
        }
        .facebook-icon {
          /* color: #1775F1; */
        }
        .instagram-icon {
          /* color: #B7387F;  */
        }
        .tiktok-icon {
        }
      }
    }

    .footer-bottom {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      margin-top: 48px;
      .foo-bottom-left {
        color: #a9b3bb;
        margin: 12px 0px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .footer-container {
      .footer-top {
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 30px;
        .feed-back {
          width: 100%;
        }
        .contact {
          
        }
        .social {
          margin-left: 40px;
          flex: 1;
        }
      }
      .container-item-start {
        width: 100%;
      }
      .container-item {
        width: 33.33%;
      }
      .container-item-end {
        width: 50%;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .footer-container {
      .footer-top {
        justify-content: flex-start;
        flex-wrap: wrap;
        .foo-item {
          width: 100%;
        }
        .social {
          margin-left: 0px;
        }
      }
      .container-item-start {
        width: 100%;
      }
      .container-item {
        width: 100%;
      }
      .container-item-end {
        width: 100%;
      }
    }
    
    .footer-bottom {
      .foo-bottom-left {
        width: 100%;
      }
      .foo-bottom-right {
        width: 50%;
      }
    }
  }

`;
