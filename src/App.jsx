import { Box } from '@chakra-ui/react'
import Perfil from './components/Perfil/Perfil'
import SobreMi from './components/SobreMi/SobreMi'
import Formacion from './components/Formacion/Formacion'
import Proyectos from './components/Proyectos/Proyectos'
import Experiencia from './components/Experiencia/Experiencia'

function App() {

    return (
        <Box bg='#00081B'>
            <Perfil/>
            <SobreMi/>
            <Formacion/>
            <Proyectos/>
            <Experiencia/>
        </Box>
    )
}

export default App
