import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Presentation from './pages/Presentation';
import Scene3d from './pages/Scene3d';
import Competences from './pages/Competences';

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
