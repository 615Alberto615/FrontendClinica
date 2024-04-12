
import './App.css'
import Home from './components/HomeA'
import Informacion from './components/Informacion'
import Navbar from './components/NavbarA'
import About from './components/About'
import Princing from './components/Pricing'
import Newsletter from './components/Newsletter'
import Fotter from './components/Fotter'
import { Routes, Route, useLocation } from 'react-router-dom';// Importa Routes y Route
import Pacientes from './components/Pacientes'; 
import Alergias from './components/Alergias'
import RegistroPacientes from './components/Doctor/Formulario'
import Contacts from './components/Contacts/contacts'
import Wrapper from './components/ContenedorGlobal/Contenedor'
import Referencias from './components/Referencias'
import Reviews from './components/Reviews'
import NavbarL from './components/logeado/Navbarlogeado'
import Login from './components/logeado/Login'
import HistorialClinico from './components/Historial'
import ListaHistorialesClinicos from './components/listaHistorial'
function App() {
  // Asumo que isLoggedIn se determinará por algún método de autenticación real
  const isLoggedIn = true;
  let location = useLocation();

  // Ahora incluye la comprobación para mostrar el navbar y el footer
  const showNavbar = isLoggedIn || location.pathname !== '/login';
  const showFooter = location.pathname !== '/login' && !isLoggedIn;

  return (
    <>
      {showNavbar && (isLoggedIn ? <NavbarL /> : <Navbar />)}
      <Routes>
        <Route path="/" element={<>
          <Home/><Informacion/><About/><Princing/><Newsletter/><Reviews/>
          <Wrapper id="referencias" heading="Referencias" textCenter="center"><Referencias/></Wrapper>
          <Wrapper id="contacts" heading="Contactos" textCenter="center"><Contacts/></Wrapper>
        </>} />
        <Route path="/pacientes" element={<Pacientes />} />
        <Route path="/alergias" element={<Alergias />} />
        <Route path="/registroPacientes" element={<RegistroPacientes />} />
        <Route path="/historialClinico" element={<HistorialClinico />} />
        <Route path="/login" element={<Login />} />
        <Route path="/listaHistorial/:idPaciente" element={<ListaHistorialesClinicos />} />
        <Route path="*" element={<div>404</div>} />
        {/* Aquí puedes agregar más rutas según sea necesario */}
      </Routes>
      {showFooter && <Fotter/>}
    </>
  );
}

export default App;