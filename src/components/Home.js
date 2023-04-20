import React from 'react'
import carousel1 from '../images/3beluga_rdy.jpg'
import carousel2 from '../images/3leg_crocs_test_resized.png'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <>
      <div className='container'>
        <div className="row my-3">
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
        </div>
        <div className="row mb-3">
          <h3>
            3bootleg
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
    </>
  )
}
