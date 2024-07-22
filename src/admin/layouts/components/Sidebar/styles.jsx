import { styled } from "styled-components";

export const Wraper = styled.div`
  background-color: #182537;
  min-height: 100vh;
  width: ${({ $isshowsidebar }) => ($isshowsidebar ? "230px" : "52px")};
  flex-shrink: 0;
  transition: all 0.3s ease;
  color: #fff;
  z-index: 1000;
  user-select: none;
  .header {
    height: 61px;
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
      padding: ${({ $isshowsidebar }) => ($isshowsidebar ? "16px" : "0px")};
      font-size: 24px;
      color: #fff;
      cursor: pointer;
      width: ${({ $isshowsidebar }) => ($isshowsidebar ? "auto" : "52px")};
      text-align: ${({ $isshowsidebar }) =>
        $isshowsidebar ? "start" : "center"};
    }
  }
  .menu-list {
    .menu-action {
      cursor: pointer;
      .menu-name {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 48px;
        margin: ${({ $isshowsidebar }) => ($isshowsidebar ? "4px" : "4px 4px 4px 4px")};
        cursor: pointer;
        transition: background-color 0.2s ease;
        border-radius: 2px;
        white-space: nowrap;
        &:hover {
          background-color: #243041;
        }
        .menu-name-left {
          flex: 1;
          > span {
            display: ${({ $isshowsidebar }) =>
        $isshowsidebar ? "inline-block" : "none"};
          }
          > i {
            width: 44px;
            text-align: center;
          }
        }
        .menu-name-right {
          display: ${({ $isshowsidebar }) =>
        $isshowsidebar ? "block" : "none"};
          > i {
            margin: 0 10px;
          }
        }
      }
      .menu-name.active {
        background-color: #0088ff;
      }

      .menu-item {
        display: ${({ $isshowsidebar }) => ($isshowsidebar ? "flex" : "none")};
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
        color: #0088ff;
      }
      .dropdown-menu {
        display: none;
      }
      &:hover {
        .dropdown-menu {
          display: block;
        }
      }
    }
    .dropdown-menu {
      position: fixed;
      min-width: 196px;
      background: #182537;
      min-height: 48px;
      margin-left: 50px;
      margin-top: -56px;
      .dropdown-list {
        .dropdown-item {
          color: #f3f4f5;
          width: auto;
          height: 40px;
          line-height: 40px;
          margin: 4px 8px;
          padding: 0 16px;
          border-radius: 3px;
          cursor: pointer;
          &:hover {
          background-color: #243041;
        }
        }
        .dropdown-item.active {
        color: #0088ff;
      }
      }
      .dropdown-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 48px;
        line-height: 1;
        background-color: #243041;
        cursor: pointer;
        .dropdown-header-name {
            padding-left: 16px;
        }
        > i {
            padding: 16px;
        }
      }
    }
  }
`;
