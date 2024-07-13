import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    /*const equipos = [
        "Programacion", 
        "Front-End",
        "Data Science",
        "DevOps",
        "UX/UI",
        "Movil",
        "Proyectos"
    ]*/ 
/*
SINTANXIS COMPLETA:
{equipos.map( (equipo, index) => {
    return <option key={index}>{equipo}</option>
})}

SINTANXIS SIMPLIFICADA
{equipos.map( (equipo, index) => <option key={index}>{equipo}</option>)}
*/ 
    const manejarCambios = (evento) => {
        console.log("Cambio: ", evento.target.value);
        props.actualizarEquipo(evento.target.value);
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambios}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
        </select>        
    </div>
}
export default ListaOpciones;