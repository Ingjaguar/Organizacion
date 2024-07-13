import { useState } from "react";
import Boton from "../Boton/index.js";
import Campo from "../Campo/index.js";
import ListaOpciones from "../ListaOpciones/index.js"
import "./Formulario.css";

const Formulario = (props) => {
    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");
    //Crear Grupo
    const [titulo, setTitulo] = useState("");
    const [color, setColor] = useState("");

    const { registrarColaborador, crearEquipo } = props;

    const manejarEnvio = (event) => {
        console.log("Envio", event);
        event.preventDefault();

        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        };
        console.log(datosAEnviar);
        registrarColaborador(datosAEnviar);
    };

    const manejarNuevoEquipo = (evento) => {
        evento.preventDefault();
        crearEquipo({
            titulo:titulo, 
            colorPrimario:color
        });
    }

    return (
        <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <Campo
                    titulo="Nombre"
                    placeholder="Ingresar nombre"
                    required={true}
                    valor={nombre}
                    actualizarValor={setNombre}
                />
                <Campo
                    titulo="Puesto"
                    placeholder="Ingresar puesto"
                    required
                    valor={puesto}
                    actualizarValor={setPuesto}
                />
                <Campo
                    titulo="Foto"
                    placeholder="Ingresar link de foto"
                    required
                    valor={foto}
                    actualizarValor={setFoto}
                />
                <ListaOpciones
                    valor={equipo}
                    actualizarEquipo={setEquipo}
                    equipos={props.equipos}
                />
                <Boton>Crear</Boton>
            </form>
            <form onSubmit={manejarNuevoEquipo}>
                <h2>Rellena el formulario para crear el equipo.</h2>
                <Campo
                    titulo="Ingresar Titulo"
                    placeholder="Ingresar titulo"
                    required
                    valor={titulo}
                    actualizarValor={setTitulo}
                />
                <Campo
                    titulo="Color"
                    placeholder="Ingresar color hexadecimal"
                    required
                    valor={color}
                    actualizarValor={setColor}
                    type="color"
                />
                <Boton>Registrar</Boton>
            </form>
        </section>
    );
};

export default Formulario;
