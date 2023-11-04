import {Dispatch, SetStateAction, useState} from 'react';
import RemoteDirectory from '../../core/share/remote-directory.ts';
import {useToast} from '@chakra-ui/react';
import Loading from './Loading.tsx';
import useAsyncEffect from 'use-async-effect';
import FileExplorer from './FileExplorer/FileExplorer.tsx';

export type FileManagerProps = {passwordState: [string | undefined, Dispatch<SetStateAction<string | undefined>>]};
export default function ConnectToPeer ({passwordState}: FileManagerProps){
    const [password, setPassword] = passwordState;
    const [directory, setDirectory] = useState<RemoteDirectory | null>(null);
    const toast = useToast();

    useAsyncEffect(async () => {
        if(!password) {
            directory?.close();
            return;
        }

        const newDirectory = new RemoteDirectory(password);

        try {
            await newDirectory.init();
            if (!newDirectory.peer)
                throw new Error('Peer is null');
        } catch (error) {
            toast({
                title: 'Can not connect to peer',
                description: (error as Error).message,
                status: 'error',
                isClosable: true
            });
            setPassword('');
            return;
        }

        setDirectory(newDirectory);
        newDirectory.peer.on('error', (error) => {
            toast({
                title: 'Disconnected from peer',
                description: error.message,
                status: 'error',
                isClosable: true
            });
            setPassword('');
        });

        return () => newDirectory.close();
    }, [password]);

    return directory ? <FileExplorer directory={directory}/> :<Loading />;
}

