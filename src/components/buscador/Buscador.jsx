import './buscador.css'
import {motion} from "framer-motion";

function Buscador(props) {


    function selectHandler(event) {
        props.seleccion(event.target.value)
    }

    return (
        <div className="container contenedor">
            <select
                className="select"
                onChange={selectHandler}>
                <option value="todos">Seleccione una categoría</option>
                <option value="Arquitectura">Arquitectura</option>
                <option value="Go">Go</option>
                <option value="Spring">Spring Boot</option>
            </select>
        </div>
    )
}


export default Buscador