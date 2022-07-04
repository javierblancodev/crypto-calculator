import React from 'react'
import styled from '@emotion/styled';
import Error from './Error';
import useSelectMonedas from '../hooks/useSelectMonedas';
import { monedas } from '../data/monedas';
import { useEffect, useState } from 'react';

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;

    &:hover {
        background-color: #7a7dfe;
        cursor: pointer;

    }
`

const Formulario = ({setMonedas}) => {

    const [ cryptos, setCryptos ] = useState([]);
    const [ error, setError ] = useState(false);

    const [ moneda, SelectMonedas ] = useSelectMonedas("Select Official Currency", monedas);
    const [ crypto, SelectCrypto ] = useSelectMonedas("Select Cryptocurrency", cryptos);
    
    useEffect(() => {
        const consultarAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"

            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            
            const arrayCryptos = resultado.Data.map((crypto) => {
                const objeto = {
                    id: crypto.CoinInfo.Name,
                    nombre: crypto.CoinInfo.FullName
                };

                return objeto;
            });
            setCryptos(arrayCryptos);
        };
        consultarAPI();
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        
        if([moneda, crypto].includes('')) {
            setError(true);
            return;
        }

        setError(false);

        setMonedas({moneda, crypto})
    }

    return (

        <>
            {error && <Error>All fields are mandatory </Error>}
            <form
                onSubmit={handleSubmit}
            >
                <SelectMonedas/>
                <SelectCrypto/>

                {moneda}

                <InputSubmit type="submit" value="quote" />
            </form>
        </>
    )
}

export default Formulario