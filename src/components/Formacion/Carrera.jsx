import { Card, CardHeader, CardBody, Text, Flex } from '@chakra-ui/react'

const Carrera = (props) => {
    return (
        <Card
            overflow='hidden'
            variant='elevated'
            size='lg'
            backgroundColor='#00081B'
            my='1em'
            py='4'
        >
            <CardHeader py='1'>
                <Flex alignItems='center'>
                    <Text fontSize='lg' as='b' color='#F1622B' px='1'>{props.titulo}</Text>
                    <Text fontSize='md' color='#FF9E4D' px='1'>-</Text>
                    <Text fontSize='sm' color='#FF9E4D' px='1'>{props.institucion}</Text>
                    <Text fontSize='md' color='#FF9E4D' px='1'>-</Text>
                    <Text fontSize='sm' color='#FF9E4D' px='1'>{props.ciudad}</Text>
                </Flex>
                <Flex alignItems='center'>
                    <Text fontSize='xs' as='b' color='#FF9E4D' px='1'>{props.inicio}</Text>
                    <Text fontSize='xs' as='b' color='#FF9E4D' px='1'>-</Text>
                    <Text fontSize='xs' as='b' color='#FF9E4D' px='1'>{props.finalizacion}</Text>
                </Flex>
            </CardHeader>
            <CardBody py='1'>
                <Text fontSize='md' color='#FF9E4D' px='1'>{props.descripcion}</Text>
            </CardBody>
        </Card>
    )
}

export default Carrera