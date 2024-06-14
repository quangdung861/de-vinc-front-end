import styled from "styled-components";

export const Wraper = styled.div`
  z-index: 999;
  .modal-overlay {
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    inset: 0 0 0 0;
    animation-name: fadeIn;
    animation-duration: 0.2s;
    user-select: none;
    .modal-container {
      padding: 50px 12px 0;
      height: 100%;
      .modal-content {
        animation-name: zoom;
        animation-duration: 0.5s;
        width: 100%;
        max-width: 585px;
        margin: auto;
        border-radius: 6px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        .header {
          height: 48px;
          padding: 0 24px 0 24px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          font-weight: 500;
          font-size: 20px;
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
        .content {
          padding: 16px 24px;
        }
        .action {
          padding: 8px 24px 24px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
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
