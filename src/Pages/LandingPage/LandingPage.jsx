import { Link } from "react-router-dom";
import perrito from "../../Assets/Images/perro.png";
import styled from "../LandingPage/LandingPage.module.css";

export const LandingPage = () => {
  return (
    <div className={styled.fondo}>
      <div className={styled.background}></div>
      <div className={styled.columna}>
        <h2 className={styled.title}>Welcome to Dogs Colections!</h2>
        <div className={styled.row}>
          <img src={perrito} alt="" className={styled.image} />
          <Link to="/homepage">
            <button className={styled.button}>Come</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
