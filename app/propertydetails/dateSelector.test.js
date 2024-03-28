/*
 * Testing Selection of Start Date and End Date for the Property Reservation
 * Date: 27/03/2024
 * Author: Baran Diloglu
*/


import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Property from './Property';

describe('Property Component', () => {
  test('Rendering Start Date and End Date', () => {
    const { getByPlaceholderText } = render(<Property />);

    const startDateInput = getByPlaceholderText('Start Date');
    const endDateInput = getByPlaceholderText('End Date');

    expect(startDateInput).toBeInTheDocument();
    expect(endDateInput).toBeInTheDocument();
  });

  test('User Select Start Date and End Date', () => {
    const { getByPlaceholderText } = render(<Property />);
    const startDateInput = getByPlaceholderText('Start Date');
    const endDateInput = getByPlaceholderText('End Date');

    fireEvent.change(startDateInput, { target: { value: '24/09/2024' } });
    fireEvent.change(endDateInput, { target: { value: '30/10/2024' } });

    expect(startDateInput.value).toBe('24/09/2024');
    expect(endDateInput.value).toBe('30/10/2024');
  });
});
