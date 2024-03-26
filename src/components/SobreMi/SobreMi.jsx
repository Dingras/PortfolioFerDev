import { Card, CardBody, Text, Heading } from '@chakra-ui/react'

const SobreMi = () => {
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
                <Heading size='md' color='#F1622B'>Acerca de mí:</Heading>
                <Text fontSize='md' py='2' color='#FF9E4D'>
                    Soy un analista de sistema graduado en el Instituto Argentino de la empresa "HILET"
                    y tecnico en reparacíon, armado y actualizacíon de computadoras graduado en la
                    Universidad Tecnologica Nacional "UTN",
                    me apasiona la informatica y resolver problemas que pongan a prueba mis conocimientos
                    adquiridos en mis años de estudio.  
                </Text>
            </CardBody>
        </Card>
    )
}

export default SobreMi