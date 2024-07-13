import { useState } from "react";
import { v4 as uuid } from 'uuid';
import Formulario from "./componentes/Formulario/Formulario.js";
import Header from "./componentes/Header/Header.js";
import MiOrg from "./componentes/MiOrg/index.js";
import Equipo from "./componentes/Equipo/index.js";
import Footer from "./componentes/Footer/index.js";
import "./App.css";

function App() {
    // Operador Ternario: condicion ? esVerdadero : esFalso
    
    const [mostrarFormulario, setMostrarFormulario] = useState(true);
    //Lista Colaboradores
    const [colaboradores, setColaboradores] = useState([
        {
            id: uuid(),
            equipo:"Movil",
            foto:"https://github.com/ingjaguar.png",
            nombre:"Julian Guarin",
            puesto:"Developer",
            favorito: true
        },
        {
            id: uuid(),
            equipo: "Programacion",
            foto: "https://github.com/ingjaguar.png",
            nombre: "Julian Guarin",
            puesto: "Developer",
            favorito: false
        },
        {
            id: uuid(),
            equipo: "Proyectos",
            foto: "https://github.com/ingjaguar.png",
            nombre: "Julian Guarin",
            puesto: "Developer",
            favorito: true
        },
        {
            id: uuid(),
            equipo: "Programacion",
            foto: "https://github.com/ingjaguar.png",
            nombre: "Julian Guarin",
            puesto: "Developer",
            favorito: true
        }
    ]);
    // Lista Equipos
    const [equipos, setEquipos] = useState([
        {
            id: uuid(),
            titulo: "Programacion",
            colorPrimario: "#57C278",
            colorSecundario: "#D9F7E9",
        },
        {
            id: uuid(),
            titulo: "Front-End",
            colorPrimario: "#82CFFA",
            colorSecundario: "#E8F8FF",
        },
        {
            id: uuid(),
            titulo: "Data Science",
            colorPrimario: "#A6D157",
            colorSecundario: "#F0F8E2",
        },
        {
            id: uuid(),
            titulo: "DevOps",
            colorPrimario: "#E06B69",
            colorSecundario: "#FDE7E8",
        },
        {
            id: uuid(),
            titulo: "UX/UI",
            colorPrimario: "#DB6EBF",
            colorSecundario: "#FAE9F5",
        },
        {
            id: uuid(),
            titulo: "Movil",
            colorPrimario: "#FFBA05",
            colorSecundario: "#FFF5D9",
        },
        {
            id: uuid(),
            titulo: "Proyectos",
            colorPrimario: "#FF8A29",
            colorSecundario: "#FFEEDF",
        },
    ])

    // Enviamos la funcion como prop al componente MiOrg
    // Cambiar / Mostrar Formularios
    const cambiarMostrar = () => {
        setMostrarFormulario(!mostrarFormulario);
    };

    //Registrar Colaborador--------------------------------
    const registrarColaborador = (colaborador) => {
        console.log("NuevoColaborador: ", colaborador);
        //Spread operator:
        setColaboradores([...colaboradores, colaborador]);
    };

    // Eliminar Colaborador
    const eliminarColaborador = (id) => {
        console.log("Eliminar a: ", id);
        const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
        setColaboradores(nuevosColaboradores);
    }

    // Actualizar color equipo, agregamos un ID por si existen dos equipos con el mismo nombre
    const actualizarColor = (color, id) => {
        console.log("Actualizar: ", color, id);
        const equiposActualizados = equipos.map( (equipo) => {
            if(equipo.id === id){
                equipo.colorPrimario = color
            }
            return equipo
        })
        setEquipos(equiposActualizados);
    }
    
    // Crear Equipo--------------------------------
    const crearEquipo = (nuevoEquipo) => {
        console.log(nuevoEquipo);
        setEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
    }

    // favorito
    const like = (id) => {
        console.log("like: ", id);
        const colaboradoresActualizados = colaboradores.map((colaborador) => {
            if (colaborador.id === id) {
                colaborador.favorito = !colaborador.favorito
            }
            return colaborador
        })
        setColaboradores(colaboradoresActualizados);
    }

    return (
        <div className="">
            <Header />
            {/* 3 formas de utilizar el Operador Ternario: */}
            {/* mostrarFormulario === true ? <Formulario /> : <></> */}
            {/* mostrarFormulario ? <Formulario /> : <></> */}
            {/* Condicion && esVerdadero */}
            {mostrarFormulario && <Formulario
                    equipos={equipos.map((equipo) => equipo.titulo)}
                    registrarColaborador={registrarColaborador}
                    crearEquipo={crearEquipo}
                />
            }
            
            {/* Funcion para cambiar Mostrar/Ocultar Formulario */}
            <MiOrg cambiarMostrar={cambiarMostrar} />
            
            {/* CREACION DE EQUIPOS */}
            {equipos.map((equipo) => {
                //console.log("Equipo:", equipo);
                return (
                    <Equipo
                        datos={equipo}
                        key={equipo.titulo}
                        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
                        eliminarColaborador={eliminarColaborador}
                        actualizarColor={actualizarColor}
                        like={like}
                    />
                );
            })}

            <Footer />
            {/*
            Forma Simplificada: Quitar las {} y el return:
            {equipos.map((equipo) => <Equipo datos={equipo} key={equipo.titutlo}/>;)}          
            */}

            {/* 
            <Equipo equipo="Programacion" />
            <Equipo equipo="Front-End" />
            <Equipo equipo="Data Science" />
            <Equipo equipo="DevOps" />
            <Equipo equipo="UX/UI" />
            <Equipo equipo="Movil" />
            <Equipo equipo="Proyectos" />           
            */}
        </div>
    );
}

export default App;
