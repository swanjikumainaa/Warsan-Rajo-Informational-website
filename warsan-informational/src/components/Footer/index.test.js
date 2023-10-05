import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('Footer Component', () => {
  it('should render without errors', () => {
    render(<Footer />);
    
    //Test footer contains presence
    const phoneNumberHeader = screen.getByText('Phone Number');
    const emailHeader = screen.getByText('Email');
    const addressHeader = screen.getByText('Our Address');
   
    expect(phoneNumberHeader).toBeInTheDocument();
    expect(emailHeader).toBeInTheDocument();
    expect(addressHeader).toBeInTheDocument();

    // Testing copyright text
    const copyrightText = screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === 'div' && content.includes('@2023 Warsan. All Rights Reserved');
    });
    
    expect(copyrightText).toBeInTheDocument();
  });
});
