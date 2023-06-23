let regex = {
  letras: /^[a-zA-Z]+$/,
  tamaño: /^.{3,20}$/,
  height: /^\d{1,3}-\d{1,3}$/,
  weight: /^\d{1,3}-\d{1,3}$/,
  life_span: /^\d{1,3}-\d{1,3}$/,
  image: /^[a-zA-Z0-9]+$/,
};

export const validations = (dog) => {
  let errors = {};
  let aciertos = {};

  if (regex.letras.test(dog.name)) {
    aciertos.name = "Success !";
  } else {
    errors.letras =
      "Please enter only letters, numbers or symbols are not allowed.!";
  }

  if (regex.tamaño.test(dog.name)) {
    aciertos.name = "Success !";
  } else {
    errors.tamaño = "Number of characters must be between 3 and 20";
  }

  if (regex.height.test(dog.altura)) {
    aciertos.height = "Success !";
  } else {
    errors.height = "The input format requires the max and min height, a max of 3 numbers and a min of 1, separated by a dash. !";
  }

  if (regex.weight.test(dog.peso)) {
    aciertos.weight = "Success !";
  } else {
    errors.weight = "The input format requires the max and min weight, a max of 3 numbers and a min of 1, separated by a dash. !";
  }

  if (regex.life_span.test(dog.anios)) {
    aciertos.life_span = "Success !";
  } else {
    errors.life_span = "The input format requires the max and min life span, a max of 3 numbers and a min of 1, separated by a dash. !";
  }
  return { errors, aciertos };
};
