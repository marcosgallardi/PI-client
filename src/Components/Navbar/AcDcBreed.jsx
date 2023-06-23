import styled from "../Navbar/Navbar.module.css";
import { useDispatch } from "react-redux";
import { orderACDC } from "../../redux/actions";

export const AcDcBreed = ({ title }) => {
  let dispatch = useDispatch();

  const handleChange = (e) => {
    let { value } = e.target;
    dispatch(orderACDC(value));
  };

  return (
    <div>
      <select
        name="order"
        defaultValue={"DEFAULT"}
        className={styled.dropdown}
        onChange={handleChange}>
        <option value="DEFAULT" disabled className={styled.texto}>
          {title}
        </option>
        <option className={styled.texto} value="ascendente">
          Ascending
        </option>
        <option className={styled.texto} value="descendente">
          Descending
        </option>
      </select>
    </div>
  );
};
