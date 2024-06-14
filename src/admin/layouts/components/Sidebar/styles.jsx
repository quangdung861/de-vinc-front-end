import { styled } from "styled-components";

export const Wraper = styled.div`
    background-color: #182537;
    min-height: 100vh;
    width: ${({ $isshowsidebar }) => $isshowsidebar ? "230px" : "52px"};
    flex-shrink: 0;
    transition: 0.3s all ease;
    color: #fff;
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        white-space: nowrap;
        .header-logo {
            padding: 12px;
            font-size: 28px;
            font-weight: 600;
            color: #fff;
            cursor: pointer;
        }
        > i {
            padding: 12px;
            font-size: 24px;
            color: #fff;
            cursor: pointer;
        }
    }
    .menu-list {
        .menu-action {
            .menu-name {   
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 48px;
                margin: 4px;
                cursor: pointer;
                transition: background-color 0.2s ease;
                border-radius: 2px;
                white-space: nowrap;
                &:hover {
                    background-color: #243041;
                }
                .menu-name-left {
                    > i {
                        margin: 0 10px;
                    }
                }
                .menu-name-right {
                    > i {
                        margin: 0 10px;
                    }
                }
            }
            .menu-name.active {
                background-color: #0088FF;
            }
            .menu-item {
                display: flex;
                align-items: center;
                height: 40px;
                padding-left: 44px;
                cursor: pointer;
                transition: background-color 0.2s ease;
                border-radius: 2px;
                white-space: nowrap;
                &:hover {
                    background-color: #243041;
                }
            }
            .menu-item.active {
                color: #0088FF;
            }
        }
    }
`