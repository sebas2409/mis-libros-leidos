import Card from "../card/Card.jsx";
import './categoria.css'
import {motion} from "framer-motion";


function Categoria(props) {

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    return (
        <div>
            <h3>{props.titulo}</h3>
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="categoria">

                {props.imagenes.map(x => {
                    return (
                        <Card key={x.path} variants={item} img={x.path}/>
                    )
                })}
            </motion.div>
        </div>
    )
}

export default Categoria