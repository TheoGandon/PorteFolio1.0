import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to='/' />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
