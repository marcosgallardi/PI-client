import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByOrigin, getDogs } from "../../redux/actions";
import styled from "../Navbar/Navbar.module.css";

export const FilterByOrigin = () => {
  let dispatch = useDispatch();
  let dog = useSelector((state) => state.dogs);

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  const handleChange = ({ target }) => {
    let { value } = target;

    dispatch(filterByOrigin(value));
  };

  return (
    <>
      <select
        defaultValue={"DEFAULT"}
        className={styled.dropdown}
        onChange={handleChange}>
        <option value="DEFAULT" disabled className={styled.texto}>
          Search by Origin
        </option>
        {dog.map(
          ({ origin, id }) =>
            origin && (
              <option key={id} value={origin}>
                {origin}
              </option>
            )
        )}
      </select>
    </>
  );
};
