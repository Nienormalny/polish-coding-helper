import React from 'react';
import {
  fireEvent,
  queryByAttribute,
  render,
} from '@testing-library/react';
import App from './App';

describe('Test App Component', () => {
  it('Should display title', () => {
    const getById = queryByAttribute.bind(null, 'id');
    const { getByText, container } = render(<App />);
    const titleValue = getByText('Hello', { exact: false });
    const buttonChange = getById(container, 'change') as Element;

    expect(titleValue.textContent).toEqual('Hello World');
    fireEvent.click(buttonChange);
    expect(titleValue.textContent).toEqual('Hello Dude');
  });
});
