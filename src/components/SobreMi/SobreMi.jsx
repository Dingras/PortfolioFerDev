import { Card, CardBody, Text, Heading } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react';
import Colors from '../../constants/Colors';



const SobreMi = () => {

    const primary = useColorModeValue(Colors.Blue, Colors.BlueLight)
    const noPrimary = useColorModeValue(Colors.Orange,Colors.OrangeLight)
    const secondary = useColorModeValue(Colors.BlueLight, Colors.Blue)
    const noSecondary = useColorModeValue(Colors.OrangeLight, Colors.Orange)

    return (
        <Card
            className='animate__animated animate__backInRight animate__fast'
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='elevated'
            size='lg'
            alignItems='center'
            backgroundColor= {secondary}
            border='1px solid'
            borderColor={noPrimary}
            my='1em'
        >
            <CardBody>
                {/* <Heading size='md' color='#F1622B'>Acerca de mí:</Heading> */}
                <Text fontSize='lg' py='2' color={noPrimary}>
                    Analista de Sistemas y Desarrollador Backend Python.
                    Experto en Django, bases de datos, redes y sistemas operativos,
                    creando soluciones ágiles y escalables.
                </Text>
            </CardBody>
        </Card>
    )
}

export default SobreMi