import { Box } from '@chakra-ui/react'
import Perfil from './components/Perfil/Perfil'
import SobreMi from './components/SobreMi/SobreMi'
import Formacion from './components/Formacion/Formacion'
import Proyectos from './components/Proyectos/Proyectos'
import Experiencia from './components/Experiencia/Experiencia'
import Colors from './constants/Colors'
import Habilidades from './components/Habilidades/Habilidades'

function App() {

    return (
        <Box bg={Colors.Blue}>
            <Perfil/>
            <SobreMi/>
            <Habilidades/>
            <Proyectos/>
            <Formacion/>
            <Experiencia/>
        </Box>
    )
}

export default App
