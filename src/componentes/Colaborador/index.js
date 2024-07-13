import "./Colaborador.css";
import { IoMdCloseCircle, IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

const Colaborador = (props) => {
    
    const {nombre,puesto,foto,id,favorito} = props.datos
    const { colorPrimario, eliminarColaborador, like } = props
    //"https://github.com/ingjaguar.png"
    return (
        <div className="colaborador">
            <IoMdCloseCircle className="eliminar" onClick={ () => eliminarColaborador(id) }/>
            <div className="encabezado" style={{backgroundColor: colorPrimario}}>
                <img src={foto} alt={nombre} />
            </div>
            <div className="info">
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
                {favorito ? <IoIosHeart color="red" onClick={() => like(id)} /> : <IoIosHeartEmpty onClick={() => like(id)} />}
                
                
            </div>
        </div>
    );
};

export default Colaborador;
