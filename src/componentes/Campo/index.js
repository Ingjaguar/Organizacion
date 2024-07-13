//import { useState } from "react";
import "./Campo.css"

const Campo = (props) => {
    //console.log("Datos: ", props);
    //const [valor, setValor] = useState("")
    const placeholderModificado = `${props.placeholder}...`

    //Destructuracion - Agregamos valor por defecto a los inputs
    const { type = "text" } = props
    //console.log(type);

    const manejarCambio = (e) => {
        //console.log("Cambio", e.target.value);
        props.actualizarValor(e.target.value);
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input
            placeholder={placeholderModificado}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}


export default Campo;