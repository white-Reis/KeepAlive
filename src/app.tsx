import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { GlobalStyle } from './global';

export function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}
