import { render, fireEvent } from '@testing-library/react';
import MyIcon, { IconProps } from '.';

describe('MyIcon Component', () => {
  const defaultProps: IconProps = {
    src: <img src="path_to_default_icon" alt="Default Icon" />,
    width: '50px',
    height: '50px',
  };

  it('renders the MyIcon component correctly', () => {
    const { container } = render(<MyIcon {...defaultProps} />);
    const iconElement = container.querySelector('img');
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute('src', 'path_to_default_icon');
    expect(iconElement).toHaveAttribute('alt', 'Default Icon');
  });

  it('calls the onClick function when the icon is clicked', () => {
    const onClickMock = jest.fn();
    const onClickProps: IconProps = {
      ...defaultProps,
      onClick: onClickMock,
    };

    const { container } = render(<MyIcon {...onClickProps} />);
    const iconElement = container.querySelector('img');
    fireEvent.click(iconElement!);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
