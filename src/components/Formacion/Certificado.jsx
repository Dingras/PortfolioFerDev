import { SimpleGrid, Text, Box, Card, CardBody, Image } from "@chakra-ui/react"
import Colors from '../../constants/Colors'


const Certificado = (props) => {
  return (
    <Card 
        flexDirection={{ base: "column-reverse", md: "row" }}
        overflow="hidden"
        maxW="100%"
        backgroundColor={Colors.Blue}
        my='1em'
    >
        <Image
            objectFit="cover"
            w={{ base: "100%", md: "40%" }} // Ajusta el ancho para móviles
            h={{ base: "auto", md: "100%" }} // Ajusta la altura para móviles
            src={`img_formacion/${props.url_img}`}
            alt={props.titulo}
        />
        <Box
        >
            <CardBody>
                <SimpleGrid columns='1'>
                    <Text fontSize='lg' as='b' color={Colors.Orange} px='1'>{props.titulo}</Text>
                    <Text fontSize='sm' as='b' color={Colors.OrangeLight} px='1'>{props.institucion}</Text>
                </SimpleGrid>
                <Text fontSize='md' color={Colors.OrangeLight} px='1'>{props.descripcion}</Text>
            </CardBody>
        </Box>
    </Card>
  )
}

export default Certificado