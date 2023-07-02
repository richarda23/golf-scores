import { render, screen } from '@testing-library/react';
import Navbar from './navbar'
import '@testing-library/jest-dom'
import { expect, it, describe } from '@jest/globals'

it('renders navbar', () => {
    render(<Navbar />)
    expect(screen.getByText('Stats')).toBeVisible();
    expect(screen.getByText(/All Courses/i)).toBeVisible();
})