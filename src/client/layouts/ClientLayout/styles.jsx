import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fff;
  max-width: 4800px;
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
`;

export const MainContainer = styled.div`
  margin-top: 144px;
  min-height: calc(100vh - 144px);

  @media only screen and (max-width: 992px) {
  margin-top: 131px;
  min-height: calc(100vh - 131px);
  }
  @media only screen and (max-width: 768px) {
  margin-top: 123.6px;
  min-height: calc(100vh - 123.6px);
  }
`;

export const MainContent = styled.div``;
