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
                    Hola, mi nombre es Fernando y soy un analista de sistemas con una formación avanzada en ingeniería.
                    Tengo experiencia en el dominio del hardware, conocimientos de programación, bases de datos, redes, sistemas operativos y metodologías ágiles.
                    Me interesa trabajar en el backend y en el lenguaje Python, aunque disfruto de todas las ramas de la programación.
                </Text>
            </CardBody>
        </Card>
    )
}

export default SobreMi