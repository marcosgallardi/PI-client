import React from "react";
import { BackToHome } from "../../Components/BackToHome/BackToHome";
import { Detail } from "../../Components/Detail/Detail";
import styled from "../DetailPage/Detailpage.module.css";

export const DetailPage = () => {
  return (
    <div className={styled.container}>
      <BackToHome />
      <Detail />
    </div>
  );
};
