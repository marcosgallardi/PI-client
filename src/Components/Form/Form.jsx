import { useState } from "react";
import { useSelector } from "react-redux";
import { BackToHome } from "../BackToHome/BackToHome";
import { validations } from "./validations";
import { cloudinaryUrl, endpointPostDog } from "../../helpers/endpoints";
import styled from "../Form/Form.module.css";
import axios from "axios";

export const Form = () => {
  let initialState = {
    id: 0,
    name: "",
    anios: "",
    altura: "",
    imagen: undefined,
    peso: "",
  };

  let temperamentos = useSelector((state) => state.temperaments);
  let perros = useSelector((state) => state.dogs);

  const [validate, setValidate] = useState({});

  const [temp, setTemp] = useState([]);

  const [filed, setFiled] = useState({});

  const [dog, setDog] = useState(initialState);

  let coincidence = perros.filter((p) => p.name.includes(dog.name));

  let handleOnChangeTemp = ({ target }) => {
    let { value } = target;

    if (temp.includes(value.name)) {
      alert("This temperament is already added");
    } else {
      setTemp([...temp, value]);
    }
  };

  let handleDeleteTemp = (t) => {
    setTemp(temp.filter((tem) => tem !== t));
  };

  let handleAddDog = ({ target }) => {
    let { name, value } = target;
    setDog({ ...dog, [name]: value });
    setValidate(validations({ ...dog, [name]: value }));
  };

  let handleOnChangeImage = ({ target }) => {
    setFiled(target.files[0]);
  };

  let handleSubmitDog = async (e) => {
    e.preventDefault();
    let { errors } = validate;

    if (dog !== initialState && Object.values(errors).length === 0) {
      let filter = temperamentos.filter((t) => temp.includes(t.name));
      let temperaments = filter.map((t) => t.id);
      let idGenerado = Math.floor(
        Math.random() * (888898 - 173 + 1) + 173 / 20
      );

      try {
        const formData = new FormData();
        formData.append("upload_preset", "dogsApp");
        formData.append("file", filed);

        if (coincidence.length > 0) {
          alert("This dog already exists,Change the name");
        } else {
          const resp = await axios.post(cloudinaryUrl, formData);

          let imageUrl = resp.data.secure_url;

          let dogs = {
            id: idGenerado,
            name: dog.name,
            image: imageUrl,
            anios: dog.anios,
            altura: dog.altura,
            peso: dog.peso,
            temperaments: temperaments,
          };

          alert("Dog created successfully");
          await axios.post(endpointPostDog, dogs);
        }
      } catch (error) {
        throw new Error(error.message);
      }
    } else {
      alert("Incorrect or incomplete data.");
    }
  };
  return (
    <>
      <BackToHome />
      <h2 className={styled.container}>Create yourself dog</h2>
      <div className={styled.container}>
        <form className={styled.formgroup} onSubmit={handleSubmitDog}>
          <label htmlFor="">Write a dog breed</label>
          <input
            type="text"
            name="name"
            value={dog.name}
            placeholder="Breed"
            onChange={handleAddDog}
          />
          {validate.aciertos?.name ? (
            <span className={styled.green}>{validate.aciertos?.name}</span>
          ) : (
            <span className={styled.red}>{validate.errors?.letras} </span>
          )}

          <label htmlFor="">Write a Height min and max</label>
          <input
            type="text"
            name="altura"
            value={dog.altura}
            placeholder="Height"
            onChange={handleAddDog}
          />
          {validate.aciertos?.height ? (
            <span className={styled.green}>{validate.aciertos?.height}</span>
          ) : (
            <span className={styled.red}>{validate.errors?.height}</span>
          )}
          <label htmlFor="">Write a Weight min and max</label>
          <input
            type="text"
            name="peso"
            value={dog.peso}
            placeholder="Weight"
            onChange={handleAddDog}
          />
          {validate.aciertos?.weight ? (
            <span className={styled.green}>{validate.aciertos?.weight}</span>
          ) : (
            <span className={styled.red}>{validate.errors?.weight}</span>
          )}
          <label htmlFor="">Write a Life span</label>
          <input
            type="text"
            name="anios"
            value={dog.anios}
            placeholder="Life span"
            onChange={handleAddDog}
          />
          {validate.aciertos?.life_span ? (
            <span className={styled.green}>{validate.aciertos?.life_span}</span>
          ) : (
            <span className={styled.red}>{validate.errors?.life_span}</span>
          )}
          <label htmlFor="">Add image</label>
          <input
            type="file"
            placeholder="Image"
            onChange={handleOnChangeImage}
          />

          <label htmlFor="">Select dog temperaments</label>
          <select
            defaultValue={"DEFAULT"}
            className={styled.dropdown}
            onChange={handleOnChangeTemp}>
            <option value="DEFAULT" disabled className={styled.texto}>
              Temperaments
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
          {temp.map((t) => (
            <button
              type="button"
              key={t}
              onClick={() => handleDeleteTemp(t)}
              className={styled.option}>
              {t}
            </button>
          ))}
          <button type="submit" className={styled.btn}>
            Create
          </button>
        </form>
      </div>
    </>
  );
};
