import React, { useEffect, useState, useContext } from "react";
import "./blog.css"
import { LanguageContext } from '../../context/context';
import CardBlog from "../../components/cardBlog";
import { jsonBlog } from "../../constants/constants";
import { useNavigate } from "react-router-dom";

export function Blog() {
    const rutalogin = useNavigate();
    const NIT = import.meta.env.VITE_API_NIT_EMPRESA;
    const { configuracionData = [], getCofiguracion } = useContext(LanguageContext);
    useEffect(() => {
        if (configuracionData) {
            getCofiguracion(NIT, 'Token', 'nit', 'USERFINALLY');

        }
        window.scrollTo({ top: 0, behavior: "smooth" });
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
        <div className="" style={{ color: '#000' }}>
            <div className="contenido__posventa" style={{background:'#000'}}>
                <div style={{ background: '#000' }}>
                    <div className="container" style={{ paddingTop: '20px', paddingBottom: '70px' }}>
                        <div
                            className="promociones__hero__bg"
                            style={{
                                backgroundImage: `url('${configuracionData?.rutaPortadaBlog}')`
                            }}
                        >
                            <div className="promociones__hero__overlay">
                                <h1 className="promociones__hero__title">
                                    BLOG
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
                                    <span className="breadcrumb__actual">Blog</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12" style={{ paddingTop: '50px' }}>
                            <div className="title-line">
                                <span className="line"></span>
                                <h5 style={{ fontFamily: 'Mukta Mahee, Sans-serif; !important' , color:'#6ec1e4'}}>Articulos</h5>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{textAlign:'center'}}>
                        <div className="col-lg-12 col-md-12 col-sm-12" style={{ paddingTop: '40px' }}>

                            <h2 style={{color:'#fff'}}>ARTÍCULOS Y NOTICIAS</h2>

                        </div>
                    </div>
                    <div className="col-12" style={{ paddingTop: '30px' }}>
                        {jsonBlog.map((item, index) => (
                            <CardBlog
                                key={index}
                                titulo={item.titulo}
                                fecha={item.fecha}
                                imagen={item.imagen}
                                objecto={item}
                            />
                        ))}

                    </div>
                </div>

            </div>

        </div>
    )
}

