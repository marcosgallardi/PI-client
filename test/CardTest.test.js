import React from "react";

import { render } from "@testing-library/react";
import { Card } from "../src/Components/Card/Card";

describe("Card component", () => {
  afterEach(() => {
    jest.clearAllTimers();
  });
  it("should render without errors and display props data", () => {
    const props = {
      id: 1,
      image: "example.jpg",
      name: "Example Name",
      temperament: "Example Temperament",
      weight: "Example Weight",
    };

    const { getByAltText, getByText } = render(<Card {...props} />);
    done();
    expect(getByAltText(props.name)).toBeInTheDocument();
    expect(getByText(props.name)).toBeInTheDocument();
    expect(getByText(`Temperament: ${props.temperament}`)).toBeInTheDocument();
    expect(getByText(`Weight: ${props.weight}`)).toBeInTheDocument();
  });
});
