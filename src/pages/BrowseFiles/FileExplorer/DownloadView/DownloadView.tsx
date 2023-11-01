import RemoteDownloadManager from '../../../../core/remote-download-manager.ts';
import {Box, Heading, useToast} from '@chakra-ui/react';
import DownloadProgress from './DownloadProgress.tsx';
import {useEffect} from 'react';
import {useForceUpdate} from 'framer-motion';

export type DownloadViewProps = { downloadManager: RemoteDownloadManager };
export default function DownloadView({downloadManager}: DownloadViewProps) {
    const [update] = useForceUpdate();
    const toast = useToast();

    useEffect(() => {
        downloadManager.on('change', update);
        downloadManager.on('downloadedFinished', download => {
            toast({
                title: 'Download finished',
                description: download.item.name,
                status: 'success',
                isClosable: true
            });
        });
    }, [downloadManager, toast, update]);

    return downloadManager.activeDownloads.length ?
        <Box border="1px" width={530} borderColor="var(--chakra-colors-chakra-border-color)" p={2} position="absolute" left={10} bottom={10}>
            <Heading size="sm">Downloads:</Heading>
            {downloadManager.activeDownloads.map(download =>
                <DownloadProgress key={download.item.path} remoteDownload={download}/>
            )}
        </Box> : null;
}
