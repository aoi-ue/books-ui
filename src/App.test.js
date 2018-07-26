import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SomeComponent from './SomeComponent';
import ShallowRenderer from 'react-test-renderer/shallow';

it('renders correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<SomeComponent />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot()
});



// it.skip('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

