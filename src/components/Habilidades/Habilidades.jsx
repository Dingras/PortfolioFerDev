import { Card, Flex, Heading, Button, CardBody } from '@chakra-ui/react'
import FrontEnd from '../../constants/Habilidades/FrontEnd'
import Lenguajes from '../../constants/Habilidades/Lenguajes'
import Colors from '../../constants/Colors'
import Tipos from './Tipos'
import { SimpleGrid } from '@chakra-ui/react'
import DataBase from '../../constants/Habilidades/DataBase'
import BackEnd from '../../constants/Habilidades/BackEnd'

const Habilidades = () => {


    const getTipo1 = () => {
        return FrontEnd
    }

    const getTipo2 = () => {
        return Lenguajes
    }

    const getTipo3 = () => {
        return DataBase
    }
    const getTipo4 = () => {
        return BackEnd
    }

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
                <Heading size='md' color={Colors.Orange} mb='2'>Habilidades:</Heading>
                {/*<Button bg={Colors.Blue} color={Colors.Orange} float='right' _hover={{ bg: Colors.Orange, color: Colors.Blue }}>Ver Mas</Button>*/}
            </Flex>
                <SimpleGrid
                    columns={{ base: 1, lg: 2, xl: 4 }}
                    justifyItems='center'
                    >
                    <Tipos
                        tipo="FrontEnd"
                        habilidades={getTipo1()}
                        />
                    <Tipos
                        tipo="Lenguajes"
                        habilidades={getTipo2()}
                        />
                    <Tipos
                        tipo="DataBase"
                        habilidades={getTipo3()}
                        />
                    <Tipos
                        tipo="BackEnd"
                        habilidades={getTipo4()}
                        />
                </SimpleGrid>
            </CardBody>
        </Card>
    )
}

export default Habilidades