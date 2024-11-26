import { useEffect, useState } from 'react'
import { Button, Card, CardBody,  Flex,  Heading } from '@chakra-ui/react'
import Carrera from './Carrera'
import Educacion from '../../constants/Educacion'
import Certificados from '../../constants/Certificados'
import Colors from '../../constants/Colors'
import Certificado from './Certificado'
import { useColorModeValue } from '@chakra-ui/react';


const Formacion = () => {

    const primary = useColorModeValue(Colors.Blue, Colors.BlueLight)
    const noPrimary = useColorModeValue(Colors.Orange,Colors.OrangeLight)
    const secondary = useColorModeValue(Colors.BlueLight, Colors.Blue)
    const noSecondary = useColorModeValue(Colors.OrangeLight, Colors.Orange)
    
    const [carreras, setCarreras] = useState([])
    const [cursos, setCursos] = useState([])

    useEffect(()=>{
        setCarreras(Educacion)
        setCursos(Certificados)
    },[])

    return (
        <Card
            className='animate__animated animate__backInLeft animate__fast'
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='elevated'
            size='lg'
            alignItems='center'
            backgroundColor={secondary}
            border='1px solid'
            borderColor={noPrimary}
            my='1em'
        >
            <CardBody>
                <Flex justify="space-between" align='center'>
                    <Heading size='md' color={noPrimary}>Formación:</Heading>
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
                <Flex justify="space-between" align='center'>
                    <Heading size='md' color={noPrimary}>Certificados:</Heading>
                </Flex>
                {
                    cursos.map((certificado,index)=>(
                        <Certificado
                            key= {index}
                            titulo = {certificado.titulo}
                            institucion = {certificado.institucion}
                            url_img = {certificado.url_img}
                            descripcion = {certificado.descripcion}
                        />
                    ))
                }   
            </CardBody>
        </Card>
    )
}

export default Formacion