import './App.css';
/*import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';*/
import Boton from './componentes/Boton';
import LogoContenedor from './componentes/LogoContenedor';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import {evaluate} from 'mathjs';

function App() {

  const [input, setInput] = useState('');
  const [error, setError] = useState(false);


  const agregarInput = val => {
    setInput(input + val);
  };

  /*const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    }
    else {
      alert('agregue valores para realizar el calculo')
    }
  }; */

  /*const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input).toString());
    } else {
      alert('Agregue valores para realizar el cálculo');
    }
  }; */

  /*const calcularResultado = () => {
    if (input && typeof input === 'string') {
      // Verifica si el input termina en un operador
      const operadores = ['+', '-', '*', '/'];
      const ultimoCaracter = input[input.length - 1];
  
      if (operadores.includes(ultimoCaracter)) {
        alert('La expresión no está completa. Por favor, completa la operación antes de calcular.');
      } else {
        setInput(evaluate(input).toString());
      }
    } else {
      alert('Agregue valores para realizar el cálculo');
    }
  }; */
  
  const calcularResultado = () => {
    if (input && typeof input === 'string') {
      try {
        const result = evaluate(input);
        if (result === Infinity || result === -Infinity) {
          setError(true);
          setInput('Error: División por Cero');
        } else {
          setInput(result.toString());
        }
      } catch (err) {
        setError(true);
        setInput('Error');
      }
    } else {
      alert('Agregue valores para realizar el cálculo');
    }
  };
  

  return (
    <div className='App'>
      <LogoContenedor />
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClic={agregarInput} disabled={error}>1</Boton>
          <Boton manejarClic={agregarInput} disabled={error}>2</Boton>
          <Boton manejarClic={agregarInput} disabled={error}>3</Boton>
          <Boton manejarClic={agregarInput} disabled={error}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput} disabled={error}>4</Boton>
          <Boton manejarClic={agregarInput} disabled={error}>5</Boton>
          <Boton manejarClic={agregarInput} disabled={error}>6</Boton>
          <Boton manejarClic={agregarInput} disabled={error}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput} disabled={error}>7</Boton>
          <Boton manejarClic={agregarInput} disabled={error}>8</Boton>
          <Boton manejarClic={agregarInput} disabled={error}>9</Boton>
          <Boton manejarClic={agregarInput} disabled={error}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado} disabled={error}>=</Boton>
          <Boton manejarClic={agregarInput} disabled={error}>0</Boton>
          <Boton manejarClic={agregarInput} disabled={error}>.</Boton>
          <Boton manejarClic={agregarInput} disabled={error}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => {
            setInput('');
            setError(false);
          }}>
          Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
