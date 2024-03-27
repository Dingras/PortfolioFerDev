import { Card, CardHeader, CardBody, Text, Flex } from '@chakra-ui/react'
import Colors from '../../constants/Colors'

const Carrera = (props) => {
    return (
        <Card
            overflow='hidden'
            variant='elevated'
            size='lg'
            backgroundColor={Colors.Blue}
            my='1em'
            py='4'
        >
            <CardHeader py='1'>
                <Flex align='center'>
                    <Text fontSize='lg' as='b' color={Colors.Orange} px='1'>{props.titulo}</Text>
                    <Text fontSize='md' color={Colors.OrangeLight} px='1'>-</Text>
                    <Text fontSize='sm' color={Colors.OrangeLight} px='1'>{props.institucion}</Text>
                    <Text fontSize='md' color={Colors.OrangeLight} px='1'>-</Text>
                    <Text fontSize='sm' color={Colors.OrangeLight} px='1'>{props.ciudad}</Text>
                </Flex>
                <Flex align='center'>
                    <Text fontSize='xs' as='b' color={Colors.OrangeLight} px='1'>{props.inicio}</Text>
                    <Text fontSize='xs' as='b' color={Colors.OrangeLight} px='1'>-</Text>
                    <Text fontSize='xs' as='b' color={Colors.OrangeLight} px='1'>{props.finalizacion}</Text>
                    <Text fontSize='xs' as='b' color={Colors.OrangeLight} px='1'>-</Text>
                    <Text fontSize='xs' as='b' color={Colors.OrangeLight} px='1'>[{props.estado}]</Text>
                </Flex>
            </CardHeader>
            <CardBody py='1'>
                <Text fontSize='md' color={Colors.OrangeLight} px='1'>{props.descripcion}</Text>
            </CardBody>
        </Card>
    )
}

export default Carrera