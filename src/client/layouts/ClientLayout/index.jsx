import React from "react";
import { Outlet } from "react-router-dom";

import * as S from "./styles";
import Header from "../components/Header";
import Footer from "../components/Footer";

// import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";


const UserLayout = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.MainContainer>
        <S.MainContent>
          <Outlet />
        </S.MainContent>
      </S.MainContainer>
      <Footer />
      {/* <BackToTopButton /> */}
    </S.Wrapper>
  );
};

export default UserLayout;
