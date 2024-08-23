import React from "react";
import freeCodeCampLogo from '../imagenes/freecodecamp-logo.png';
import '../hojas-de-estilos/LogoContenedor.css';

const LogoContenedor = () => (
    <div className='freecodecamp-logo-contenedor'>
        <img
          className= 'freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'/>
    </div>
)
export default LogoContenedor;


    