import styled from '@emotion/styled'
import React from 'react';

const Label = styled.label`
    color: #ffffff;
`

const useSelectMonedas = (label, opciones) => {

    const SelectMonedas = () => ( // Observa que son parentesis y no llaves. Esta apertura y cierre de parentesis en react hace implicito el return, y su cotenido se mostrara en pantalla
        <>
            <Label>{label}</Label>
            <select>
                <option value="">-- Select --</option>

                {opciones.map( opciones => (
                    <option
                        key={opciones.id}
                        value={opciones.id}
                    >{opciones.nombre}</option>
                ))}
            </select>
        </>
    )

    return [ SelectMonedas ]
}

export default useSelectMonedas