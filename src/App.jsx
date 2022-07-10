import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import ImagenCripto from './img/imagen-criptos.png';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';


const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media(min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFFFFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`

function App() {

  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado] = useState({});
  const [spinner, setSpinner] = useState(false);

  useEffect( () => {
    if(Object.keys(monedas).length > 0) {
      const cotizarCrypto = async () => {
        setSpinner(true);
        setResultado({});

        const { moneda, crypto } = monedas;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${moneda}`

        const respuesta =  await fetch(url);
        const resultado = await respuesta.json();

        setTimeout(() => {
          setResultado(resultado.DISPLAY[crypto][moneda]);
          setSpinner(false)
        }, 2000);
      }

      cotizarCrypto();
    }
  }, [monedas])


  return (
    <Contenedor>
      <Imagen
        src={ImagenCripto}
        alt="criptos image"
      />
      <div>
        <Heading>Instant Quote for your Cryptocurrencies</Heading>
        
        <Formulario
          setMonedas={setMonedas}
        />

        {spinner && <Spinner />}

        {resultado.PRICE && <Resultado
          resultado={resultado}
        />}

      </div>
      
    </Contenedor>
  )
}

export default App
