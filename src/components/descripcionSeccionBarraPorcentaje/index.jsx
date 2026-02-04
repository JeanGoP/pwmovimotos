import React from "react";
import { mix } from 'polished';
import "./descripcionSeccionBarraPorcentaje.css"
function isValidHex(color) {
    return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
  }
const DescripcionSeccionBarraPorcentaje = ({Titulo, Descripcion, ColorCuerpo}) =>{
    const gray = '#808080';
    let newColor = ColorCuerpo;

    return(

            <div className="col-lg-4 col-md-4 col-sm-12 contenido__descripcionSeccionBarraPorcentaje" >
                <label className="titulo__descripcionSeccionBarraPorcentaje"style={{ color: '#fff' }} >{Titulo}</label><br></br>
                <label className="subtitulo__descripcionSeccionBarraPorcentaje" >{Descripcion}</label>
            </div>

    )
}

export default DescripcionSeccionBarraPorcentaje;