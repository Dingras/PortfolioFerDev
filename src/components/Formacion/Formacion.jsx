import { useEffect, useState } from 'react'
import { Button, Card, CardBody,  Flex,  Heading } from '@chakra-ui/react'
import Carrera from './Carrera'
import Educacion from '../../constants/Educacion'
import Certificados from '../../constants/Certificados'
import Colors from '../../constants/Colors'
import Certificado from './Certificado'

const Formacion = () => {

    const [carreras, setCarreras] = useState([])
    const [cursos, setCursos] = useState([])

    useEffect(()=>{
        setCarreras(Educacion)
        setCursos(Certificados)
    },[])

    return (
        <Card
            className='animate__animated animate__backInLeft animate__faster'
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
                    <Heading size='md' color={Colors.Orange}>Certificados:</Heading>
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