import {
  GET_DOGS,
  GET_DOG_NAME,
  GET_TEMPERAMENTS,
  FILTER_TEMPERAMENTS,
  FILTER_ORIGIN,
  ORDER_ACDC,
  ORDER_WEIGHT,
  GET_DOG_DETAIL,
  LOADING
} from "./actionsType";

let initialState = {
  temperaments: [],
  dogs: [],
  dogsDetail: [],
  isLoading:true,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: payload,
      };

    case GET_DOGS:
      return {
        ...state,
        dogs: payload,
      };

    case GET_DOG_NAME:
      return {
        ...state,
        dogs: payload,
      };

    case FILTER_TEMPERAMENTS:
      console.log(state.dogs);
      let filteredByTemperament = [...state.dogs].filter(
        (dog) => dog.temperament && dog.temperament.includes(payload)
      );

      return {
        ...state,
        dogs: filteredByTemperament,
      };

    case FILTER_ORIGIN:
      let filteredByOrigin = [...state.dogs].filter(
        (dog) => dog.origin && dog.origin.includes(payload)
      );
      return {
        ...state,
        dogs: filteredByOrigin,
      };

    case ORDER_ACDC:
      let order = [...state.dogs].sort((a, b) => {
        if (payload === "ascendente") {
          return a.name.localeCompare(b.name);
        }
        if (payload === "descendente") {
          return b.name.localeCompare(a.name);
        }
        return state.dogs;
      });
      return {
        ...state,
        dogs: order,
      };

    case ORDER_WEIGHT:
      let orderWeight = [...state.dogs].sort((a, b) => {
        let [min1, max1] = a.weight.split(" - ").map(Number);
        let [min2, max2] = b.weight.split(" - ").map(Number);

        let aux1 = (min1 + max1) / 2;
        let aux2 = (min2 + max2) / 2;

        if (payload === "ascendente") {
          return aux1 - aux2;
        }
        if (payload === "descendente") {
          return aux2 - aux1;
        }
      });

      return {
        ...state,
        dogs: orderWeight,
      };

    case GET_DOG_DETAIL:
      return {
        ...state,
        dogsDetail: payload,
      };

    case LOADING:
      return {
        ...state,
        isLoading:payload
      }

    default:
      return state;
  }
};

export default rootReducer;
