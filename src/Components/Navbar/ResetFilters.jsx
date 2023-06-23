import { useDispatch } from "react-redux";
import React from "react";
import { getDogs } from "../../redux/actions";
import styled from "../Navbar/Navbar.module.css";

export const ResetFilters = () => {
  const dispatch = useDispatch();

  const handleClickReset = () => {
    dispatch(getDogs());
  };

  return (
    <div>
      <button onClick={handleClickReset} className={styled.dropdown}>
        Reset Filters
      </button>
    </div>
  );
};
