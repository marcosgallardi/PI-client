import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage/LandingPage";
import { HomePage } from "./Pages/HomePage/HomePage";
import { FormPage } from "./Pages/FormPage/FormPage";
import { DetailPage } from "./Pages/DetailPage/DetailPage";
import { useDispatch } from "react-redux";
import { getTemperaments } from "../src/redux/actions";
import {
  landingPath,
  homePath,
  formPath,
  detailPath,
} from "../src/helpers/paths";


function App() {
  const dispatch = useDispatch();

  dispatch(getTemperaments());

  return (
    <>
      <Routes>
        <Route path={landingPath} element={<LandingPage />} />
        <Route path={homePath} element={<HomePage />} />
        <Route path={formPath} element={<FormPage />} />
        <Route path={detailPath} element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App;
