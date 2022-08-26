import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"

import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
