
import { render, screen } from '@testing-library/react';
import Footer from './footer'
import React from 'react';
import '@testing-library/jest-dom'
import { expect, it, describe } from '@jest/globals'

it('renders footer', () => {
    render(<Footer />)
    const el = screen.getByText('Footer');
    expect(el).toBeInTheDocument();
})