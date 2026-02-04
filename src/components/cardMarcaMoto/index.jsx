import React from 'react';
import './cardMarcaMoto.css';

const CardMarcaMoto = ({ Titulo, Descripcion, Imagen,onClick  }) => {
  return (
    <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-12" style={{background:'#fff'}}>
      <div className="d-flex  mt-5">
        <div className="card hover-zoom-card w-100 overlay-card " onClick={onClick} style={{ cursor: "pointer", background:'#fff',border:'5px solid #000', borderRadius:'15px' }}>
          <img src={Imagen} className="card-img-top" alt="" style={{borderRadius:'10px', borderColor:'#000'}}/>
          <div className="card-img-overlay d-flex flex-column justify-content-between" >
            <div className="align-self-start contenedor__titulo__CardMarcaMoto">
              <label className="card-title titulo__CardMarcaMoto">{Titulo}</label>
            </div>
            <div className="contenedor__descripcion__CardMarcaMoto">
              <p className="card-text">{Descripcion}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMarcaMoto;
