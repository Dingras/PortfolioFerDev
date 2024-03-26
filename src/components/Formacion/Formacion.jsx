import { Card, CardBody, Text, Heading } from '@chakra-ui/react'
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
                <Carrera titulo="Analista de sistemas"/>
            </CardBody>
        </Card>
    )
}

export default Formacion