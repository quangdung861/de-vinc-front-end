import { styled } from "styled-components";

export const Wraper = styled.div`
    top: 0;
    height: 52px;
    display: flex;
    gap: 24px;
    padding: 0 32px;
    z-index: 1001;
    position: sticky;
    background: #fff;
    box-shadow: 0px 2px 4px rgba(168, 168, 168, 0.25);
    align-items: center;
    .header-content-left {
        font-size: 24px;
        font-weight: 500;
        white-space: nowrap;
    }
    .header-content-right {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        .action-list {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            flex: 1 1 0%;
            overflow: hidden;
            width: 0px;
            .action-item {
                display: flex;
                align-items: center;
                height: 51px;
                padding: 16px 13px;
                white-space: nowrap;
                cursor: pointer;
                > i {
                    margin-right: 8px;
                    color: #A2A8AF;
                }
                &:hover {
                    color: var(--primary-color);
                    background-color: #F2F9FF;
                    i {
                      color: var(--primary-color);
                    }
                }
              
            }
        }
    }

    /* @media only screen and (max-width: 1028px) {
        .action-item :nth-child(1) {
            display: none;
        }
    } */
`