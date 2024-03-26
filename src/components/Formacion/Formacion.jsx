import { Card, CardBody,  Heading } from '@chakra-ui/react'
import Carrera from './Carrera'

const Formacion = () => {
    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='elevated'
            size='lg'
            alignItems='center'
            backgroundColor='#254168'
            border='1px solid #F1622B'
            my='1em'
        >
            <CardBody>
                <Heading size='md' color='#F1622B'>Formación:</Heading>
                <Carrera
                    titulo="Analista de sistemas"
                    institucion = "Instituto Argentino de la empresa HILET"
                    ciudad = "Mar del plata"
                    inicio = "04/2021"
                    finalizacion = "05/2024"
                    descripcion = "Habilidades en programacion, metodologias agiles, manejo de redes."
                />
            </CardBody>
        </Card>
    )
}

export default Formacion