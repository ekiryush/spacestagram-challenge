import { fireEvent, render, screen } from '@testing-library/react';
import SelectButton from '../SelectButton';

describe('SelectButton', () => {
    it('should open the dropdown menu when Generate Random Images button is clicked', () => {
        render(<SelectButton />);
        const buttonElement = screen.getByRole('button', { name: 'Generate Random Images' });
        fireEvent.click(buttonElement);
        const dropdownDivElement = screen.getByTestId('dropdown');
        expect(dropdownDivElement).toBeInTheDocument();
    });
    it('should close the dropdown menu when Generate Random Images button is clicked again while dropdown menu is open', () => {
        render(<SelectButton />);
        const buttonElement = screen.getByRole('button', { name: 'Generate Random Images' });
        fireEvent.click(buttonElement);
        fireEvent.click(buttonElement);
        const dropdownDivElement = screen.queryByTestId('dropdown');
        expect(dropdownDivElement).not.toBeInTheDocument();
    });
});
