import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Presentation from './pages/Presentation';
import Scene3d from './pages/Scene3d';
import Competences from './pages/Competences';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path='/*'
            element={
              <>
                <Header />
                <Routes>
                  <Route path='/presentation' element={<Presentation />} />
                  <Route path='/competences' element={<Competences />} />
                  <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
              </>
            }
          />
          <Route path='/' element={<Scene3d />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
