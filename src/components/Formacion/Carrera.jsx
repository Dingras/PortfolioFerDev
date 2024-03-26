import { Card, CardBody, Text, Heading } from '@chakra-ui/react'

const Carrera = (props) => {
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
            <Heading size='md' color='#F1622B'>{props.titulo}</Heading>
            <Text fontSize='md' py='2' color='#FF9E4D'>
                
            </Text>
        </Card>
    )
}

export default Carrera