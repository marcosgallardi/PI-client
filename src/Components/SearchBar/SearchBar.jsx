import React, { useEffect, useState } from "react";
import styled from "../SearchBar/SearchBar.module.css";
import { useDispatch } from "react-redux";
import { getDogName } from "../../redux/actions";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getDogName(search));
  }, [search]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        placeholder="Search by breed"
        className={styled.input}
        onChange={handleInputChange}
      />
    </div>
  );
};
