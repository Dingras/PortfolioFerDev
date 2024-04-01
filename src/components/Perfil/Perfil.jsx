import { useState } from 'react'
import { Card, Stack, Heading, Text, Button, CardBody, Wrap, WrapItem } from '@chakra-ui/react'
import { Avatar } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import Links from '../../constants/Links'
import Colors from '../../constants/Colors'
import Swal from 'sweetalert2'

const Perfil = () => {

    const [isHoveredGitHub, setIsHoveredGitHub] = useState(false);
    const [isHoveredLinkedin, setIsHoveredLinkedin] = useState(false);
    const [isHoveredEmail, setIsHoveredEmail] = useState(false);
    const [isHoveredCV, setIsHoveredCV] = useState(false);

    const goMyLinkedinProfile = () => {
        window.open(Links.linkedin, '_blank');
    }
    const goMyGitHubProfile = () => {
        window.open(Links.github, '_blank');
    }
    const sendMeAEmail = () => {
        Swal.fire({
            background:Colors.Blue,
            title: Links.email,
            text: "Esta es mi direccion de correo",
            color: Colors.Orange,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonColor: Colors.BlueLight,
            denyButtonColor: Colors.Orange,
            cancelButtonColor:Colors.Error,
            confirmButtonText: "Copiar mi direccion",
            denyButtonText: `Enviar un correo`,
            cancelButtonText:"Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    background: Colors.Blue,
                    color: Colors.Orange,
                    position: "top-end",
                    title:"Correo copiado!",
                    icon:"success",
                    showConfirmButton: false,
                    timer: 1000
                }).then(() => {
                    navigator.clipboard.writeText(Links.email);
                });
            } else if (result.isDenied) {
                Swal.fire({
                    background: Colors.Blue,
                    color: Colors.Orange,
                    position: "top-end",
                    title:"Abriendo tu correo!",
                    icon:"info",
                    showConfirmButton: false,
                    timer: 1000
                }).then(() => {
                    window.location.href = `mailto:${Links.email}`;
                });
            }
        });
    }
    const showMyResume = () => {
        Swal.fire({
            background: Colors.Blue,
            icon:"question",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonColor: Colors.BlueLight,
            denyButtonColor: Colors.Orange,
            cancelButtonColor: Colors.Error,
            confirmButtonText: "Ver CV",
            denyButtonText: "Descargar CV",
            cancelButtonText:"Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    background: Colors.Blue,
                    color: Colors.Orange,
                    position: "top-end",
                    title:"Abriendo CV!",
                    icon:"success",
                    showConfirmButton: false,
                    timer: 1000
                }).then(() => {
                    window.open('/PortfolioFerDev/FernandoCosentinoCV.pdf', '_blank');
                });
            } else if (result.isDenied) {
                Swal.fire({
                    background: Colors.Blue,
                    color: Colors.Orange,
                    position: "top-end",
                    title:"Descargando CV!",
                    icon:"info",
                    showConfirmButton: false,
                    timer: 1000
                }).then(() => {
                    window.location.href = '/PortfolioFerDev/FernandoCosentinoCV.pdf';
                });
            }
        });
    }

    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='elevated'
            size='lg'
            alignItems='center'
            backgroundColor={Colors.BlueLight}
            border="1px solid"
            borderColor ={Colors.Orange}
            px ="3"
        >
            <Avatar
                size='2xl'
                borderRadius='full'
                showBorder='true'
                borderColor={Colors.Orange}
                name='Cosentino Fernando'
                src='perfil.png'
                mx='4'
            />

            <Stack>
                <CardBody>
                    <Heading size='xl' color={Colors.Orange}>Cosentino Fernando</Heading>
                    <Text fontSize='lg' py='2' color={Colors.OrangeLight}>Analista de sistemas</Text>
                    <Wrap>
                        <WrapItem>
                            <Button variant='unstyled' border="1px" borderColor ={Colors.White} onClick={goMyLinkedinProfile} onMouseEnter={() => setIsHoveredLinkedin(true)} onMouseLeave={() => setIsHoveredLinkedin(false)}>
                                <FontAwesomeIcon icon={faLinkedinIn} size='xl' style={{color: Colors.White,}} {...(isHoveredLinkedin && { bounce: true })}/>
                            </Button>
                        </WrapItem>
                        <WrapItem>
                            <Button variant='unstyled' border="1px" borderColor ={Colors.White} onClick={goMyGitHubProfile} onMouseEnter={() => setIsHoveredGitHub(true)} onMouseLeave={() => setIsHoveredGitHub(false)}>
                                <FontAwesomeIcon icon={faGithub} size='xl' style={{color: Colors.White,}} {...(isHoveredGitHub && { bounce: true })}/>
                            </Button>
                        </WrapItem>
                        <WrapItem>
                            <Button variant='unstyled' border="1px" borderColor ={Colors.White} onClick={sendMeAEmail} onMouseEnter={() => setIsHoveredEmail(true)} onMouseLeave={() => setIsHoveredEmail(false)}>
                                <FontAwesomeIcon icon={faEnvelope} size='xl' style={{color: Colors.White,}} {...(isHoveredEmail && { bounce: true })}/>
                            </Button>
                        </WrapItem>
                        <WrapItem>
                            <Button variant='unstyled' border="1px" borderColor ={Colors.White} onClick={showMyResume} onMouseEnter={() => setIsHoveredCV(true)} onMouseLeave={() => setIsHoveredCV(false)}>
                                <FontAwesomeIcon icon={faFile} size='xl'style={{color: Colors.White,}} {...(isHoveredCV && { bounce: true })}/>
                            </Button>
                            
                        </WrapItem>
                    </Wrap>
                </CardBody>
            </Stack>
        </Card>
    )
}

export default Perfil