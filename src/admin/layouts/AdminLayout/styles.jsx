import { styled } from "styled-components";

export const Wraper = styled.div`
  background-color: #f1f1f1;
  max-width: 2480px;
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  .sidebar {
    position: fixed;
    z-index: 2;
    transition: width 0.3s ease;
  }
  .main {
    position: relative;
    width: calc(100% - 230px);
    margin-left: 230px;
    z-index: 1;
    transition: all 0.3s ease ;
  }
  .main.disabled {
    width: calc(100% - 52px);
    margin-left: 52px;
  }
`;
