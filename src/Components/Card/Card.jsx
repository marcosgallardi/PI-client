import { Link } from "react-router-dom";
import styled from "../Card/Card.module.css";

export const Card = ({ id, image, name, temperament, weight }) => {
  return (
    <>
      <Link to={`/detailpage/${id}`} className={styled.decoration}>
        <div className={styled.card}>
          {image && <img src={image} alt={name} />}

          <div className={styled.espacio}>
            {name && <a className={styled.letra}>{name}</a>}

            {temperament && (
              <p>
                <span className={styled.black}>Temperament:</span> {temperament}
              </p>
            )}
            {weight && (
              <p>
                <span className={styled.black}>Weight:</span>
                {weight}
                Kg
              </p>
            )}
          </div>
        </div>
      </Link>
    </>
  );
};
