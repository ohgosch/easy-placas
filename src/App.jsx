import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'visual/styles/GlobalStyle';
import { Header } from 'components/Header';
import { Routes } from 'components/Routes';
import { AuthProvider } from 'contexts/AuthContext';
import { ModalProvider } from 'contexts/ModalContext';
import { VehiclesProvider } from 'contexts/VehiclesContext';

export function App() {
  return (
    <>
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
    </>
  );
}

export default App;
