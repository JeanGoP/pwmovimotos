import React, { useEffect, useState, useContext } from "react";
import "./visitanos.css"
import CardPuntosVentas from "../../components/cardPuntosVentas";
import { jsonPuntosVentas } from "../../constants/constants"
import { LanguageContext } from '../../context/context';
import { useNavigate } from "react-router-dom";
export function Visitanos() {
  const NIT = import.meta.env.VITE_API_NIT_EMPRESA;
  const rutalogin = useNavigate();
  const { configuracionData = [], getCofiguracion } = useContext(LanguageContext);
  useEffect(() => {
    if (configuracionData) {
      getCofiguracion(NIT, 'Token', 'nit', 'USERFINALLY');

    }
  }, []);

  let sucursales = [];

  try {
    if (configuracionData?.sucursal) {
      sucursales = JSON.parse(configuracionData.sucursal);
    }
  } catch (error) {
    console.error("Error al parsear sucursal:", error);
    sucursales = [];
  }
   sucursales= jsonPuntosVentas
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
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
    <div className="">

      <div className="">
      <div style={{ background: '#000' }}>
                <div className="container" style={{ paddingTop: '20px', paddingBottom: '70px' }}>
                    <div
                        className="promociones__hero__bg"
                        style={{
                            backgroundImage: `url('${configuracionData?.rutaPortadaVisitanos}')`
                        }}
                    >
                        <div className="promociones__hero__overlay">
                            <h1 className="promociones__hero__title">
                            ENCUENTRA TU PUNTO MÁS CERCANO
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
                                <span className="breadcrumb__actual">visitanos</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
               
      </div>
      <div className="container">
        <div className="row row__Visitanos__ubicacion">
          <div className="row" style={{ justifyItems: 'center', alignItems: 'center', textAlign: 'center' }}>
          
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="ratio ratio-4x3 custom-map">
              <iframe id="iframeMaps"
                src='https://www.google.com/maps/d/embed?mid=1vsDmeAE8VvXYkfWS1N4Y-tCFOb_WQwQ&amp;ehbc=2E312F'
                //  src={configuracionData?.rutaGoogleMaps}  
                allowFullScreen>

              </iframe>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 contenido__cardPuntosVentas__Visitanos">
            <div className="container">
              {sucursales.map((item, indice) => (
                <CardPuntosVentas
                  key={indice}
                  Nombre={item.nombre}
                  Direccion={item.direccion}
                  Telefono={item.telefono}
                  // RutaGoogleMaps = {item.rutaSucursalGoogle}
                  RutaGoogleMaps={item.ruta}
                  // ColorCard={configuracionData?.colorCard}
                  // ColorLetras={configuracionData?.colorLetras}
                  ColorCard='#ffff'
                  ColorLetras='#000000'
                />
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
} 