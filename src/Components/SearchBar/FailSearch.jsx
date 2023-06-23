import React from "react";
import dogfail from "../../Assets/Images/dogFail.png";
import styled from "../SearchBar/SearchBar.module.css"

export const FailSearch = () => {
  return (
    <div className={styled.container}>
      <h2>I dont find a Dog !!</h2>

      <img src={dogfail} alt="dog fail" className={styled.container} />
    </div>
  );
};
