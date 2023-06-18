import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { createMemoryHistory } from 'history/cjs/history.min';
import Header from '../node_module/containers/Layout/Header';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

test('renders app js', () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <BrowserRouter history={history}>
      <Header/>
    </BrowserRouter>
  );
  
  const element = getByText("Main");
  expect(element).toBeInTheDocument();
});
