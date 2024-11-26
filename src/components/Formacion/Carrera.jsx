import { Card, CardHeader, CardBody, Text, SimpleGrid, Flex} from '@chakra-ui/react'
import Colors from '../../constants/Colors'
import { useColorModeValue } from '@chakra-ui/react';


const Carrera = (props) => {

    const primary = useColorModeValue(Colors.Blue, Colors.BlueLight)
    const noPrimary = useColorModeValue(Colors.Orange,Colors.OrangeLight)
    const secondary = useColorModeValue(Colors.BlueLight, Colors.Blue)
    const noSecondary = useColorModeValue(Colors.OrangeLight, Colors.Orange)

    return (
        <Card
            overflow='hidden'
            variant='elevated'
            size='lg'
            backgroundColor={primary}
            my='1em'
            py='4'
        >
            <CardHeader py='1'>
                <SimpleGrid columns='1'>
                    <Text fontSize='lg' as='b' color={noPrimary} px='1'>{props.titulo}</Text>
                    <Text fontSize='sm' color={noSecondary} px='1'>{props.institucion}</Text>
                    <Text fontSize='xs' color={noSecondary} px='1'>{props.ciudad}</Text>
                </SimpleGrid>
                <Flex align='center'>
                    <Text fontSize='xs' as='b' color={noSecondary} px='1'>{props.inicio}</Text>
                    <Text fontSize='xs' as='b' color={noSecondary} px='1'>-</Text>
                    <Text fontSize='xs' as='b' color={noSecondary} px='1'>{props.finalizacion}</Text>
                    <Text fontSize='xs' as='b' color={noSecondary} px='1'>-</Text>
                    <Text fontSize='xs' as='b' color={noSecondary} px='1'>[{props.estado}]</Text>
                </Flex>
            </CardHeader>
            <CardBody py='1'>
                <Text fontSize='md' color={noSecondary} px='1'>{props.descripcion}</Text>
            </CardBody>
        </Card>
    )
}

export default Carrera