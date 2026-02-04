import React from "react";
import "./marcasPublicitarias.css";

const MarcasPublicitarias = ({ jsonImagen }) => {


  const chunkArray = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  const slides = chunkArray(jsonImagen, 5);

  return (
    <div id="carouselMarcas" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">

        {slides.map((grupo, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <div className="row justify-content-center">
              {grupo.map((item, i) => (
                <div key={i} className="col-2 contenido__MarcasPublicitarias">
                  <img
                    src={item.url}
                    className="img-fluid imagen__MarcasPublicitarias"
                    alt="Marca"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>


      <button className="carousel-control-prev" type="button" data-bs-target="#carouselMarcas" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" />
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselMarcas" data-bs-slide="next">
        <span className="carousel-control-next-icon" />
      </button>
    </div>
  );
};

export default MarcasPublicitarias;
