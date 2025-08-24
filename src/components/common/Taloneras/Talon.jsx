import './styles.css'
import { Card } from './Card';
import talnike1 from '../../../assets/nike/talnike.png';
import talnike2 from '../../../assets/nike/talnike2.png';
import talnike3 from '../../../assets/nike/talnike3.png';
import talnike4 from '../../../assets/nike/talnike4.png';
import taladidas1 from '../../../assets/adidas/taladidas.png';
import taladidas2 from '../../../assets/adidas/taladidas2.png';
import taladidas3 from '../../../assets/adidas/taladidas3.png';
import taladidas4 from '../../../assets/adidas/taladidas4.png';
import taladidas5 from '../../../assets/adidas/taladidas5.png';
import talreebok1 from '../../../assets/reebok/talreebok.png';
import talreebok2 from '../../../assets/reebok/talreebok2.png';

export const Talon = () => {
  const baseNike = {
  title: 'Nike',
  price: 24.00,
  sizes: 'Dama | Caballero',
};

const baseAdidas = {
  title: 'Adidas',
  price: 24.00,
  sizes: 'Dama | Caballero',
};

const baseReebok = {
  title: 'Reebok',
  price: 24.00,
  sizes: 'Dama | Caballero',
};

const talonerasNike = [
  { ...baseNike, images: [talnike4, talnike1] },
  { ...baseNike, images: [talnike2] },
  { ...baseNike, images: [talnike3] },
];

const talonerasAdidas = [
  { ...baseAdidas, images: [taladidas1] },
  { ...baseAdidas, images: [taladidas2] },
  { ...baseAdidas, images: [taladidas3] },
  { ...baseAdidas, images: [taladidas4] },
  { ...baseAdidas, images: [taladidas5] },
];

const talonerasReebok = [
  { ...baseReebok, images: [talreebok1] },
  { ...baseReebok, images: [talreebok2] },
];

  return (
    <>
    <main className="main-content">
      <div className="encabezado">
        <h1>Categoria: Taloneras para dama y caballero</h1>
        <h2>Subcategoria: Nike (El precio es por docena)</h2>
      </div>

      <div className="gallery-container">
        {talonerasNike.map((nike, i) => (
          <Card key={i} {...nike} />
        ))}
      </div>
    </main>

    <main className="main-content">
      <div className="encabezado">
        <h2>Subcategoria: Adidas (El precio es por docena)</h2>
      </div>

      <div className="gallery-container">
        {talonerasAdidas.map((adidas, i) => (
          <Card key={i} {...adidas} />
        ))}
      </div>
    </main>

    <main className="main-content">
      <div className="encabezado">
        <h2>Subcategoria: Reebok (El precio es por docena)</h2>
      </div>

      <div className="gallery-container">
        {talonerasReebok.map((reebok, i) => (
          <Card key={i} {...reebok} />
        ))}
      </div>
    </main>
    </>
  );
};