import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header'

describe("Header - Component Test", () => {
    it("should properly render the title", () => {
        render(<Header handleTheme={() => {}} currentTheme=''/>);
        const titleElement = screen.getByText(/Where in the world?/i);
        expect(titleElement).toBeInTheDocument();
    });

});
