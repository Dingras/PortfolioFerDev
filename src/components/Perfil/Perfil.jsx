import React from 'react'
import { Card, Stack, Heading, Text, Button, CardBody, Wrap, WrapItem } from '@chakra-ui/react'
import { Avatar } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Perfil = () => {

    const goMyLinkedinProfile = () => {
        window.open('https://www.linkedin.com/in/feracosentino/', '_blank');
    }
    const goMyGitHubProfile = () => {
        window.open('https://github.com/Dingras', '_blank');
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
                src='/src/assets/perfil.png'
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
                            <Button variant='unstyled' colorScheme='gray'>
                                <FontAwesomeIcon icon={faEnvelope} size='xl' />
                            </Button>
                        </WrapItem>
                    </Wrap>
                </CardBody>
            </Stack>
        </Card>
    )
}

export default Perfil