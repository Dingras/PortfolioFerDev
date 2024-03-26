import React from 'react'
import { Card, Stack, Heading, Text, Button, CardBody, Wrap, WrapItem } from '@chakra-ui/react'
import { Avatar } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'

const Perfil = () => {

    const goMyLinkedinProfile = () => {
        window.open('https://www.linkedin.com/in/feracosentino/', '_blank');
    }
    const goMyGitHubProfile = () => {
        window.open('https://github.com/Dingras', '_blank');
    }
    const sendMeAEmail = () => {
        Swal.fire({
            background:"#00081B",
            title: "feracosentino@gmail.com",
            text: "Esta es mi direccion de correo",
            color:"#F1622B",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonColor: "#254168",
            denyButtonColor: "#F1622B",
            cancelButtonColor:"#d33",
            confirmButtonText: "Copiar mi direccion",
            denyButtonText: `Enviar un correo`,
            cancelButtonText:"Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    background:"#00081B",
                    color:"#F1622B",
                    position: "top-end",
                    title:"Correo copiado!",
                    icon:"success",
                    showConfirmButton: false,
                    timer: 1000
                }).then(() => {
                    navigator.clipboard.writeText("feracosentino@gmail.com");
                });
            } else if (result.isDenied) {
                Swal.fire({
                    background:"#00081B",
                    color:"#F1622B",
                    position: "top-end",
                    title:"Abriendo tu correo!",
                    icon:"info",
                    showConfirmButton: false,
                    timer: 1000
                }).then(() => {
                    window.location.href = "mailto:feracosentino@gmail.com";
                });
            }
        });
    }
    const showMyResume = () => {
        Swal.fire({
            background:"#00081B",
            icon:"question",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonColor: "#254168",
            denyButtonColor: "#F1622B",
            cancelButtonColor:"#d33",
            confirmButtonText: "Ver CV",
            denyButtonText: "Descargar CV",
            cancelButtonText:"Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    background:"#00081B",
                    color:"#F1622B",
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
                    background:"#00081B",
                    color:"#F1622B",
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
            backgroundColor='#254168'
            border='1px solid #F1622B'
        >
            <Avatar
                size='2xl'
                borderRadius='full'
                showBorder='true'
                borderColor='#F1622B'
                name='Cosentino Fernando'
                src='perfil.png'
                mx='4'
            />

            <Stack>
                <CardBody>
                    <Heading size='xl' color='#F1622B'>Cosentino Fernando</Heading>
                    <Text fontSize='lg' py='2' color='#FF9E4D'>
                        Analista de sistemas
                    </Text>
                    <Wrap>
                        <WrapItem>
                            <Button variant='unstyled' onClick={goMyLinkedinProfile}>
                                <FontAwesomeIcon icon={faLinkedinIn} size='xl' />
                            </Button>
                        </WrapItem>
                        <WrapItem>
                            <Button variant='unstyled' onClick={goMyGitHubProfile}>
                                <FontAwesomeIcon icon={faGithub} size='xl' />
                            </Button>
                        </WrapItem>
                        <WrapItem>
                            <Button variant='unstyled' onClick={sendMeAEmail}>
                                <FontAwesomeIcon icon={faEnvelope} size='xl' />
                            </Button>
                        </WrapItem>
                        <WrapItem>
                            <Button variant='unstyled' onClick={showMyResume}>
                                <FontAwesomeIcon icon={faFile} size='xl'/>
                            </Button>
                        </WrapItem>
                    </Wrap>
                </CardBody>
            </Stack>
        </Card>
    )
}

export default Perfil