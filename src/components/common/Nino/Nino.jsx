import '../Taloneras/styles.css'
import { Card } from '../Taloneras/Card';
import daisy1 from '../../../assets/nino/daisy.png';
import melody from '../../../assets/nino/melody.jpg';
import melody2 from '../../../assets/nino/melody2.jpg';
import minnie1 from '../../../assets/nino/minnie.png';
import minnie2 from '../../../assets/nino/minnie2.png';
import spidey1 from '../../../assets/nino/spidey.png';
import spidey2 from '../../../assets/nino/spidey2.png';
import stitch1 from '../../../assets/nino/stitch.png';
import stitch2 from '../../../assets/nino/stitch2.png';

export const Nino=()=>{
    const melodyBase = {
        title: 'Melody',
        price: 21.00,
        sizes: '2-5 | 6-9 | 10-13',
    }
    const minnieBase = {
        title: 'Minnie',
        price: 21.00,
        sizes: '2-5 | 6-9 | 10-13',
    }
    const daisyBase = {
        title: 'Daisy',
        price: 21.00,
        sizes: '2-5 | 6-9 | 10-13',
    }
    const spideyBase = {
        title: 'Spidey',
        price: 21.00,
        sizes: '2-5 | 6-9 | 10-13',
    }

    return(
        <>
        <main className="main-content">
          <div className="encabezado">
            <h1>Categoria: Tallas para niños</h1>
            <h2>Subcategoria: Medias para niño (El precio es por docena)</h2>
          </div>
    
          <div className="gallery-container">
            <Card images={[spidey1, spidey2]} {...spideyBase} />
            <Card images={[stitch1, stitch2]} title='Stitch' price={21.00} sizes='2-5 | 6-9 | 10-13' />
          </div>
        </main>

        <main className="main-content">
          <div className="encabezado">
            <h2>Subcategoria: Medias para niñas (El precio es por docena)</h2>
          </div>
    
          <div className="gallery-container">
            <Card images={[melody, melody2]} {...melodyBase} />
            <Card images={[minnie1, minnie2]} {...minnieBase} />
            <Card images={[daisy1]} {...daisyBase} />
          </div>
        </main>
        </>
    )
}