import { Card, SimpleGrid, Center, CardBody } from '@chakra-ui/react'
import Habilidad from './Habilidad'
import Colors from '../../constants/Colors'
import { useColorModeValue } from '@chakra-ui/react';

const Tipos = (props) => {

    const primary = useColorModeValue(Colors.Blue, Colors.BlueLight)
    const noPrimary = useColorModeValue(Colors.Orange,Colors.OrangeLight)
    const secondary = useColorModeValue(Colors.BlueLight, Colors.Blue)
    const noSecondary = useColorModeValue(Colors.BlueLight, Colors.Blue)

    return (
        <Card
            margin='1'
            bg={primary}
            border="1em"
            borderColor={Colors.White}
            align="center"
            p="4%"
        >
            <CardBody>
                <SimpleGrid
                    columns={[3, null, 3]}
                    spacing='1em'
                    alignItems='center'
                >
                    {
                        props.habilidades.map((habilidad) => {
                            return (
                                <Habilidad
                                    key={habilidad.id}
                                    tipo={props.tipo}
                                    habilidad={habilidad.nombre}
                                />
                            )
                        }
                        )
                    }
                </SimpleGrid>
            </CardBody>
        </Card>

    )
}

export default Tipos