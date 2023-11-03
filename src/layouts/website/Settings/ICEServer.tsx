import {Box, Button, FormControl, FormHelperText, FormLabel, Input} from '@chakra-ui/react';
import useAsyncEffect from 'use-async-effect';
import {settings} from '../../../core/app-store/localstorage.ts';
import {ICE_SERVERS} from '../../../config/const.ts';
import useArrayState from 'use-array-state';
import {BiTrash} from 'react-icons/bi';
import {ChangeEvent} from 'react';

const MAX_ICE_SERVERS = 5;

export default function ICEServer() {
    const [servers, setServers] = useArrayState<RTCIceServer>(settings.iceServers);

    useAsyncEffect(async () => {
        settings.iceServers = servers;
    }, [servers]);

    const restoreDefault = () => {
        setServers.set(ICE_SERVERS);
    };

    const updateServer = (index: number, key: keyof RTCIceServer) => {
        return (event: ChangeEvent<HTMLInputElement>) => {
            setServers.update(index, {
                ...servers[index],
                [key]: event.target.value
            });
        };
    };

    return <FormControl mt={8}>
        <Box display="flex" justifyContent="space-between">
            <FormLabel>ICE servers</FormLabel>
            <Box display="flex" gap={2}>
                <Button onClick={() => setServers.push({urls: ''})} colorScheme="green" size="xs" disabled={servers.length >= MAX_ICE_SERVERS}>Add</Button>
                <Button onClick={restoreDefault} size="xs">Restore default</Button>
            </Box>
        </Box>
        {servers.map((server, i) =>
            <Box display="flex" justifyContent="space-between" alignItems="center" key={i} gap={2} mt={3}>
                <Box display="flex" gap={2}>
                    <Input value={server.urls} onChange={updateServer(i, 'urls')} placeholder="url"/>
                    <Input value={server.username} onChange={updateServer(i, 'username')} placeholder="username"/>
                    <Input value={server.credential} onChange={updateServer(i, 'credential')} placeholder="credential"/>
                </Box>
                <Button onClick={() => setServers.remove(i)} colorScheme="red" fontSize={20}>
                    <BiTrash/>
                </Button>
            </Box>
        )}
        <FormHelperText>Helps devices find the best communication path for peer-to-peer connections.</FormHelperText>
    </FormControl>
        ;
}
