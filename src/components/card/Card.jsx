import './card.css'
import {motion} from "framer-motion";
import image from "../../../public/img/cleanarchitecture-min.png"

function Card(props) {

    return (
        <div className="card-container">
            <motion.div
                // transition={{duration: 0.5, ease: "easeInOut", type: "spring"}}
                // initial={{scale: 0}}
                // animate={{scale: 1}}
                whileHover={{scale:1.2, rotate: 10}}
                whileTap={{scale: 0.8}}
                className="card">
                <img src={props.img} alt="imagen"/>
            </motion.div>
        </div>
    )
}

export default Card