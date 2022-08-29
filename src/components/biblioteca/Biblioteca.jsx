import './biblioteca.css'
import Categoria from "../categoria/Categoria.jsx";


function Biblioteca(props) {


    return (
        <div className="biblioteca-contenedor container margin-top">
            {props.categorias.map(x => {
                return <Categoria key={x.id} imagenes={x.imagenes} titulo={x.categoria}/>
            })}
        </div>
    )
}

export default Biblioteca