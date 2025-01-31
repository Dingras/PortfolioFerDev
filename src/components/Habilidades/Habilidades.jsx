import { Card, Flex, Heading, Button, CardBody } from '@chakra-ui/react'
import FrontEnd from '../../constants/Habilidades/FrontEnd'
import Lenguajes from '../../constants/Habilidades/Lenguajes'
import Colors from '../../constants/Colors'
import Tipos from './Tipos'
import { SimpleGrid } from '@chakra-ui/react'
import DataBase from '../../constants/Habilidades/DataBase'
import BackEnd from '../../constants/Habilidades/BackEnd'
import { useColorModeValue } from '@chakra-ui/react';

const Habilidades = () => {

    const primary = useColorModeValue(Colors.Blue, Colors.BlueLight)
    const noPrimary = useColorModeValue(Colors.Orange,Colors.OrangeLight)
    const secondary = useColorModeValue(Colors.BlueLight, Colors.Blue)
    const noSecondary = useColorModeValue(Colors.OrangeLight, Colors.Orange)

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
            className='animate__animated animate__backInRight animate__fast'
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='elevated'
            size='lg'
            alignItems='center'
            backgroundColor={secondary}
            border='1px solid'
            borderColor={noPrimary}
            my='1em'
        >
            <CardBody>
            <Flex justify="space-between" align='center'>
                <Heading size='md' color={noPrimary} mb='2'>Habilidades:</Heading>
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