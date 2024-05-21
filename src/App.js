import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Presentation from './pages/Presentation';
import Scene3d from './pages/Scene3d';
import Competences from './pages/Competences';
import Contact from './pages/Contact';
import Projet from './pages/Projet'; 
import Stage from './pages/Stage';
import Veille from './pages/Veille';

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
                  <Route path='/projets' element={<Projet />} />
                  <Route path='/stages' element={<Stage />} />
                  <Route path='/veille' element={<Veille />} />
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
