import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './index.jsx';

describe('About Component', () => {
  it('should render without errors', () => {
    render(<About />);
    
    // Testing the presence of the component title
    const aboutTitle = screen.getByText('About Us');
    expect(aboutTitle).toBeInTheDocument();

    // Testing presence of the "Vision" and "Mission" cards
    const visionCard = screen.getByTestId('about-card1');
    expect(visionCard).toBeInTheDocument();
    const missionCard = screen.getByTestId('about-card2');
    expect(missionCard).toBeInTheDocument();

    // Testing the text content in the "Vision" and "Mission" cards
    const visionText = screen.getByText('Vision');
    expect(visionText).toBeInTheDocument();
    const missionText = screen.getByText('Mission');
    expect(missionText).toBeInTheDocument();
  });

  
});
