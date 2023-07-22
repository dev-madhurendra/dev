import { render } from "@testing-library/react";
import MyAvatar from ".";

describe("MyAvatar", () => {
  it("renders Avatar component with given props", () => {
    const testProps = {
      src: "test-image.png",
      alt: "Test Avatar",
    };

    const { container } = render(<MyAvatar {...testProps} />);
    const avatarComponent = container.querySelector("img");

    expect(avatarComponent).toBeInTheDocument();
    expect(avatarComponent).toHaveAttribute("src", testProps.src);
    expect(avatarComponent).toHaveAttribute("alt", testProps.alt);
  });
});