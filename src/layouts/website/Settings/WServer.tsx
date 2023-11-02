import {Checkbox, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Text, useBoolean} from '@chakra-ui/react';
import {useState} from 'react';
import useAsyncEffect from 'use-async-effect';
import {settings} from '../../../core/app-store/localstorage.ts';

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

    return <>
        <Text color="gray.500"></Text>
        <FormControl my={3} isInvalid={!valid}>
            <FormLabel>Tracker server</FormLabel>
            <Input value={server} onChange={e => setServer(e.target.value)} placeholder={'my-server.com'}/>
            {valid ? <FormHelperText>The tracker server is used to connect between peers.</FormHelperText> :
                <FormErrorMessage>Cannot connect to server.</FormErrorMessage>
            }
        </FormControl>
        <Checkbox isChecked={secure} onChange={setSecure.toggle}>Secure</Checkbox>
    </>;
}


async function checkWebServer(server: string, secure: boolean) {
    try {
        const {status} = await fetch(`${secure ? 'https' : 'http'}://${server + CHECK_VALID_SERVER_PATH}`);
        return status === STATUS_OK;

    } catch {
        return false;
    }
}
