import { Box } from '@chakra-ui/react'
import Perfil from './components/Perfil/Perfil'
import SobreMi from './components/SobreMi/SobreMi'
import Formacion from './components/Formacion/Formacion'
import Proyectos from './components/Proyectos/Proyectos'
import Experiencia from './components/Experiencia/Experiencia'
import Colors from './constants/Colors'
import Habilidades from './components/Habilidades/Habilidades'
import Encabezado from './components/Encabezado/Encabezado'
import Pie from './components/Pie/Pie'
import { useColorModeValue } from '@chakra-ui/react';

function App() {

    const primary = useColorModeValue(Colors.Blue, Colors.BlueLight)
    const noPrimary = useColorModeValue(Colors.Orange,Colors.OrangeLight)
    const secondary = useColorModeValue(Colors.BlueLight, Colors.Blue)
    const noSecondary = useColorModeValue(Colors.OrangeLight, Colors.Orange)

    return (
    <Box bg={primary}>
        <Encabezado />
            <Box
                bg={primary}
                sx={{
                    backgroundColor: {primary},
                    padding: { base: '2% 5%', md: '0% 10%' },
                    paddingTop: { base: '100px', md: '100px'},
                    fontFamily: "'Ubuntu Mono', monospace",
                }}
            >
                <Perfil/>
                <SobreMi/>
                <Proyectos/>
                <Habilidades/>
                <Formacion/>
                {/* <Experiencia/> */}
            </Box>
            <Pie/>
    </Box>

    )
}

export default App
