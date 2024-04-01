import { Card, SimpleGrid, Center, CardBody } from '@chakra-ui/react'
import Habilidad from './Habilidad'
import Colors from '../../constants/Colors'

const Tipos = (props) => {

    return (
        <Card
            margin='1'
            bg={Colors.Blue}
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