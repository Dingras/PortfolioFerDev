import { Card, CardBody, Flex, Button, Heading, SimpleGrid, Center } from '@chakra-ui/react'
import Proyecto from './Proyecto'
import Colors from '../../constants/Colors'
import Proyectos_Principales from '../../constants/ProyectosPricipales'

const Proyectos = () => {
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
                    <Heading size='md' color={Colors.Orange} mb='2'>Proyectos:</Heading>
                    <Button bg={Colors.Blue} color={Colors.Orange} float='right' _hover={{ bg: Colors.Orange, color: Colors.Blue }}>Ver Mas</Button>
                </Flex>
                <SimpleGrid columns={{ base: 1, xl: 3 }} spacing='10' justifyItems='center'>
                    {
                        Proyectos_Principales.map((proyecto)=>(
                                <Proyecto
                                    key = {proyecto.id}
                                    titulo = {proyecto.titulo}
                                    descripcion = {proyecto.descripcion}
                                    url_img = {proyecto.url_img}
                                    url_repo_front = {proyecto.url_repo_front}
                                    url_repo_back = {proyecto.url_repo_back}
                                    url_app = {proyecto.url_app}
                                    tecnologias = {proyecto.tecnologias}
                                />
                            )
                        )
                    }
                </SimpleGrid>
            </CardBody>
        </Card>
    )
}

export default Proyectos