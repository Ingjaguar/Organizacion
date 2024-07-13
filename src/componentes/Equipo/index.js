import Colaborador from "../Colaborador";
import "./Equipo.css";
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
    //Destructuracion
    // const colorPrimario = props.datos.colorPrimario;
    // const colorSecundario = props.datos.colorSecundario;
    // const titulo = props.datos.titulo;
    const { colorPrimario, colorSecundario, titulo, id } = props.datos;
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props
    const borderColor = { borderColor: colorPrimario };
    const background = { backgroundColor: hexToRgba(colorPrimario, 0.6) };



    return ( colaboradores.length > 0 &&
        <section className="equipo" style={background}>
            <input 
                type="color"
                className="input-color"
                value={colorSecundario /* Este valor no quiso cambiar con RGBA */}
                onChange={(evento) => {
                    actualizarColor(evento.target.value, id);
                }}
            
            />
            <h3 style={borderColor}>{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map( (colaborador, index) => <Colaborador 
                        datos={colaborador} 
                        key={index}
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        like={like}
                        />)
                }
            </div>
        </section>
    );
};
export default Equipo;
