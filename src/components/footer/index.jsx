import React, { useContext } from "react";
import { FaFacebook, FaAngleRight } from "react-icons/fa";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from '../../context/context';
import './footer.css'

function Footer() {
  const rutalogin = useNavigate();
  const { empresa } = useContext(LanguageContext);
  const { configuracionData = {} } = useContext(LanguageContext);

  // const handlePagina = (ruta) => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth"
  //   });

  //   setTimeout(() => {
  //     rutalogin(ruta);
  //   }, 300);
  // };
  const handlePagina = (ruta, seccionId = null) => {
    localStorage.setItem('producto', '')
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
  const handleClickWhatsapp = () => {

    const telefono = "57" + configuracionData?.whatsapp;
    const mensaje = "Hola, quiero más información";
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
  };
  const url_logo = '/images/Logomovimotos.png';
  return (
    <footer className="contenido__Footer" style={{ backgroundColor: '#000' }}>
      <div className="container">
        <div className="row">

          <div className="col-md-4 col-sm-12">
            <div className="row">
              <p className="TitulosFooter">EXPLORA</p>
            </div>
            <div className="row">
              <p className="clickable" onClick={() => handlePagina('/')}> INICIO</p>
            </div>
            <div className="row">
              <p className="clickable" onClick={() => handlePagina("/", "catalogo-motos")}> MOTOS</p>
            </div>
            <div className="row">
              <p className="clickable" onClick={() => handlePagina('/cotizacion')}> COTIZAR MOTO</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="row">
              <p className="TitulosFooter">NOSOTROS</p>
            </div>
            <div className="row">
              <p className="clickable" onClick={() => handlePagina('/visitanos')}> PUNTOS DE VENTA</p>
            </div>
            <div className="row">
              <p className="clickable" onClick={() => handlePagina('/postventa')}>POSTVENTAS</p>
            </div>
            <div className="row">
              <p className="clickable"  onClick={() => handlePagina('/tratamientoDatos')}>TRATAMIENTO DE DATOS</p>
            </div>
            <div className="row">
              <a className="clickable icono_footer" href="https://docs.google.com/forms/d/e/1FAIpQLSethMZeeS-6EghpIzW94RTlc7Y2ncOYpL0-gp4XL5hp9pRM6Q/viewform?usp=pp_url" target="_blank" style={{ textDecoration: 'none' }}>PQRSF</a>
            </div>
            <div className="row" style={{ paddingTop: '15px', textDecoration: 'none' }}>
              <a className="clickable icono_footer" href="https://lineaetica.onrender.com/?empresa=Distrimotos" target="_blank" style={{ textDecoration: 'none' }} >LÍNEA ÉTICA</a>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 contenido__logo__footer">
            <div className="row contenido__logo__footer">
              <img src={url_logo} alt={configuracionData?.empresa || "Logotipo"} className="logo__Footer" />
            </div>

            <div className="row">
              <p className="TitulosFooter">REDES SOCIALES</p>
              <div className="col-lg-12 col-md-12 col-sm-12 d-flex gap-4 contenido__logo__footer">
                <a className="clickable icono_footer" target="_blank" rel="noreferrer" href={configuracionData?.rutaFacebook || ''}><FaFacebook size={25} /></a> <a className="clickable icono_footer" target="_blank" rel="noreferrer" href={configuracionData?.rutaInstagram || ''}><FaInstagram size={25} /></a> <a className="clickable icono_footer" target="_blank" rel="noreferrer" onClick={handleClickWhatsapp}><FaWhatsapp size={25} /></a>
              </div>
            </div>
          </div>
        </div>
        <div style={{  paddingBottom: '20px' }}></div>
          <div className="row" style={{textAlign:'center'}}>

            <div className="col-lg-12 col-md-12 col-sm-12">
              <p style={{ fontSize: '14px' }}>Copyright © 2023. DISTRIMOTOS DE COLOMBIA S.A.S All rights reserved | Desing By @HakuCreativo SAS</p>
            </div>

          </div>
      </div>
    </footer>
  )
}

export default Footer;