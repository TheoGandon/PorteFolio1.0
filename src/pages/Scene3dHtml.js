import '../css/Scene3dhtml.css';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { BrowserRouter } from 'react-router-dom';

function Scene3dHtml() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className='header'>
      <Header />
      </div>
      <h1 className="title-main">Bienvenue sur mon portfolio clicquez sur l'ordinateur pour commencer</h1>
      <Footer />
      </BrowserRouter>
    </div>
  );
}
export default Scene3dHtml;