import { Card, CardBody, Text, Heading } from '@chakra-ui/react'

const SobreMi = () => {
    return (
        <Card
            className='animate__animated animate__backInRight animate__fast'
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
                {/* <Heading size='md' color='#F1622B'>Acerca de mí:</Heading> */}
                <Text fontSize='lg' py='2' color='#FF9E4D'>
                    Analista de Sistemas y Desarrollador Backend Python.
                    Experto en Django, bases de datos, redes y sistemas operativos,
                    creando soluciones ágiles y escalables.
                </Text>
            </CardBody>
        </Card>
    )
}

export default SobreMi