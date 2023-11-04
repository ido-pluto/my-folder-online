import {Box, Button, Checkbox, FormControl, FormHelperText, FormLabel, Input, useBoolean} from '@chakra-ui/react';
import {useState} from 'react';
import useAsyncEffect from 'use-async-effect';
import {settings} from '../../../core/app-store/localstorage.ts';
import {SERVER_SECURE, WEB_SERVER} from '../../../config/const.ts';

export default function WServer() {
    const [server, setServer] = useState<string>(settings.webServer);
    const [secure, setSecure] = useBoolean(settings.secure);

    useAsyncEffect(async () => {
        settings.webServer = server;
        settings.secure = secure;
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
        <FormControl my={2}>
            <Box display="flex" justifyContent="space-between">
                <FormLabel>PeerJS server</FormLabel>
                <Button onClick={restoreDefault} size="xs">Restore default</Button>
            </Box>
            <Input value={server} onChange={e => setServer(e.target.value)} placeholder={'my-server.com'}/>
            <FormHelperText>A broker connections between PeerJS clients.</FormHelperText>
        </FormControl>
        <Checkbox isChecked={secure} onChange={setSecure.toggle}>Secure</Checkbox>
    </Box>;
}
