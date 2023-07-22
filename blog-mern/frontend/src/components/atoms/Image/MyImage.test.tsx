import { render } from '@testing-library/react';
import MyImage from '.';

describe('MyImage Component', () => {
  const defaultProps = {
    src: 'path_to_image',
    alt: 'Test Image',
  };

  it('renders the MyImage component correctly', () => {
    const { container } = render(<MyImage {...defaultProps} />);
    const imageElement = container.querySelector('img');

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'path_to_image');
    expect(imageElement).toHaveAttribute('alt', 'Test Image');

    const styles = {
      width: '100px',
      height: '100px',
      border: '2px solid red',
    };
    const { container: styledContainer } = render(<MyImage {...defaultProps} styles={styles} />);
    const styledImageElement = styledContainer.querySelector('img');
    expect(styledImageElement).toHaveStyle('width: 100px');
    expect(styledImageElement).toHaveStyle('height: 100px');
    expect(styledImageElement).toHaveStyle('border: 2px solid red');
  });
});
