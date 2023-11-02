import {Box, Button, Input, Skeleton, useBoolean, useToast} from '@chakra-ui/react';
import {ChangeEvent, useMemo} from 'react';
import CopyFastLink from './CopyFastLink.tsx';
import ShareDirectory from '../../../core/share/share-directory.ts';
import useAsyncEffect from 'use-async-effect';
import {AiOutlineStop} from 'react-icons/ai';

export type ShareFilesProps = { files: File[], onStopShare: (files: File[]) => void }
export default function ShareFiles({files, onStopShare}: ShareFilesProps) {
    const [loading, setLoading] = useBoolean(true);
    const toast = useToast();
    const activeShare = useMemo(() => new ShareDirectory(files), [files]);

    useAsyncEffect(async () => {
        try {
            await activeShare.share();
            setLoading.off();
        } catch (error) {
            toast({
                title: 'Can not share directory',
                description: (error as Error).message,
                status: 'error',
                isClosable: true
            });
            onStopShare(files);
        }
    }, [activeShare]);

    const updateDirectoryName = (event: ChangeEvent<HTMLInputElement>) => {
        activeShare.metadata.rootDirectoryName = event.target.value;
    };

    const stopShare = () => {
        activeShare.stop();
        onStopShare(files);
    };

    const shareInfo = <Box display="flex" gap={3}>
        <Input placeholder="Directory name" onChange={updateDirectoryName} flexGrow={1}/>
        <Box display="flex" gap={2}>
            <CopyFastLink token={activeShare.shareId || ''}/>
            <Button onClick={stopShare} colorScheme="red" variant="ghost" title="Abort">
                <AiOutlineStop/>
            </Button>
        </Box>
    </Box>;

    return loading ?
        <Skeleton borderRadius={5}>
            {shareInfo}
        </Skeleton> :
        shareInfo;
}
