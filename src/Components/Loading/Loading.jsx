import React from "react";
import loadingDog from "../../Assets/Images/LoadingDog.png";
import styled from "./Loading.module.css";

export const Loading = () => {
  return (
    <>
      <div className={styled.container}>
        <img src={loadingDog} alt="perrito loading" className={styled.spin} />
      </div>
      <div className={styled.loading}>
       <h2 className={styled.title}>Loading</h2> 
        <span className={styled.dot}></span>
        <span className={styled.dot}></span>
        <span className={styled.dot}></span>
      </div>
    </>
  );
};
