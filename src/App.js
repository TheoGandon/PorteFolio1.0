import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Presentation from './pages/Presentation';
import Scene3d from './pages/Scene3d';
import Competences from './pages/Competences';
import Contact from './pages/Contact';
import Projet from './pages/Projet';  

function App() {
  return (
    <div className="App">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"></link>
      </head> 
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
