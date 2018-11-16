import React from 'react';
import ReactDOM from 'react-dom';
import Results from './Results';

it('renders perfectly', () => {

  const div = document.createElement('div')
  ReactDOM.render(<Results context={{ movies: [] }} />, div)
  ReactDOM.unmountComponentAtNode(div);
})
