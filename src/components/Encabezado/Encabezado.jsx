import { Avatar, Box, Button, Switch } from '@chakra-ui/react'
import Colors from '../../constants/Colors'
import { useState } from 'react';
import { useColorMode, useColorModeValue } from '@chakra-ui/react';

const Encabezado = () => {
    const [isChecked, setIsChecked] = useState(true);
    const { colorMode, toggleColorMode } = useColorMode();

    const primary = useColorModeValue(Colors.Blue, Colors.BlueLight)
    const noPrimary = useColorModeValue(Colors.Orange,Colors.OrangeLight)
    const secondary = useColorModeValue(Colors.BlueLight, Colors.Blue)
    const noSecondary = useColorModeValue(Colors.BlueLight, Colors.Blue)


    const ColorModeControl = ()=>{
      setIsChecked(!isChecked)
      toggleColorMode()
    }

    return (
        <Box
        py="1em"
        px="1em"
        mb= "1em"
        borderBottom="1px"
        borderColor={noPrimary}
        bg={primary}
        width={"100%"}
        zIndex={1}
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        position={"fixed"}
        >
            <Avatar 
                className='animate__animated animate__zoomIn animate__slow'
                size='md'
                borderRadius='full'
                showBorder='true'
                borderColor={noPrimary}
                name='Cosentino Fernando'
                src='favicon.ico'
                
            />
            <Switch 
                isChecked={isChecked}
                onChange={ColorModeControl}
                size="lg"
                sx={{
                  '.chakra-switch__track': {
                    bg: isChecked ? Colors.BlueLight : Colors.Blue,
                  },
                  '.chakra-switch__thumb': {
                    bg: !isChecked ? Colors.Orange : Colors.OrangeLight,
                  },
                }}
            />
        </Box>
    )
}

export default Encabezado