import {Box, Button, FormControl, FormHelperText, FormLabel, Input} from '@chakra-ui/react';
import useAsyncEffect from 'use-async-effect';
import {settings} from '../../../core/app-store/localstorage.ts';
import {ICE_SERVERS} from '../../../config/const.ts';
import useArrayState from 'use-array-state';
import {BiTrash} from 'react-icons/bi';

export default function ICEServer() {
    const [servers, setServers] = useArrayState<string>(settings.iceServers);

    useAsyncEffect(async () => {
        settings.iceServers = servers;
    }, [servers]);

    const restoreDefault = () => {
        setServers.set(ICE_SERVERS);
    };

    return <FormControl mt={8}>
        <Box display="flex" justifyContent="space-between">
            <FormLabel>ICE servers</FormLabel>
            <Box display="flex" gap={2}>
                <Button onClick={() => setServers.push('')} colorScheme="green" size="xs">Add</Button>
                <Button onClick={restoreDefault} size="xs">Restore default</Button>
            </Box>
        </Box>
        {servers.map((server, i) =>
            <Box display="flex" justifyContent="space-between" alignItems="center" key={i} gap={2} mt={3}>
                <Input value={server} onChange={e => setServers.update(i, e.target.value)}/>
                <Button onClick={() => setServers.remove(i)} colorScheme="red" fontSize={20}>
                    <BiTrash/>
                </Button>
            </Box>
        )}
        <FormHelperText>Helps devices find the best communication path for peer-to-peer connections.</FormHelperText>
    </FormControl>
        ;
}
