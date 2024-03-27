import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, Button, ButtonGroup } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPython, faReact, faPhp } from "@fortawesome/free-brands-svg-icons"
import Colors from "../../constants/Colors"

const Proyecto = () => {
    return (
        <Card maxW='sm' bg={Colors.Blue} my="2">
            <CardBody>
                <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md' color={Colors.Orange}>Nombre de la app</Heading>
                    <Text color={Colors.OrangeLight}>
                        Descripcion
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup>
                    <Button variant='unstyled'>
                        <FontAwesomeIcon icon={faPython} size="xl" style={{ color: Colors.White, }} />
                    </Button>
                    <Button variant='unstyled'>
                        <FontAwesomeIcon icon={faReact} size="xl" style={{ color: Colors.White, }} />
                    </Button>
                    <Button variant='unstyled'>
                        <FontAwesomeIcon icon={faPhp} size="xl" style={{ color: Colors.White, }} />
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default Proyecto