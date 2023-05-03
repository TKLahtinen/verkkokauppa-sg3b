import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../toastify.css';

export default function Contact() {
    const handleSubmit = (e) => {
      e.preventDefault();
      toast.info('Viesti lähetetty!');
      e.target.reset();
    };

  return (
    <div>
      <div className="container" id="contact">
        <div className="row" style={{ marginTop: '50px' }}>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <i className="bi bi-telephone-fill"> Puhelin</i>
              <h6>+35820202020</h6>
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <i className="bi bi-envelope-fill"> Sähköposti</i>
              <h6>otayhteytta@3bootleg.fi</h6>
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <i className="bi bi-geo-alt-fill"> Osoite</i>
              <h6>Oulu, Finland</h6>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: '30px' }}>
          <form onSubmit={handleSubmit}>
            <div className="col-md-4 py-3 py-md-0">
              <input type="text" className="form-control" placeholder="Nimi" />
            </div>
            <div className="col-md-4 py-3 py-md-0">
              <input type="text" className="form-control" placeholder="Sähköposti" />
            </div>
            <div className="col-md-4 py-3 py-md-0">
              <input type="text" className="form-control" placeholder="Puhelin" />
            </div>
            <div className="form-group" style={{ marginTop: '30px' }}>
              <textarea className="form-control" rows="5" placeholder="Viesti" />
            </div>
            <div className="messagebtn text-center">
              <button type="submit">Lähetä</button>
            </div>
          </form>
        </div>
      </div>
      <div className="container" id="newsletter">
        <h3 className="text-center">Tilaa sähköinen uutiskirjeemme</h3>
        <div className="input text-center">
          <input type="text" placeholder="Sähköpostiosoite.." />
          <button id="subscribe">TILAA</button>
        </div>
      </div>
    </div>
  );
}