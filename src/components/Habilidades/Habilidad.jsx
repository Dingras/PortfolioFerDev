import { Image } from '@chakra-ui/react'

const Habilidad = (props) => {

    return (
        <Image
            width= '98%' 
            src={`img_habilidades/${props.tipo}/${props.habilidad}.png`}
            alt={props.habilidad}
            title={props.habilidad}
        />
    )
}

export default Habilidad