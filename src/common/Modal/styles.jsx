import styled from "styled-components";

export const Wrapper = styled.div`
`;

export const Container = styled.div`
  .modal-overlay {
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    inset: 0 0 0 0;
    animation-name: fadeIn;
    animation-duration: 0.2s;
    user-select: none;
    .modal-container {
      padding: 0px 12px;
      .modal-content {
        animation-name: zoom;
        animation-duration: 0.5s;
        position: absolute;
        height: fit-content;
        width: 520px;
        max-width: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 6% auto auto ;
        border-radius: 6px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        .header {
          width: 100%;
          position: absolute;
          z-index: 1;
          padding: 16px 16px 0 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 500;
          font-size: 16px;
          border-bottom: 1px solid var(--boder-dividing-color);
          > i {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            background-color: #E9F1F8;
            :hover {
              background-color: #f1f1f1;
            }
          }
        }
        .children {
          margin-top: 48px;
        }
      }
    }

    @keyframes moveToLeft {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(0);
      }
    }

    @keyframes zoom {
      0% {
        transform: scale3d(0.3, 0.3, 0.3);
      }
      100% {
      }
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;
