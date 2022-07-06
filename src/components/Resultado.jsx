import styled from "@emotion/styled";



const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado;
    return (
        <div>
            <p>Current Price: <span>{PRICE}</span></p>
            <p>Highest Value: <span>{HIGHDAY}</span></p>
            <p>Lowest Value: <span>{LOWDAY}</span></p>
            <p>Change Last 24h (%): <span>{CHANGEPCT24HOUR}</span></p>
            <p>Last Update: <span>{LASTUPDATE}</span></p>
        </div>
    )
}

export default Resultado