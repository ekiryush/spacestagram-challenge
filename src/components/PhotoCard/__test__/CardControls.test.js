import { fireEvent, render, screen } from '@testing-library/react';
import CardControls from '../CardControls';

const mockImage = jest.mock();
const mockHandleFavourites = jest.fn();

describe('CardControls', () => {
    it('should display an white heart icon when there are no favourites, and once that icon is clicked, it should call handleFavourites function', () => {
        render(<CardControls inFavourites={false} image={mockImage} handleFavourites={mockHandleFavourites} />);
        const heartElement = screen.getByTestId('unfilled-heart');
        const buttonElement = screen.getByRole('button', { name: /add to favourites/i });
        expect(heartElement).toBeVisible();
        fireEvent.click(buttonElement);
        expect(mockHandleFavourites).toHaveBeenCalled();
    });
    it('should display a pink heart icon when there are favourites', () => {
        render(<CardControls inFavourites={true} image={mockImage} handleFavourites={mockHandleFavourites} />);
        const heartElement = screen.getByTestId('filled-heart');
        expect(heartElement).toBeVisible();
    });
});
