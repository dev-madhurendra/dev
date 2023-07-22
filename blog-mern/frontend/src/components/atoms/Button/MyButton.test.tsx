import MyButton from './index.tsx';
import {fireEvent, render, screen} from '@testing-library/react'

describe('MyButton' , () => {
    it("renders button with provided text" , () => {
        render(
            <MyButton 
                buttonText={'Test button'} 
                variant={'outlined'} 
                width={'200px'} 
                height={'80px'}            
            />
        )
    
        const buttonElement = screen.getByText("Test button");
        expect(buttonElement).toBeInTheDocument();
    });

    it("onClick event handler is called when the button is clicked" , () => {
        const handleClick = jest.fn();
        render(
            <MyButton 
                buttonText={'Button clickable'} 
                variant={'outlined'} 
                width={'200px'} 
                height={'80px'}   
                onButtonClick={handleClick}         
            />
        )

        const buttonElement = screen.getByText('Button clickable')
        fireEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    })
});