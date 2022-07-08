import styled from "@emotion/styled";

const Cotizacion = styled.div`
    color: #ffffff;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 1rem;
    margin-top: 30px;
`;

const Imagen = styled.img`
    display: block;
    width: 90px;
`

const Texto = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`;

const Precio = styled.p`
    font-size: 22px;
    span {
        font-weight: 700;
    }
`;

const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado;
    return (
        <Cotizacion>
            <Imagen src={`https://www.cryptocompare.com/${IMAGEURL}`} alt="crypto" />
            <div><Precio>Current Price: <span>{PRICE}</span></Precio>
            <Texto>Highest Value: <span>{HIGHDAY}</span></Texto>
            <Texto>Lowest Value: <span>{LOWDAY}</span></Texto>
            <Texto>Change Last 24h: <span>{CHANGEPCT24HOUR}%</span></Texto>
            <Texto>Last Update: <span>{LASTUPDATE}</span></Texto></div>
        </Cotizacion>
    )
}

export default Resultado