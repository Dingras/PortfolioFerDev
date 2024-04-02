import { Center, Heading, Button} from '@chakra-ui/react'
import Colors from '../../constants/Colors'
import Links from '../../constants/Links'

const Pie = () => {
    return (
        <Center
            py="1em"
            mt="1em"
            borderTop="1px"
            borderColor={Colors.Orange}
            bg={Colors.Blue}
        >
            <Heading
                color={Colors.OrangeLight}
                size='1em'
            >
                Pagina creada por {
                    <Button
                        variant='link'
                        color={Colors.Orange}
                        href={Links.github}
                    >
                        @Dingras
                    </Button>
                } 
            </Heading>
        </Center>
    )

}

export default Pie