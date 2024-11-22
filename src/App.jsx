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

function App() {

    return (
    <Box bg={Colors.Blue}>
        <Encabezado />
            <Box
                bg={Colors.Blue}
                sx={{
                    backgroundColor: '#00081B',
                    padding: { base: '2% 5%', md: '0% 10%' },
                    paddingTop: { base: '100px', md: '100px'},
                    fontFamily: "'Ubuntu Mono', monospace",
                }}
            >
                <Perfil/>
                <SobreMi/>
                <Habilidades/>
                <Proyectos/>
                <Formacion/>
                {/* <Experiencia/> */}
            </Box>
            <Pie/>
    </Box>

    )
}

export default App
