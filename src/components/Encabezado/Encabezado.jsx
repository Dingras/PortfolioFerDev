import { Avatar, Box } from '@chakra-ui/react'
import Colors from '../../constants/Colors'

const Encabezado = () => {
    return (
        <Box
        py="1em"
        pl="1em"
        mb= "1em"
        borderBottom="1px"
        borderColor={Colors.Orange}
        bg={Colors.Blue}
        width={"100%"}
        zIndex={1}
        position={"fixed"}
        >
            <Avatar 
                className='animate__animated animate__zoomIn animate__slow'
                size='md'
                borderRadius='full'
                showBorder='true'
                borderColor={Colors.Orange}
                name='Cosentino Fernando'
                src='favicon.ico'
                
            />
        </Box>
    )
}

export default Encabezado