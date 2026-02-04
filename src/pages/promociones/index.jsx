import React, { useEffect, useState, useContext } from "react";
import CardPromociones from "../../components/cardPromociones";
import "./promociones.css"
import { jsonLinkPromociones } from "../../constants/constants"
import { LanguageContext } from '../../context/context';
import { useNavigate } from "react-router-dom";
export function Promociones() {
    const rutalogin = useNavigate();
    const NIT = import.meta.env.VITE_API_NIT_EMPRESA;
    const { configuracionData = [], getCofiguracion } = useContext(LanguageContext);
    useEffect(() => {
        if (configuracionData) {
            getCofiguracion(NIT, 'Token', 'nit', 'USERFINALLY');

        }
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    let ImgPromociones = [];

    try {
        if (configuracionData?.promocionesImagen) {
            ImgPromociones = JSON.parse(configuracionData.promocionesImagen);
        }
    } catch (error) {
        console.error("Error al parsear promocionesImagen:", error);
        ImgPromociones = [];
    }
    // ImgPromociones = [
    //         {
    //             ruta:"/images/credimovilagosto_1.jpg"
    //         },
    //         {
    //             ruta:"/images/credimovilagosto_2.jpg"
    //         },
    //         {
    //             ruta:"/images/credimovilagosto_2.jpg"
    //         }
    // ]
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
        <div>
            <div style={{ background: '#000' }}>
                <div className="container" style={{paddingTop:'10px', paddingBottom:'70px'}}>
                    <div
                        className="promociones__hero__bg"
                        style={{
                            backgroundImage: `url('${configuracionData?.rutapromocionesportada}')`
                        }}
                    >
                        <div className="promociones__hero__overlay">
                            <h1 className="promociones__hero__title">
                                PROMOCIONES DISPONIBLES
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
                                <span className="breadcrumb__actual">Promociones</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row__card__imagenes__promociones">
                <div className="container contenido--promociones" >
                    <div className="row" >
                        {ImgPromociones.map((item, index) => (
                            <CardPromociones
                                key={index}
                                Url={item.imagen}
                            />

                        ))}
                    </div>

                </div>
            </div>
        </div>

    )
}