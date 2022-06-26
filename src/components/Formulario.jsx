import React from 'react'
import styled from '@emotion/styled';
import useSelectMonedas from '../hooks/useSelectMonedas';
import { monedas } from '../data/monedas';
import { useEffect } from 'react';

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

const Formulario = () => {

    const [ moneda, SelectMonedas ] = useSelectMonedas("Select Official Currency", monedas);
    
    useEffect(() => {
        const consultarAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"

            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            console.log(resultado.Data);
        };
        consultarAPI();
    }, [])

    return (
        <form>
            <SelectMonedas/>

            {moneda}

            <InputSubmit type="submit" value="quote" />
        </form>
    )
}

export default Formulario