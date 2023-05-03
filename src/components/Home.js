import React from 'react'
import carousel1 from '../images/3beluga_rdy.jpg'
import carousel2 from '../images/3leg_crocs_test_resized.png'
import { Link } from 'react-router-dom'
import tuote1 from '../images/8zbn7TU.png'
import tuote2 from '../images/cKm2VGJ.png'
import tuote3 from '../images/r8TUkIy.png'
import tuote4 from '../images/SuFC5sY.png'
import tuote5 from '../images/ZFHzlrv.png'
import tuote6 from '../images/zYWQDqu.png'

export default function Home() {
  return (
    <div className='container'>
      <div className="row">
        <div className="carousel slide ratio ratio-21x9" data-bs-ride="carousel">
          <div className="carousel-inner">
            <Link className="carousel-item active" to="/tuote/6">
              <img src={carousel1} alt="..." className="d-block w-100" />
            </Link>
            <Link className="carousel-item" to="/tuote/13">
              <img src={carousel2} alt="..." className="d-block w-100" />
            </Link>
          </div>
        </div>
          <div className="row mt-2 mb-3">
              <h3>
              Bootleg
              </h3>
              <hr/>
              <p>
              Haluamme tarjota sinulle laadukkaita kenkiä jokaiseen tilanteeseen ja tarpeeseen. Olit sitten etsimässä tyylikkäitä juhlakenkiä, mukavia kävelykenkiä tai kestäviä lenkkareita, meillä on laaja valikoima eri merkkejä ja malleja, jotka vastaavat tarpeitasi.
              </p>
              <p>Meidän kenkämme ovat valmistettu korkealaatuisista materiaaleista, joten voit olla varma niiden kestävyydestä ja mukavuudesta. Lisäksi tarjoamme laajan valikoiman eri kokoja ja leveyksiä, jotta jokaisen asiakkaan on helppo löytää juuri sopivat kengät.</p>
              <p>
              Tutustu valikoimaamme ja löydä uudet suosikkikenkäsi!
              </p>
          </div>
      </div>
      <div className='productRow'>
        <div className='col-6'>
          <div className='products-container scroll-box'>
            <h3>Picked for you</h3>
            <hr></hr>
            <div className='products-list'>
              <Link className='product-item productlink' to="/tuote/12">
                <img src={tuote1} alt='Product 1' />
                <p>Converse Chuck Taylor 1970s HI Amber Pink</p>
              </Link>
              <Link className='product-item productlink' to="/tuote/7">
                <img src={tuote2} alt='Product 2' />
                <p>Air Jordan 1 Low True Blue & Cement Grey White</p>
                </Link>
              <Link className='product-item productlink' to="/tuote/11">
                <img src={tuote3} alt='Product 3' />
                <p>DC Shoes Court Graffik Skeittikengät</p>
              </Link>
              <Link className='product-item productlink' to="/tuote/10">
                <img src={tuote4} alt='Product 4' />
                <p>DC Shoes Pure SE Hi-Top Skeittikengät</p>
              </Link>
              <Link className='product-item productlink' to="/tuote/8">
                <img src={tuote5} alt='Product 5' />
                <p>Vans UA Old Skool Tennarit</p>
              </Link>
              <Link className='product-item productlink' to="/tuote/9">
                <img src={tuote6} alt='Product 6' />
                <p>Adidas Superstar tennarit</p>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
