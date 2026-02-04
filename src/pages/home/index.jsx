import React, { useContext } from 'react';
import Carousel from '../../components/carousel';
import CardTecnologia from '../../components/cardTecnologia';
import {
  jsonCardTecnologia,
  jsonSeccionMotoDetallada,
  jsonBarraPorcentaje,
  jsonSeccionBarraPorcentaje,
  jsonTituloSeccionBarraPorcentaje,
  jsonDescripcionTecnica,
  jsonLinkMarcas,
  jsonCardMarcasMotos,
  jsonBlog
} from '../../constants/constants';
import SeccionMotoDetallada from '../../components/seccionMotoDetallada';
import BarraPorcentaje from '../../components/barraPorcentaje';
import SeccionBarraPorcentaje from '../../components/seccionBarraPorcentaje';
import TituloSeccionBarraPorcentaje from '../../components/tituloSeccionBarraPorcentaje';
import DescripcionSeccionBarraPorcentaje from '../../components/descripcionSeccionBarraPorcentaje';
import VideoPublicitario from '../../components/videoPublicitario';
import MarcasPublicitarias from '../../components/marcasPublicitaria';
import CatalogoMoto from '../../components/catalogoMoto';
import './home.css';
import { LanguageContext } from '../../context/context';
import CarruselAliados from './carousel';
import AnimatedCounter from './animator';
import { useEffect } from 'react';
import CardMarcaMoto from '../../components/cardMarcaMoto';
import { backgroundImages } from 'polished';
import CardBlog from '../../components/cardBlog';
import { useNavigate } from 'react-router-dom';
import ApacheImageCompare from '../../components/apacheImageCompare';

