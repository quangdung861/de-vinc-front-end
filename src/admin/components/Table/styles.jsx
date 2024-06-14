import { styled } from "styled-components";

export const Wraper = styled.div`
    min-height: inherit;
    display: flex;
    flex-direction: column;
    .table-name {
        display: flex;
        align-items: center;
        height: 48px;
        padding: 6px 16px;
        font-weight: 600;
        color: #0088FF;
        border-bottom: var(--boder-dividing);
    }
       
    .filter-container {
        padding: 8px 12px;
        .box-search {
        width: 320px;
        border-radius: 3px;
        height: 36px;
        padding: 0px 16px 0px 8px;
        border: 2px solid #e8e8e8;
        transition: border-color 0.2s ease-in-out;
        display: flex;
        align-items: center;
        position: relative;
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
    }
   
    .table-block {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        table {
            thead {
                background-color: #F4F6F8;
                th {
                height: 52px;
                padding: 0 16px;
                text-align: start;
                font-weight: 500;
                }
            }
            tbody {
                tr {
                    height: 60px;
                    border-bottom: var(--boder-dividing);
                    &:hover {
                        cursor: pointer;
                        background-color: #f1f1f1;
                    }
                }
            }
        }
        .table-footer {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 54px;
            user-select: none;
            .per-page {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              gap: 12px;
              margin-right: 24px;
              .per-page-block {
                position: relative;
                .per-page-current {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 32px;
                    width: 88px;
                    padding: 4px 8px;
                    border: var(--boder-dividing);
                    border-radius: 3px;
                    cursor: pointer;
                    > i {
                        font-size: 20px;
                        margin-bottom: 8px;
                    }
                }
                .per-page-list {
                    display: none;
                    position: absolute;
                    bottom: 40px;
                    box-shadow: var(--box-shadow-default);
                    background-color: #fff;
                    padding: 4px;
                    border-radius: 3px;
                    .per-page-item {
                        display: flex;
                        align-items: center;
                        height: 32px;
                        width: 80px;
                        padding: 4px;
                        border-radius: 3px;
                        &:hover {
                            cursor: pointer;
                            background-color: #f1f1f1;
                        }
                    }
                    .per-page-item.active {
                        background-color: #F2F9FF;
                        color: #0088FF;
                    }
                }
              }
              .per-page-block.active {
                    .per-page-current {
                        border: 1px solid #0088FF;
                        > i {
                            color: #0088FF;
                            margin-bottom: -8px;
                        }
                    }
                    .per-page-list {
                        display: block
                    }
                }  
            }
            .pagination-block {
                display: flex;
                align-items: center;
                gap: 12px;
                .pagination-list {
                    display: flex;
                    gap: 4px;
                    .page-item {
                        padding: 6px 12px;
                        background-color: #f1f1f1;
                        border-radius: 3px;
                        cursor: pointer;
                        &:hover {
                            opacity: 0.8;
                        }
                    }
                    .page-item.active {
                        color: #fff;
                        background-color: #0088FF;
                    }
                    .page-item.disabled {
                        color: #fff;
                        background-color: #ccc;
                        pointer-events: none;
                    }
                }
            }
        }
    }
`