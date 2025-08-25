import { NavLink } from "react-router-dom";
import './styles.css';

export const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="taloneras">Taloneras</NavLink>
        <NavLink to="tobilleras">Tobilleras</NavLink>
        <NavLink to="futsaleras">Futsaleras</NavLink>
        <NavLink to="ninos">Talla niño</NavLink>
        <NavLink to="contacto">Contacto</NavLink>
      </nav>
    </header>
  );
};
