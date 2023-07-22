import { render, screen } from "@testing-library/react";
import MyTypography from ".";

describe('MyTypography' , () => {
    it('renders with typography element' , () => {
        render(
            <MyTypography typographyText={"Test"} />
        )

        const typographyElement = screen.getByText("Test")
        expect(typographyElement).toBeInTheDocument();
    })
})