import React, { useContext } from 'react';
import './cotizador.css'
import { LanguageContext } from '../../context/context';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export function Cotizador() {
  const rutalogin = useNavigate();
  const NIT = import.meta.env.VITE_API_NIT_EMPRESA;
  const { configuracionData = [], getCofiguracion } = useContext(LanguageContext);
  useEffect(() => {
    if (configuracionData) {
      getCofiguracion(NIT, 'Token', 'nit', 'USERFINALLY');

    }
  }, []);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const rawProducto = localStorage.getItem('producto');

  const id_producto =
    rawProducto && rawProducto !== 'null' && rawProducto !== 'undefined'
      ? rawProducto
      : null;

  const rutaBase = configuracionData?.rutaCotizador;

  const rutaIframe = id_producto
    ? `${rutaBase}?producto=${id_producto}`
    : rutaBase;


  const handlePagina = (ruta, seccionId = null) => {

    if (ruta === "/" && seccionId) {
      rutalogin(ruta);
      setTimeout(() => {
        const elemento = document.getElementById(seccionId);
        if (elemento) {
          elemento.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 500);
    } else {

      window.scrollTo({ top: 0, behavior: "smooth" });

      setTimeout(() => {
        rutalogin(ruta);
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 400);
      }, 300);
    }
  };
  return (
    <div style={{ background: '#000' }}>
      {/* <div style={{background: "white"}}> */}

      <div style={{ background: '#000' }}>
                <div className="container" style={{paddingTop:'20px', paddingBottom:'70px'}}>
                    <div
                        className="promociones__hero__bg"
                        style={{
                            backgroundImage: `url('${configuracionData?.rutaPortadaCotizador}')`
                        }}
                    >
                        <div className="promociones__hero__overlay">
                            <h1 className="promociones__hero__title">
                                COTIZADOR
                            </h1>

                            <div className="promociones__hero__breadcrumb">
                            <a
                                className="breadcrumb__link"
                                style={{ cursor: 'pointer' }}
                                onClick={() => handlePagina('/')}
                                >
                                    <span className="breadcrumb__inicio">Inicio</span>
                                </a>
                                <span className="breadcrumb__separator">›</span>
                                <span className="breadcrumb__actual">Cotizador</span>
                            </div>
                        </div>
                    </div>
                </div>
         </div>

      <div className='container' style={{ background: '#000' }}>
        <div className="row" style={{ paddingTop: '20px' }}>
          <div className="col-md-12 coll-sm-12 row__iframe__Cotizador">
            <iframe id="cotizador"
              //   src="https://aburramotos.7-24.co/mercadeo/leads/iframe/2f4c07b6b8b5abfee7ed89cd0befe0dd/" 
              src={rutaIframe}
              name="myIFrame"
              allow="geolocation"
              className="iframe__row__Cotizador">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

