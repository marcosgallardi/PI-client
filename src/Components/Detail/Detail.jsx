import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDogDetail, loading } from "../../redux/actions";
import { useParams } from "react-router-dom";
import styled from "../Detail/Detail.module.css";
import { Loading } from "../Loading/Loading";

/*id: dog.id,
        name: dog.name,
        image: dog.image,
        temperament: temperamentos,
        weight: dog.peso,
        height: dog.altura,
        life_span: dog.anios, */
export const Detail = () => {
  let { id } = useParams();
  let dispatch = useDispatch();

  let isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(getDogDetail(id));
    setTimeout(() => {
      dispatch(loading(false));
    }, 2500);
    return () => {
      dispatch(loading(true));
    };
  }, []);

  let detail = useSelector((state) => state.dogsDetail);

  let temperamentDogCreate = detail?.Temperaments?.map((t) => t.name).join(", ");

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  return (
    <>
      <div className={styled.container}>
        <img className={styled.image} src={detail?.image} alt="Perro" />
        <div className={styled.data}>
          <p>
            N° Identification: <span>{detail.id}</span>
          </p>
          <p>Dog Breed: {detail.name && <span>{detail.name}</span>}</p>
          <p>
            Height:{" "}
            {detail.height ? (
              detail.height.metric
            ) : (
              <span> {detail.altura} Cm</span>
            )}
          </p>
          <p>
            Weight:{" "}
            {detail.weight ? (
              detail.weight.metric
            ) : (
              <span> {detail.peso} Kg</span>
            )}{" "}
          </p>
          <p>
            Temperament:{" "}
            {detail.temperament ? (
              detail.temperament
            ) : (
              <span>{temperamentDogCreate}</span>
            )}
          </p>
          <p>
            Life span:{" "}
            {detail.life_span ? (
              detail.life_span
            ) : (
              <span> {detail.anios} Years</span>
            )}
          </p>
        </div>
      </div>
    </>
  );
};
