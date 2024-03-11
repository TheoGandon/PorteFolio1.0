import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Presentation from './pages/Presentation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to='/' />} />
        <Route path='/presentation' element={<Presentation />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
