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
        <Encabezado/>
            <Box
                bg={Colors.Blue} // Esto es un ejemplo, ajusta el color según la paleta de Chakra UI
                sx={{
                    backgroundColor: '#00081B', // Para colores específicos que no están en la paleta de Chakra
                    padding: { base: '2% 5%', md: '0% 10%' }, // Ajusta el padding basado en el breakpoint
                    fontFamily: "'Ubuntu Mono', monospace",
                        '@media only screen and (max-width: 700px)': {
                            padding: '2% 5%', // Esto es redundante dada la línea anterior y se puede omitir
                    },
                }}
            >
                
                <Perfil/>
                <SobreMi/>
                <Habilidades/>
                <Proyectos/>
                <Formacion/>
                <Experiencia/>
            </Box>
            <Pie/>
    </Box>

    )
}

export default App
