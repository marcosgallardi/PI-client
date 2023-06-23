import { useNavigate } from "react-router-dom";
import styled from "../BackToHome/BackToHome.module.css";

export const BackToHome = () => {
  let navigate = useNavigate();

  const volverHome = () => {
    navigate("/homepage");
  };
  return (
    <>
      <button onClick={volverHome} className={styled.btn}>
        Regresar
      </button>
    </>
  );
};
