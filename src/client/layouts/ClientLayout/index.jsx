import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import * as S from "./styles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BtnToTop from "client/components/BtnToTop";

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
      <BtnToTop />
    </S.Wrapper>
  );
};

export default UserLayout;
