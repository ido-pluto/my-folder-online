import {Box, Button, Checkbox, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, useBoolean} from '@chakra-ui/react';
import {useState} from 'react';
import useAsyncEffect from 'use-async-effect';
import {settings} from '../../../core/app-store/localstorage.ts';
import {SERVER_SECURE, WEB_SERVER} from '../../../config/const.ts';

const STATUS_OK = 200;
const CHECK_VALID_SERVER_PATH = '/my-folder-online';

export default function WServer() {
    const [server, setServer] = useState<string>(settings.webServer);
    const [secure, setSecure] = useBoolean(settings.secure);
    const [valid, setValid] = useBoolean(false);

    useAsyncEffect(async () => {
        if (await checkWebServer(server, secure)) {
            settings.webServer = server;
            settings.secure = secure;
            setValid.on();
        } else {
            setValid.off();
        }
    }, [server, secure]);

    const restoreDefault = () => {
        setServer(WEB_SERVER);

        if (SERVER_SECURE) {
            setSecure.on();
        } else {
            setSecure.off();
        }
    };

    return <Box mb={5}>
        <FormControl my={2} isInvalid={!valid}>
            <Box display="flex" justifyContent="space-between">
                <FormLabel>Tracker server</FormLabel>
                <Button onClick={restoreDefault} size="xs">Restore default</Button>
            </Box>
            <Input value={server} onChange={e => setServer(e.target.value)} placeholder={'my-server.com'}/>
            {valid ? <FormHelperText>The tracker server is used to connect between peers.</FormHelperText> :
                <FormErrorMessage>Cannot connect to server.</FormErrorMessage>
            }
        </FormControl>
        <Checkbox isChecked={secure} onChange={setSecure.toggle}>Secure</Checkbox>
    </Box>;
}


async function checkWebServer(server: string, secure: boolean) {
    try {
        const {status} = await fetch(`${secure ? 'https' : 'http'}://${server + CHECK_VALID_SERVER_PATH}`);
        return status === STATUS_OK;

    } catch {
        return false;
    }
}
