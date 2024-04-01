import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, Button, ButtonGroup, Icon } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPython, faReact, faPhp, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import Colors from "../../constants/Colors"
import Swal from 'sweetalert2'
import { useState } from "react"

const Proyecto = (props) => {

    const [isHoveredGitHub, setIsHoveredGitHub] = useState(false);
    const [isHoveredDesktop, setIsHoveredDesktop] = useState(false);

    const goGitHubRepo = () => {
        Swal.fire({
            background: Colors.Blue,
            title: "Mi codigo en GitHub",
            text: "Aqui puede encontrar el codigo de la aplicacion",
            color: Colors.Orange,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonColor: Colors.BlueLight,
            denyButtonColor: Colors.Orange,
            cancelButtonColor: Colors.Error,
            confirmButtonText: "FrontEnd",
            denyButtonText: "BackEnd",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                if (props.url_repo_front == null || props.url_repo_front == "") {
                    Swal.fire({
                        background: Colors.Blue,
                        color: Colors.Orange,
                        title: "La aplicacion no contiene codigo front-end :(",
                        icon: "error",
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else {
                    Swal.fire({
                        background: Colors.Blue,
                        color: Colors.Orange,
                        position: "top-end",
                        title: "Saliendo al codigo!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1000
                    }).then(() => {
                        window.open(props.url_repo_front, '_blank');
                    });
                }
            } else if (result.isDenied) {
                if (props.url_repo_back == null || props.url_repo_back == "") {
                    Swal.fire({
                        background: Colors.Blue,
                        color: Colors.Orange,
                        title: "La aplicacion no contiene codigo back-end :(",
                        icon: "error",
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else {
                    Swal.fire({
                        background: Colors.Blue,
                        color: Colors.Orange,
                        position: "top-end",
                        title: "Saliendo al codigo!",
                        icon: "info",
                        showConfirmButton: false,
                        timer: 1000
                    }).then(() => {
                        window.open(props.url_repo_back, '_blank');
                    });
                }
            }
        });
    }

    const goApp = () => {
        if (props.url_app == null || props.url_app == "") {
            Swal.fire({
                background: Colors.Blue,
                color: Colors.Orange,
                title: "La aplicacion no se encuentra desplegada :C",
                icon: "error",
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            Swal.fire({
                background: Colors.Blue,
                color: Colors.Orange,
                position: "top-end",
                title: "Saliendo a la aplicacion",
                icon: "success",
                showConfirmButton: false,
                timer: 1000
            }).then(() => {
                window.open(props.url_app, '_blank');
            });
        }
    }

    return (
        <Card maxW='xxl' bg={Colors.Blue} my="2" width='100%'>
            <CardBody>
                <Image
                    src={`img_apps/${props.url_img}`}
                    alt={props.titulo}
                    borderRadius='lg'
                    maxHeight='12em'
                    mx='auto'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md' color={Colors.Orange}>{props.titulo}</Heading>
                    <Text color={Colors.OrangeLight}>
                        {props.descripcion}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter justify='space-between'>
                <Card border="1px solid" borderColor={Colors.White} bg={Colors.Blue} mx='1'>
                    <ButtonGroup>
                        <Button variant='unstyled' onClick={goGitHubRepo} onMouseEnter={() => setIsHoveredGitHub(true)} onMouseLeave={() => setIsHoveredGitHub(false)}>
                            <FontAwesomeIcon icon={faGithub} size='xl' style={{ color: Colors.White, }} {...(isHoveredGitHub && { bounce: true })} />
                        </Button>
                        <Button variant='unstyled' onClick={goApp} onMouseEnter={() => setIsHoveredDesktop(true)} onMouseLeave={() => setIsHoveredDesktop(false)}>
                            <FontAwesomeIcon icon={faDesktop} size='xl' style={{ color: Colors.White, }} {...(isHoveredDesktop && { bounce: true })} />
                        </Button>
                    </ButtonGroup>
                </Card>

                <Card border="1px solid" borderColor={Colors.White} bg={Colors.Blue} mx='1'>
                    <ButtonGroup>
                        {
                            props.tecnologias.map((tecnologia,index) => (
                                <Button variant='unstyled' cursor="default" mx="1" style={{display: 'flex'}} key={index}>
                                    <Image src={`icons/${tecnologia}.svg`} boxSize="1.5em" style={{ filter: 'brightness(0) invert(1)' }} title={tecnologia}/>
                                </Button>
                            )
                            )
                        }
                    </ButtonGroup>
                </Card>

            </CardFooter>
        </Card>
    )
}

export default Proyecto