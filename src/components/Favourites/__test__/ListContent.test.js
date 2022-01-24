import { render, screen } from '@testing-library/react';
import ListContent from '../ListContent';

const mockHandleFavourites = jest.fn();

describe('ListContent', () => {
    it('should display "Would you like to add a favourite?" message if there are no favourites', () => {
        render(<ListContent favourites={[]} handleFavourites={mockHandleFavourites} />);
        const listElement = screen.queryByRole('list');
        const paragraphElement = screen.getByTestId('nofav-note');
        expect(listElement).not.toBeInTheDocument();
        expect(paragraphElement).toBeVisible();
    });
});
