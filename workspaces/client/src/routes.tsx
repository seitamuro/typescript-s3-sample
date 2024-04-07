import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/HomePage';

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="*"
        element={
          <div>
            <code>{window.location.pathname}</code> is not found.
          </div>
        }
      />
    </Routes>
  );
};
