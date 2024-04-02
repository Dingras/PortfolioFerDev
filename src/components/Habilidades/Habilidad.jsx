import { Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import Colors from '../../constants/Colors'

const Habilidad = (props) => {
    
    useState(()=>{
        console.log(`img_habilidades/${props.tipo}/${props.habilidad}.png`)
    },[])

    return (
        <Image
            margin= '1em'
            width= '60%' 
            src={`img_habilidades/${props.tipo}/${props.habilidad}.png`}
            alt={props.habilidad}
            title={props.habilidad}
        />
    )
}

export default Habilidad