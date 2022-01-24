import { render, screen } from '@testing-library/react';
import CardImage from '../CardImage';

const mockSetIsDescriptionShown = jest.fn();
const mockImage = {
    title: 'dummy title',
    url: 'dummy url',
    description: 'dummy description',
    media_type: 'image',
};

describe('CardImage', () => {
    it('should display an image if the mouse is not hovered on the image', () => {
        render(
            <CardImage isDescriptionShown={false} setIsDescriptionShown={mockSetIsDescriptionShown} image={mockImage} />
        );
        const imgElement = screen.getByRole('img');
        const paragraphElement = screen.queryByRole('note');
        expect(imgElement).toBeVisible();
        expect(paragraphElement).not.toBeInTheDocument();
    });
    it('should display an image description if the mouse is hovered on the image', () => {
        render(
            <CardImage isDescriptionShown={true} setIsDescriptionShown={mockSetIsDescriptionShown} image={mockImage} />
        );
        const imgElement = screen.queryByRole('img');
        const paragraphElement = screen.getByRole('note');
        expect(imgElement).not.toBeInTheDocument();
        expect(paragraphElement).toBeVisible();
    });
});
