import React, { useEffect, useState } from "react";
import styled from "../Cards/Cards.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../Card/Card";
import { loading } from "../../redux/actions";
import { Loading } from "../Loading/Loading";
import { FailSearch } from "../SearchBar/FailSearch";

export const Cards = () => {
  let dog = useSelector((state) => state.dogs);
  let isLoading = useSelector((state) => state.isLoading);
  let dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setCurrentPage(0);
    setTimeout(() => {
      dispatch(loading(false));
    }, 1500);
    return () => {
      dispatch(loading(true));
    };
  }, [dog]);

  const filterDog = () => {
    return dog.slice(currentPage, currentPage + 8);
  };

  const handleIncrement = () => {
    if (filterDog().length === 8) setCurrentPage(currentPage + 8);
  };
  const handleDecrement = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 8);
  };

  if (isLoading) {
    return <Loading />;
  } else if (dog.length === 0) {
    return <FailSearch />;
  }

  return (
    <>
      <div className={styled.container}>
        {filterDog().map(({ id, name, image, temperament, weight }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              image={image}
              temperament={temperament}
              weight={weight}
            />
          );
        })}
      </div>
      <div className={styled.boton}>
        <button onClick={handleDecrement}>Previous</button>
        <button onClick={handleIncrement}>Next</button>
      </div>
    </>
  );
};
