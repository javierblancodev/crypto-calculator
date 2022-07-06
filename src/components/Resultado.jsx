import styled from "@emotion/styled";

const Cotizacion = styled.div`
    color: #ffffff;
    font-family: 'Lato', sans-serif;
`;

const Texto = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`;

const Precio = styled.p`
    font-size: 30px;
    span {
        font-weight: 700;
    }
`;

const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado;
    return (
        <Cotizacion>
            <Precio>Current Price: <span>{PRICE}</span></Precio>
            <Texto>Highest Value: <span>{HIGHDAY}</span></Texto>
            <Texto>Lowest Value: <span>{LOWDAY}</span></Texto>
            <Texto>Change Last 24h: <span>{CHANGEPCT24HOUR}%</span></Texto>
            <Texto>Last Update: <span>{LASTUPDATE}</span></Texto>
        </Cotizacion>
    )
}

export default Resultado