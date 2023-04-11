import React from 'react';
import { render, screen } from '@testing-library/react';
import DarkModeButton from '../DarkModeButton/DarkModeButton';


describe("DarkModeButton - Component Test", () => {
    it("should properly render the button", () => {
        render(<DarkModeButton/>);
        const imageElement = screen.getByAltText(/Moon picto/i);
        expect(imageElement).toBeInTheDocument();
    });
})