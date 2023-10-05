import React from 'react';
import { render, screen } from '@testing-library/react';
import Product from './index.jsx';


describe('How It Works Component', () => {
  it('should render without errors', () => {
    render(<Product />);
    
    //Test the presence of the component title
    const productTitle = screen.getByTestId('product');
    expect(productTitle).toBeInTheDocument();

    // Test for specific content within the component
    const productText = screen.getByTestId('rajo-text');
    expect(productText).toBeInTheDocument();

    //Texts the number of images available
    const productImages = screen.getAllByRole('img');
    expect(productImages).toHaveLength(2);
  });

  it('should have proper image sources', () => {
    render(<Product />);
    
    // Test whether specific image sources have alt text
    const bookImage = screen.getByAltText('Book Cover');
    const rajoImage = screen.getByAltText('Rajo Device');
    
    // Test whether each image's source is present
    expect(bookImage).toHaveAttribute('src', '/images/book.png');
    expect(rajoImage).toHaveAttribute('src', '/images/rajo1.png');
  });

  it('should have an arrow icon', () => {
    render(<Product />);
    // Test whether the Arrow icon is present
    const arrowIcon = screen.getByTestId('arrow-icon');
    expect(arrowIcon).toBeInTheDocument();
    });
    
 
});
