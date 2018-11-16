import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './SearchForm';

it('renders perfectly', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SearchForm />, div)
  ReactDOM.unmountComponentAtNode(div);
})
