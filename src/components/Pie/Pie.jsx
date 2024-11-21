import { Center, Heading, Link} from '@chakra-ui/react'
import Colors from '../../constants/Colors'
import Links from '../../constants/Links'

const Pie = () => {

    const year = new Date().getFullYear()

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
                size='sm'
            >
                Copyright © {year} - Pagina creada por {
                    <Link
                        href={Links.github}
                        color={Colors.Orange}
                        isExternal
                        fontWeight="bold"
                    >
                        @Dingras
                    </Link>
                } 
            </Heading>
        </Center>
    )

}

export default Pie