import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

test('renders the drivers app', () => {

    render(<App/>);

    const title = screen.getByText(/Welcome to Drivers App/i);

    expect(title).toBeInTheDocument();

});
