import React from 'react';
import { render, screen } from '@testing-library/react';
import DarkModeButton from '../DarkModeButton/DarkModeButton';


describe("DarkModeButton - Component Test", () => {
    it("should properly render the button", () => {
        render(<DarkModeButton/>);
        const imageElement = screen.getByAltText(/Moon picto/i);
        expect(imageElement).toBeInTheDocument();
    });

    it("should properly render the button text", () => {
        render(<DarkModeButton/>);
        const textButton = screen.getByText(/Dark Mode?/i);
        expect(textButton).toBeInTheDocument();
    });

})