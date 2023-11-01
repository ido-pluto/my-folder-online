import {Box, Button, Container, Heading, Input, Text, useBoolean, useColorMode, useToast} from '@chakra-ui/react';
import {useCallback, useState} from 'react';
import {WEB_SERVER} from '../../config/const.ts';
import theme from '../../config/theme.ts';
import Particles from 'react-particles';
import type {Engine} from 'tsparticles-engine';
import {loadSlim} from 'tsparticles-slim';
import ParticleOptions from './particles.json';

const SHARE_NOT_FOUND_STATUS = 404;
const SHARE_SERVER_ERROR_STATUS = 500;
const SHARE_OK_STATUS = 200;

type LoginProps = { updatePassword: (password: string) => void };
export default function Login({updatePassword}: LoginProps) {
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useBoolean();
    const toast = useToast();
    const {colorMode} = useColorMode();
    const login = async (fromPassword: string) => {
        try {
            setLoading.on();

            await checkPasswordOK(fromPassword);
            updatePassword(fromPassword);

            toast({
                title: 'Login success',
                status: 'success',
                isClosable: true
            });

        } catch (error) {
            toast({
                title: 'Can not login',
                description: (error as Error).message,
                status: 'error',
                isClosable: true
            });
            updatePassword('');
        } finally {
            setLoading.off();
        }
    };

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    return <Container flexGrow={1} display="grid" alignContent="center">
        <Particles id="tsparticles" init={particlesInit}
                   options={{
                       ...ParticleOptions as any,
                       background: {
                           color: {
                               value: colorMode === 'light' ? theme.colors.gray['200'] : theme.colors.gray['900']
                           }
                       }
                   }}
        />

        <Box boxShadow="2xl" p={10} background={theme.colors.gray['50']} _dark={{background: theme.components.LoginBox.background.dark}} rounded={10}>
            <Heading>Login</Heading>
            <Text my={5}>Enter the share-id you have</Text>
            <Input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            <Button onClick={() => login(password)} mt={5} isLoading={loading} colorScheme="blue">Login</Button>
        </Box>

    </Container>;

}


async function checkPasswordOK(password: string) {
    const {status} = await fetch(`${WEB_SERVER}/share/${encodeURIComponent(password)}/exist`);

    switch (status) {
        case SHARE_OK_STATUS:
            return true;
        case SHARE_NOT_FOUND_STATUS:
            throw new Error('Password is not correct');
        case SHARE_SERVER_ERROR_STATUS:
            throw new Error('Server error');
        default:
            throw new Error(`Unknown error - ${status}`);
    }
}
