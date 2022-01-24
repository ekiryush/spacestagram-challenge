import { render, screen } from '@testing-library/react';
import Controls from '../Controls';

const mockHideFavourites = jest.fn();
const mockClearFavourites = jest.fn();

describe('Controls', () => {
    it('should allow a user to clear favourites when there is 1 or more items in the list', () => {
        render(
            <Controls favourites={[{}, {}]} hideFavourites={mockHideFavourites} clearFavourites={mockClearFavourites} />
        );
        const buttonElement = screen.getByRole('button', { name: 'Clear' });
        expect(buttonElement).not.toHaveStyle('cursor: not-allowed');
        expect(buttonElement).toBeEnabled();
    });
});
