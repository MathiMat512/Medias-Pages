import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components/common/Layout/Layout'
import { Inicio } from './components/common/Inicio/Inicio'
import { Talon } from './components/common/Taloneras/Talon'
import { Tobillera } from './components/common/Tobilleras/Tobillera'
import { Futsal } from './components/common/Futsaleras/Futsal'
import { Nino } from './components/common/Nino/Nino'
import { Contacto } from './components/common/Contacto/Contacto'
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/taloneras" element={<Talon />} />
          <Route path="/tobilleras" element={<Tobillera />} />
          <Route path="/futsaleras" element={<Futsal />} />
          <Route path="/ninos" element={<Nino />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
