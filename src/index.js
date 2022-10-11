import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Perfil from "./pages/Perfil"
import Contacto from "./pages/Contacto"
import Cotizar from "./pages/Cotizar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<div>home</div>}/>
            <Route path="perfil" element={<Perfil />}/>
            <Route path="contacto" element={<Contacto />}/>
            <Route path="cotizar" element={<Cotizar />}>
              <Route path="mudanza" element={<div>Mudanzaaaaa</div>}/>
            </Route>
          </Route>
        </Routes>
    </BrowserRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
