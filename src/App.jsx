import './app.css'
import Navbar from "./components/navbar/Navbar.jsx";
import Buscador from "./components/buscador/Buscador.jsx";
import Biblioteca from "./components/biblioteca/Biblioteca.jsx";
import {useState} from "react";
import cleanarchitecture from '../public/img/cleanarchitecture-min.png'
import dddestilado from '../public/img/DDDDestilado-min.png'
import dddwithjava from '../public/img/DDDwithJava-min.png'
import eventdriven from '../public/img/Eventdriven -min.png'
import hexagonal from '../public/img/HexagonalJava-min.png'
import implemetingDdd from '../public/img/ImplementingDDD-min.png'
import microsevics from '../public/img/Microservices -min.png'
import eric from '../public/img/DDD Eric evans-min.png'
import oreilly from '../public/img/DDD Oreilly-min.png'
import springboot from '../public/img/ProSpringboot2-min.png'
import springstart from '../public/img/SpringStarthere-min.png'
import masteringgo from '../public/img/MasteringGo-min.png'
import genericData from '../public/img/GenericData-min.png'
import gingo from '../public/img/Gingo-min.png'


function App() {

    const categorias = [
        {
            id: 1,
            categoria: "Arquitectura",
            imagenes: [
                {path: cleanarchitecture},
                {path: dddestilado},
                {path: dddwithjava},
                {path: eventdriven},
                {path: hexagonal},
                {path: implemetingDdd},
                {path: microsevics},
                {path: eric},
                {path: oreilly},
            ]
        },
        {
            id: 2,
            categoria: "Spring",
            imagenes: [
                {path: springboot},
                {path: springstart},
            ]
        },
        {
            id: 3,
            categoria: "Go",
            imagenes: [
                {path: masteringgo},
                {path: genericData},
                {path: gingo},

            ]
        }
    ]

    const [listaFiltrada, setListaFiltrada] = useState(categorias)

    function categoriaSeleccionadaHandler(seleccion) {
        const filtrada = categorias.filter(z => {
            return z.categoria.toString() === seleccion.toString()
        })
        setListaFiltrada(filtrada)
    }


    return (
        <div>
            <Navbar/>
            <Buscador seleccion={categoriaSeleccionadaHandler}/>
            <Biblioteca categorias={listaFiltrada}/>
        </div>
    )
}

export default App
