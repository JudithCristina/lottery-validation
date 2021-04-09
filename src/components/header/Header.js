import React, {useContext} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoSorteo from './../../assets/logo_sorteo.png';
import AuthContext from './../../context/auth/AuthContext'
import './Header.css'
const Header = () => {
  const {cerrarSesion, usuario} = useContext(AuthContext)
  console.log(usuario,"hola")
  return (
   <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home"><img className='size-logo' src={logoSorteo} alt=""/></Navbar.Brand>
    <button onClick={cerrarSesion}>Cerrar Sesión</button>
    {/* <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav> */}
  </Navbar>
  )
}

export default Header
