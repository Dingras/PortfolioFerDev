import { SimpleGrid, Text, Box, Card, CardBody, Image } from "@chakra-ui/react"
import Colors from '../../constants/Colors'
import { useColorModeValue } from '@chakra-ui/react';


const Certificado = (props) => {
    const primary = useColorModeValue(Colors.Blue, Colors.BlueLight)
    const noPrimary = useColorModeValue(Colors.Orange,Colors.OrangeLight)
    const secondary = useColorModeValue(Colors.BlueLight, Colors.Blue)
    const noSecondary = useColorModeValue(Colors.OrangeLight, Colors.Orange)
  return (
    <Card 
        flexDirection={{ base: "column-reverse", md: "row" }}
        overflow="hidden"
        maxW="100%"
        backgroundColor={primary}
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
                    <Text fontSize='lg' as='b' color={noPrimary} px='1'>{props.titulo}</Text>
                    <Text fontSize='sm' as='b' color={noSecondary} px='1'>{props.institucion}</Text>
                </SimpleGrid>
                <Text fontSize='md' color={noSecondary} px='1'>{props.descripcion}</Text>
            </CardBody>
        </Box>
    </Card>
  )
}

export default Certificado