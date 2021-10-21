import React from 'react'
import { Link } from "react-router-dom";
import Live3 from '../Image/live.jpg'
import Nube3 from '../Image/nube.jpg'
import Planta3 from '../Image/planta.jpg'
import Red3 from '../Image/red.jpg'
import Sdf3 from '../Image/sdf.jpg'
import Superman3 from '../Image/superman.jpg'



const Navegacion = () => {
    return (
        //Como es clase se pone container y separa y mt-3 es el margen
        <div className="container mt-3 padre">
            <Link to="/Live" className="links">
                <figure>
                    <img src={Live3} alt="" className="tamaño-immg" />
                    <figcaption>Live</figcaption>
                </figure>
            </Link>
            <Link to="/Nube" className="links">
                <figure>
                    <img src={Nube3} alt="" className="tamaño-immg" />
                    <figcaption>Nube</figcaption>
                </figure>
            </Link>
            <Link to="/Planta" className="links">
                <figure>
                    <img src={Planta3} alt="" className="tamaño-immg" />
                    <figcaption>Planta</figcaption>
                </figure>
            </Link>
            <Link to="/Red" className="links">
                <figure>
                    <img src={Red3} alt="" className="tamaño-immg" />
                    <figcaption>Red</figcaption>
                </figure>
            </Link>
            <Link to="/Sdf" className="links">
                <figure>
                    <img src={Sdf3} alt="" className="tamaño-immg" />
                    <figcaption>Sdf</figcaption>
                </figure>
            </Link>
            <Link to="/Superman" className="links">
                <figure>
                    <img src={Superman3} alt="" className="tamaño-immg"/>
                    <figcaption>Superman</figcaption>
                </figure>
            </Link>
        </div>
    )
}

export default Navegacion
