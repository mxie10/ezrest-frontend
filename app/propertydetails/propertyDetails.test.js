/*
 * Testing Page Rendering, Title, Image Rendering and Testing Guest Selection Button
 * Date: 27/03/2024
 * Author: Baran Diloglu
*/


import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Property from './Property.js';

describe('Property component', () => {
  it('Property Details Page Rendering', () => {
    render(<Property />);
  });

  it('Rendering Title', () => {
    const { getByText } = render(<Property />);
    const titleElement = getByText('Lakefront detached house on the little lake');
    expect(titleElement).toBeInTheDocument();
  });

  it('Rendering One of the Images (At Least One)', () => {
    const { getAllByRole } = render(<Property />);
    const imageElements = getAllByRole('img');
    expect(imageElements.length).toBeGreaterThan(0);
  });

  it('Testing increasing and decreasing guest count', () => {
    const { getByText } = render(<Property />);
    const adultsIncrementButton = getByText('+', { selector: 'button' });
    const adultsDecrementButton = getByText('-', { selector: 'button' });

    fireEvent.click(adultsIncrementButton);
    fireEvent.click(adultsIncrementButton);
    fireEvent.click(adultsDecrementButton);

    const adultsCount = getByText('1');
    expect(adultsCount).toBeInTheDocument();
  });

});
