import { Link } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";
import {
  AcDcBreed,
  AcDcWeight,
  FilterByOrigin,
  FilterByTemperament,
} from "./index";
import styled from "../Navbar/Navbar.module.css";
import { ResetFilters } from "./ResetFilters";

export const Navbar = () => {
  return (
    <div>
      <nav className={styled.nav}>
        <ul>
        <div className={styled.link}>
            <ResetFilters />
          </div>
          <Link to="/formpage">
            <button className={styled.dropdown}>Create Dog</button>
          </Link>

          <div className={styled.link}>
            <AcDcWeight title="Weight" />
          </div>
          <div className={styled.link}>
            <AcDcBreed title="A-z" />
          </div>
          <div className={styled.link}>
            <FilterByOrigin />
          </div>
          <div className={styled.link}>
            <FilterByTemperament />
          </div>
          <div className={styled.link}>
            <SearchBar />
          </div>
          
        </ul>
      </nav>
    </div>
  );
};
