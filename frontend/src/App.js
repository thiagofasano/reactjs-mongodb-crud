import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './assets/css/App.css';

import Header from './components/Header';

import Routes from './routes';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="container">
          <Routes />
        </div>
      </div>
    </BrowserRouter>
  );
}