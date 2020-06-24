import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'visual/styles/GlobalStyle';
import { Header } from 'components/Header';
import { Routes } from 'components/Routes';
import { AuthProvider } from 'contexts/AuthContext';
import { ModalProvider } from 'contexts/ModalContext';
import { VehiclesProvider } from 'contexts/VehiclesContext';
import { ThemeManager } from 'components/ThemeManager';

export function App() {
  return (
    <ThemeManager>
      <GlobalStyle />
      <BrowserRouter>
        <AuthProvider>
          <VehiclesProvider>
            <ModalProvider>
              <Header />
              <Routes />
            </ModalProvider>
          </VehiclesProvider>
        </AuthProvider>
      </BrowserRouter>
    </ThemeManager>
  );
}

export default App;
