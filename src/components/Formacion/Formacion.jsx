import { Button, Card, CardBody,  Flex,  Heading } from '@chakra-ui/react'
import Carrera from './Carrera'
import Educacion from '../../constants/Educacion'
import { useEffect, useState } from 'react'
import Colors from '../../constants/Colors'

const Formacion = () => {

    const [carreras, setCarreras] = useState([])

    useEffect(()=>{
        setCarreras(Educacion)
    },[])

    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='elevated'
            size='lg'
            alignItems='center'
            backgroundColor={Colors.BlueLight}
            border='1px solid'
            borderColor={Colors.Orange}
            my='1em'
        >
            <CardBody>
                <Flex justify="space-between" align='center'>
                    <Heading size='md' color={Colors.Orange}>Formación:</Heading>
                    <Button bg={Colors.Blue} color={Colors.Orange} float='right' _hover={{ bg: Colors.Orange, color: Colors.Blue }}>Ver Mas</Button>
                </Flex>
                {
                    carreras.map((carrera,index)=>(
                        <Carrera
                            key = {index}
                            titulo={carrera.titulo}
                            institucion = {carrera.institucion}
                            ciudad = {carrera.ciudad}
                            inicio = {carrera.inicio}
                            finalizacion = {carrera.finalizacion}
                            descripcion = {carrera.descripcion}
                            estado = {carrera.estado}
                        />
                    ))
                }
            </CardBody>
        </Card>
    )
}

export default Formacion