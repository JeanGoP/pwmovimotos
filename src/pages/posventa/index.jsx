import React, { useEffect, useState, useContext } from "react";
import "./posventa.css"
import { LanguageContext } from '../../context/context';
import { useNavigate } from "react-router-dom";

export function Posventa() {
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
        <div className="" style={{ background: '#000' }}>
            <div style={{ background: '#000' }}>
                <div className="container" style={{ paddingTop: '20px', paddingBottom: '70px' }}>
                    <div
                        className="promociones__hero__bg"
                        style={{
                            backgroundImage: `url('${configuracionData?.rutaPortadaPosventa}')`
                        }}
                    >
                        <div className="promociones__hero__overlay">
                            <h1 className="promociones__hero__title">
                                SERVICIO DE POSTVENTA
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
                                <span className="breadcrumb__actual">Postventa</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contenido__posventa">
                <div className="container">

                    <div className="row row__Posventa__">

                        <div className="col-lg-5 col-md-12 col-sm-12 contenidoformposventa" style={{ paddingBottom: '50px' }}>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12" >
                                    <div className="title-line">
                                        <span className="line"></span>
                                        <h5 style={{ fontFamily: 'Mukta Mahee, Sans-serif; !important', color: '#fff' }}>Movimotos</h5>
                                    </div>
                                </div>
                            </div>
                            <p className="titulo__Posventa " style={{ color: '#fff' }}>TALLERES AUTORIZADOS, REPUESTOS Y ACCESORIOS</p><br></br>
                            <p className="descripcion__Posventa">
                                Tenemos múltiples centros de servicio técnico autorizado a lo amplio del territorio nacional, también contamos con miles de repuestos originales a tu disposición y cientos de accesorios para disfrutar al máximo cada experiencia con tu moto.
                            </p>
                            <p className="descripcion__Posventa" >
                                Te invitamos a que agendes tu cita de revisión especializada llenando nuestro formulario, o conoce donde se ubican nuestros Talleres Autorizados y sus números de contacto para mayor información.
                            </p>
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12 ContenidoPadrePosventa">
                            <div className="card card__Posventa">
                                <div className="card-body contenido__card__Posventa">
                                    <p className="titulo__card__Posventa fs-1 fs-md-2 fs-sm-4">¿NECESITAS UN REPUESTO?</p>
                                    <p className="subtitulo__card__Posventa">Llena el formulario y nos pondremos en contacto</p><br></br>
                                    <input className="form-control input__card__Posventa" type="text" placeholder="Nombre" aria-label=""></input>
                                    <input className="form-control input__card__Posventa" type="text" placeholder="Celular" aria-label=""></input>
                                    <input className="form-control input__card__Posventa" type="text" placeholder="Motocicleta" aria-label=""></input>
                                    <input className="form-control input__card__Posventa" type="text" placeholder="Modelo" aria-label=""></input>
                                    <input className="form-control input__card__Posventa" type="text" placeholder="Repuesto" aria-label=""></input>
                                    <input className="form-control input__card__Posventa" type="text" placeholder="Ciudad" aria-label=""></input>
                                    <input className="form-control input__card__Posventa" type="text" placeholder="Departamento" aria-label=""></input>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" style={{ color: '#fff' }}>
                                            Al enviar este formulario autorizo el tratamiento de datos personales en los términos descritos.
                                        </label>
                                    </div>

                                </div>
                                <div className="contenido__btn__card__Posventa">
                                    <button type="button" className="btn btn-primary btn__card__Posventa">Enviar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

