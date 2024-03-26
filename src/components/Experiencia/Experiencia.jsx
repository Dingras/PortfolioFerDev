import { Card, CardBody, Text, Heading } from '@chakra-ui/react'

const Experiencia = () => {
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
                <Heading size='md' color='#F1622B'>Experiencia:</Heading>
                <Text fontSize='md' py='2' color='#FF9E4D'>
                    
                </Text>
            </CardBody>
        </Card>
    )
}

export default Experiencia