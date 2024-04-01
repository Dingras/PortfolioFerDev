import { Box } from '@chakra-ui/react'
import Perfil from './components/Perfil/Perfil'
import SobreMi from './components/SobreMi/SobreMi'
import Formacion from './components/Formacion/Formacion'
import Proyectos from './components/Proyectos/Proyectos'
import Experiencia from './components/Experiencia/Experiencia'
import Colors from './constants/Colors'

function App() {

    return (
        <Box bg={Colors.Blue}>
            <Perfil/>
            <SobreMi/>
            <Proyectos/>
            <Formacion/>
            <Experiencia/>
        </Box>
    )
}

export default App
