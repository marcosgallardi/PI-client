import { useEffect } from "react";
import styled from "../Navbar/Navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByTemperament,
  getDogs,
  getTemperaments,
} from "../../redux/actions";

export const FilterByTemperament = () => {
  let temperamentos = useSelector((state) => state.temperaments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const handleOnChange = ({target}) => {
    let { value } = target;
    dispatch(getDogs());
    setTimeout(() => {
      dispatch(filterByTemperament(value));
    }, 1500);
  };

  return (
    <div>
      <select
        defaultValue={"DEFAULT"}
        className={styled.dropdown}
        onChange={handleOnChange}>
        <option value="DEFAULT" disabled className={styled.link}>
          Search by Temperament
        </option>
        {temperamentos.map(
          (t) =>
            t.name && (
              <option key={t.id} value={t.name}>
                {t.name}
              </option>
            )
        )}
      </select>
    </div>
  );
};
