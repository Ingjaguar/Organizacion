//import { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {
    // Estados - Hooks:
    // useState:
    // const [nombreVariable, funcionActualiza] = useState(valorInicial)
    
    /* const [mostrar, actualizarMostrar] = useState(true);

    const manejarClick = () => {
        console.log("Mostrar/Ocultar", !mostrar);
        actualizarMostrar(!mostrar)// Alterna entre true/false como un switche para mostrar/ocultar
    } */

    return <section className="orgSection">
        <h3 className="tittle">Mi Organizacion</h3>
        <img src="./img/add.png" alt="add" onClick={props.cambiarMostrar}></img>
    </section>
}

export default MiOrg;