export function Home() {
  const NIT = import.meta.env.VITE_API_NIT_EMPRESA;
  const { configuracionData = [], getCofiguracion } = useContext(LanguageContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (configuracionData) {
      getCofiguracion(NIT, 'Token', 'nit', 'USERFINALLY');
      // console.log(configuracionData)
    }
  }, []);

  const textoCompleto = configuracionData?.descripcionMoto_1 || '';
  const mitad = Math.floor(textoCompleto.length / 2);
  let puntoDivision = textoCompleto.indexOf(' ', mitad);
  if (puntoDivision === -1) puntoDivision = mitad;

  const descripcion1 = textoCompleto.slice(0, puntoDivision).trim();
  const descripcion2 = textoCompleto.slice(puntoDivision).trim();

  const jsonItemsTecnicos = [
    {
      titulo: 'Arranque',
      // descripcion: configuracionData?.arranqueMoto_2 || '',
      descripcion: 'Eléctrico'
    },
    {
      titulo: 'Eléctrico Torque máximo',
      //descripcion: configuracionData?.torqueMoto_2 || '',
      descripcion: '28.7 NM @ 6500 RPM'
    },
    {
      titulo: 'Llanta delantera',
      //descripcion: configuracionData?.bateriaMoto_2 || '',
      descripcion: '110/70 R17'
    },
    {
      titulo: 'Freno delantero',
      //descripcion: configuracionData?.transmisionMoto_2 || '',
      descripcion: 'Disco con ABS'
    },

    {
      titulo: 'Peso',
      // descripcion: configuracionData?.pesoMoto_2 || '',
      descripcion: '170 kg'
    },
    {
      titulo: 'Freno trasero',
      //descripcion: configuracionData?.tanqueMoto_2 || '',
      descripcion: 'Disco ABS'
    }
  ];

  const scrollToCatalogoMoto = () => {
    const section = document.getElementById("contenidoMotocicleta");
    if (!section) return;
  
    const offset = 130;
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + offset;
  
    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);


  const handleBlog = () => {
    navigate("/blog");
  }

  return (

    <div>
      <div className="contenedor__imagen__HomePulsar"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url('${configuracionData?.rutaPortadaHome}')`

        }}
      >
        <div className='contenedor__texto__HomePulsar'>
          <p>
            SIENTE EL PODER
          </p>
        </div>
        <div className='contenedor__images__HomePulsar'>
          <img src='/images/tvsapache.png'></img>

        </div>
        <div className="btn__imagen__HomePulsar">
          <button type="button" className="btn__HomePulsar" onClick={scrollToCatalogoMoto}>
            VER MÁS
          </button>
        </div>
      </div>
      <div className='container' style={{paddingTop:'100px'}}>
      <section className="row text-center" style={{paddingBottom:'20px'}}>
              <label className="NuestraAliado__Titulo__Home" style={{ color: '#182430'}}>
              MARCAS DISPONIBLES
              </label>

        </section>
        <div className='row'>
          <div className='col-md-6 col-sm-12' style={{paddingBottom:'30px'}}>
            <div className="marcauteco-card">
              <img
                src="/images/auteco.jpg"
                alt="Auteco"
                className="marcauteco-card__image"
              />

              <div className="marcauteco-card__overlay">
                <h2 className="marcauteco-card__title">AUTECO</h2>

                <button className="marcauteco-card__button" onClick={scrollToCatalogoMoto}>
                  Ver motos
                </button>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-sm-12'>
            <div className="marcauteco-card">
              <img
                src="/images/autecomobility.jpg"
                alt="Auteco"
                className="marcauteco-card__image"
              />

              <div className="marcauteco-card__overlay">
                <h2 className="marcauteco-card__title">AUTECO MOBILITY</h2>

                <button className="marcauteco-card__button" onClick={scrollToCatalogoMoto}>
                  Ver motos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container conte--carousel' style={{ paddingTop: '75px', paddingBottom: '75px' }}>
        <div className="row justify-content-center">
          <div className="col-12">
            <Carousel img={configuracionData?.rutaImgCarrousel || ''} />
          </div>

        </div>
      </div>

      <div>

        <div style={{ background: "#2b5c96", paddingBottom: '10px' }}>
          <div className="contenido__NuestrasMarcas__Home" style={{ background: '#2b5c96', paddingTop: '20px' }}>
            <div className="container-fluid" >
              <div className="row g-3 justify-content-center mb-1">

                <MarcasPublicitarias jsonImagen={jsonLinkMarcas} />

              </div>
            </div>
          </div>
        </div>
        <div style={{ background: '#2b5c96', paddingBottom: '15px' }}>
          <div className='container'>
            <div className="row align-items-center mb-5">
              <div className="col-lg-6 col-md-6 col-sm-12 mb-4 mb-md-0">
                {/* <img src="/images/pulsarns200.png" alt="Moto Pulsar NS200" className="img-fluid " style={{ width: '100%', height: 'auto' }} /> */}

                <ApacheImageCompare
                  imgBefore="/images/moto-frontal.png"
                  imgAfter="/images/moto-trasera.png"
                />
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <TituloSeccionBarraPorcentaje
                  Titulo='Deportiva'
                  Subtitulo='APACHE RTR 310'
                  // ColorSubtiutlo={configuracionData?.colorTituloHome || ''}
                  // ColorCuerpo={configuracionData?.colorCuerpo || ''}
                  colorCuerpo='#fff'
                  ColorSubtiutlo='#fff'
                />

                <div className="row my-3">
                  {jsonBarraPorcentaje.map((item, idx) => (
                    <BarraPorcentaje
                      key={item.id || idx}
                      porcentaje={item.porcentaje}
                      color={item.color}
                      titulo={item.titulo}
                      ColorCuerpo='#fff'
                    />
                  ))}
                </div>

                <div className="row gy-3">
                  {/* {jsonSeccionBarraPorcentaje.map((item, idx) => ( */}
                  <SeccionBarraPorcentaje
                    key="PNTY"
                    Motor='4 Tiempos 1 Cilindro'
                    Cilindraje='310 cm3'
                    potencia='35.6HP a 9700 RPM'
                    // ColorCuerpo={configuracionData?.colorCuerpo || ''}
                    ColorCuerpo='#fff'
                  />
                  {/* ))} */}
                </div>
              </div>
            </div>
          </div>
          <div className="" style={{ border: '1px solid #fff' }}>
            <div className="container">
              <section className="row contenido__label__Especificacion text-center my-5">
                {/* <label className="EspecificacionesTecnicas__Titulo__Home" style={{ color: configuracionData?.colorCuerpo }}> */}
                <label className="EspecificacionesTecnicas__Titulo__Home" style={{ color: '#fff' }}>
                  Especificaciones técnicas
                </label>
              </section>
            </div>



            <div className="container">
              <div className="row g-4 mb-5">
                {jsonItemsTecnicos.map((item, idx) => (
                  <DescripcionSeccionBarraPorcentaje
                    key={item.titulo || idx}
                    Titulo={item.titulo}
                    Descripcion={item.descripcion}
                    // ColorCuerpo={configuracionData?.colorCuerpo}
                    ColorCuerpo='#d8d8d8'
                  />
                ))}
              </div>

            </div>

          </div>

          <main className="container">
            <div
              style={{
                position: 'absolute',
                left: 0,
                width: '100%',
                background: '#000',
                color: 'white',
                padding: '1rem',
                zIndex: 999,
                display: 'flex',
                justifyContent: 'center',
                paddingBottom: '50px'


              }}

            >
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1.5rem',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  width: '100%',
                  maxWidth: '1200px',
                }}
              >
                {/* <AnimatedCounter target={configuracionData?.tiempoExperiencia || 0} suffix="+" label="Años de Experiencia" />
            <AnimatedCounter target={configuracionData?.clientesFelices || 0} suffix="+" label="Centro de servicio tecnico" />
            <AnimatedCounter target={configuracionData?.ventas || 0} suffix="+" label="Titulo de número" />
            <AnimatedCounter target={configuracionData?.puntosVentas || 0} label="Titulo de número" /> */}
                <div className=''><AnimatedCounter target='6' suffix="+" label="Años de experiencia" /></div>
                <div className=''> <AnimatedCounter target='500' suffix="+" label="Ventas" /></div>
                <div className=''> <AnimatedCounter target='26' suffix="+" label="Ventas" /></div>
                <div className=''> <AnimatedCounter target='26' suffix="+" label="Centros de servicio técnico" /></div>
              </div>
            </div>
          </main>
        </div>

        <div style={{ background: "#fff" }}>
          <div className='container-fluid contenidoCatalogoMoto'>

            <div className="row mb-5 contemotocicle" id='contenidoMotocicleta' >
              <CatalogoMoto ColorTitulo={configuracionData?.colorTituloHome || ''} ColorPagina={configuracionData?.colorPagina || ''} />
            </div>
          </div>
        </div>
        <div className='' style={{ background: '#2B5C96' }} >
          <div className='container' style={{ paddingTop: '40px', paddingBottom: '40px' }} >
            <section className="row text-center">
              <label className="NuestraAliado__Titulo__Home" style={{ color: '#fff' }}>
                NUESTRAS FINANCIERAS
              </label>

            </section>
            <div className='row'>
              <CarruselAliados colorTitulo={configuracionData?.colorTituloHome} />
            </div>
          </div>
        </div>
        <div className='conten--video--youtube'>
          <div>
            <div className="row--video--youtube--">
              <VideoPublicitario Link={configuracionData?.rutaYoutube} />
            </div>
          </div>
        </div>
        <div className='FranjaClientes' >
          <div className='container' style={{ paddingBottom: '40px' }}>
            <div className='row' style={{ paddingTop: '30px' }}>
              <div className='col-12 col-md-6'>
                <h3 className='ultimoArticulos'>ÚLTIMOS ARTÍCULOS</h3>
              </div>
              <div className='col-12 col-md-6' style={{ alignContent: 'end', alignItems: 'end', textAlign: 'end' }}>
                <button type="button" className="btn btn-danger btn-todoBlog" onClick={() => handleBlog()} >TODOS LOS BLOGS</button>
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
                  opcion='B'
                />
              ))}

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
