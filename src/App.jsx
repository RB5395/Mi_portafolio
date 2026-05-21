import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
import useLocalStorage from './hooks/useLocalStorage';

function App() {

  const [tema, setTema] = useLocalStorage('tema', 'light');

const toggleTema = () => {
  setTema(
    tema === 'light'
      ? 'dark'
      : 'light'
  );
};
return (
  <div
    className={
      tema === 'dark'
        ? 'bg-dark text-light min-vh-100'
        : 'bg-light text-dark min-vh-100'
    }
  >

    <Navbar
     tema={tema}
     toggleTema={toggleTema}
    />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>

  </div>
);
}

export default App;