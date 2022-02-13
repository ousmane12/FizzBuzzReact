import { render } from '@testing-library/react';
//import ReactDOM from 'react-dom';
import App from './App';
import Next from './Next';


test("Next component generated", ()=>{
    const {getByTestId} = render(<Next/>);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('main')).toBeInTheDocument();
});

test("App component generated", ()=>{
  const {getByTestId} = render(<App/>);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(getByTestId('app')).toBeInTheDocument();
})