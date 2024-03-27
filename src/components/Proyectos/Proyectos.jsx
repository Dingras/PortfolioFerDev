import { Card, CardBody, Flex, Button, Heading, SimpleGrid, Center } from '@chakra-ui/react'
import Proyecto from './Proyecto'
import Colors from '../../constants/Colors'

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
                <SimpleGrid columns={[1, null, 3]} spacing='1em' justifyItems='center'>
                        <Proyecto/>
                        <Proyecto/>
                        <Proyecto/>
                </SimpleGrid>
            </CardBody>
        </Card>
    )
}

export default Proyectos