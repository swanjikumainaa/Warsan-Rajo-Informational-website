import React from 'react';
import { render, screen, act } from '@testing-library/react';
import HomePage from './index.jsx';

jest.useFakeTimers(); // Enable fake timers

describe('HomePage Component', () => {
  it('should toggle between text options in the slideshow', async () => {
    render(<HomePage />);
    const slideshowText = screen.getByTestId('slideshow-text');
    const learnMoreButton = screen.getByText('Learn More');

    // Check that the initial text is displayed
    expect(slideshowText.textContent).toBe('Save a child');

    // Trigger the interval again
    act(() => {
      jest.advanceTimersByTime(2500);
    });

    // Check that the text has switched to the second option
    expect(slideshowText.textContent).toBe('Save a nation');

    // Check that the Learn More button is rendered
    expect(learnMoreButton).toBeInTheDocument();
  });
});
