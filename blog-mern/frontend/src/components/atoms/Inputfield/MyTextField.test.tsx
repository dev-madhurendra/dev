import { render, screen } from "@testing-library/react";
import MyTextField from ".";

describe("MyTextField", () => {
  it("renders correctly", () => {
    const onChangeHandler = jest.fn();
    render(
      <MyTextField
        placeholder="placeholder text"
        value="value"
        handleChange={onChangeHandler}
      />
    );
    const textFieldElement = screen.getByTestId("textField");
    expect(textFieldElement).toBeInTheDocument();
  });  
});