import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ClientApp } from './app';

const root = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <ClientApp />
  </BrowserRouter>,
  root,
);
