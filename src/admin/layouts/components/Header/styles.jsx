import { styled } from "styled-components";

export const Wraper = styled.div`
    top: 0;
    height: 52px;
    display: flex;
    padding: 0 32px;
    z-index: 1001;
    position: sticky;
    background: #fff;
    box-shadow: 0px 2px 4px rgba(168, 168, 168, 0.25);
    align-items: center;
    justify-content: space-between;
    .header-content-left {
        font-size: 24px;
        font-weight: 500;
        white-space: nowrap;
    }
    .header-content-right {
        .action-list {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .action-item {
                display: flex;
                align-items: center;
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
`