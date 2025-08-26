import './styles.css'
import { NavLink } from "react-router-dom";

export const Inicio = () => {
  return (
    <main>

      <section class="card-inicio" role="region" aria-labelledby="titulo-card">
        <h1 class="title" id="titulo-card">
          Taloneras
        </h1>
        <p class="subtitle">Medias cortas ideales para el verano</p>
        <NavLink to="taloneras">Taloneras</NavLink>
      </section>

      <section class="card-inicio" role="region" aria-labelledby="titulo-card">
        <h1 class="title" id="titulo-card">
          Tobilleras
        </h1>
        <p class="subtitle">Medias con un alto de 3cm de donde termina la zapatilla</p>
        <NavLink to="tobilleras">Tobilleras</NavLink>
      </section>

      <section class="card-inicio" role="region" aria-labelledby="titulo-card">
        <h1 class="title" id="titulo-card">
          Futsaleras
        </h1>
        <p class="subtitle">Medias largas a la altura de la pantorrilla</p>
        <NavLink to="futsaleras">Futsaleras</NavLink>
      </section>

      <section class="card-inicio" role="region" aria-labelledby="titulo-card">
        <h1 class="title" id="titulo-card">
          Talla niño
        </h1>
        <p class="subtitle">Para niños con diseños para ellos</p>
        <NavLink to="ninos">Talla niño</NavLink>
      </section>
    </main>
  );
};
