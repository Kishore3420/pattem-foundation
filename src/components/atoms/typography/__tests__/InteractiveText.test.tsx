import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Link, CopyableText, TextWithIcon } from '../InteractiveText';

describe('Link', () => {
  it('renders with default props', () => {
    render(<Link href="#">Default link</Link>);
    const link = screen.getByText('Default link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#');
  });

  it('applies different variants', () => {
    const { rerender } = render(
      <Link href="#" variant="default">
        Default variant
      </Link>
    );
    expect(screen.getByText('Default variant')).toHaveClass('hover:text-blue-600');

    rerender(
      <Link href="#" variant="underline">
        Underlined variant
      </Link>
    );
    expect(screen.getByText('Underlined variant')).toHaveClass('underline');

    rerender(
      <Link href="#" variant="bold">
        Bold variant
      </Link>
    );
    expect(screen.getByText('Bold variant')).toHaveClass('font-bold');
  });

  it('applies different colors', () => {
    const { rerender } = render(
      <Link href="#" color="primary">
        Primary link
      </Link>
    );
    expect(screen.getByText('Primary link')).toHaveClass('text-blue-600');

    rerender(
      <Link href="#" color="secondary">
        Secondary link
      </Link>
    );
    expect(screen.getByText('Secondary link')).toHaveClass('text-gray-600');

    rerender(
      <Link href="#" color="danger">
        Danger link
      </Link>
    );
    expect(screen.getByText('Danger link')).toHaveClass('text-red-600');
  });

  it('renders with icon in different positions', () => {
    const { rerender } = render(
      <Link href="#" variant="icon" icon="→">
        Link with icon
      </Link>
    );
    let linkElement = screen.getByRole('link');
    expect(linkElement).toHaveTextContent('Link with icon→');

    rerender(
      <Link href="#" variant="icon" icon="→" iconPosition="left">
        Link with left icon
      </Link>
    );
    linkElement = screen.getByRole('link');
    expect(linkElement).toHaveTextContent('→Link with left icon');
  });

  it('applies custom className', () => {
    render(
      <Link href="#" className="custom-class">
        Custom styled link
      </Link>
    );
    const link = screen.getByText('Custom styled link');
    expect(link).toHaveClass('custom-class');
  });
});

describe('CopyableText', () => {
  const mockClipboard = {
    writeText: jest.fn(),
  };
  Object.assign(navigator, { clipboard: mockClipboard });
  const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    consoleSpy.mockRestore();
  });

  it('renders with default state', () => {
    const { container } = render(<CopyableText text="Copy me">Click to copy</CopyableText>);
    expect(screen.getByText('Click to copy')).toBeInTheDocument();
    const copyIcon = container.querySelector('span');
    expect(copyIcon).toHaveTextContent('📋 Copy');
  });

  it('shows success state when text is copied', async () => {
    mockClipboard.writeText.mockResolvedValueOnce(undefined);
    const { container } = render(<CopyableText text="Copy me">Click to copy</CopyableText>);

    const copyButton = container.querySelector('.cursor-pointer');
    fireEvent.click(copyButton!);

    expect(mockClipboard.writeText).toHaveBeenCalledWith('Copy me');
    expect(await screen.findByText('✓ Copied!')).toBeInTheDocument();

    // Wait for the copied state to reset
    await waitFor(
      () => {
        expect(screen.queryByText('✓ Copied!')).not.toBeInTheDocument();
      },
      { timeout: 2500 }
    );
  });

  it('handles clipboard error', async () => {
    const error = new Error('Clipboard error');
    mockClipboard.writeText.mockRejectedValueOnce(error);

    const { container } = render(<CopyableText text="Copy me">Click to copy</CopyableText>);
    const copyButton = container.querySelector('.cursor-pointer');
    fireEvent.click(copyButton!);

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith('Failed to copy text:', error);
    });
  });

  it('applies custom className', () => {
    const { container } = render(
      <CopyableText text="Copy me" className="custom-class">
        Custom styled text
      </CopyableText>
    );
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('custom-class');
  });
});

describe('TextWithIcon', () => {
  it('renders with left icon', () => {
    const { container } = render(
      <TextWithIcon icon="📝" iconPosition="left">
        Text with left icon
      </TextWithIcon>
    );
    const element = container.querySelector('span');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('📝Text with left icon');
  });

  it('renders with right icon', () => {
    const { container } = render(
      <TextWithIcon icon="📝" iconPosition="right">
        Text with right icon
      </TextWithIcon>
    );
    const element = container.querySelector('span');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Text with right icon📝');
  });

  it('applies custom className', () => {
    const { container } = render(
      <TextWithIcon icon="📝" className="custom-class">
        Custom styled text
      </TextWithIcon>
    );
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('custom-class');
  });
});
