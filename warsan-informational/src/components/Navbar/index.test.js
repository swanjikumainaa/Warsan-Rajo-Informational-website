import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './index.jsx';

describe('Navbar Component', () => {
  it('should render without errors', () => {
    render(<Navbar />);
    const logo = screen.getByAltText('Logo');
    const brandName = screen.getByText('RAJO');
    const homeLink = screen.getByText('Home');
    const aboutLink = screen.getByText('About');
    const howItWorksLink = screen.getByText('How It Works');
    const contactLink = screen.getByText('Contact Us');
    const hamburgerMenu = screen.getByTestId('hamburger-menu');

    expect(logo).toBeInTheDocument();
    expect(brandName).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(howItWorksLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
    expect(hamburgerMenu).toBeInTheDocument();
  });

  it('should toggle the navigation menu when the hamburger menu is clicked', () => {
    render(<Navbar />);
    const hamburgerMenu = screen.getByTestId('hamburger-menu'); 
    const navList = screen.getByTestId('nav-list');

    fireEvent.click(hamburgerMenu);
    expect(navList).toHaveClass('open');

    fireEvent.click(hamburgerMenu);
    expect(navList).not.toHaveClass('open');
  });
});
