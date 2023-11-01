import RemoteDownloadManager from '../../../../core/remote-download-manager.ts';
import {Box, Heading, Show, useToast} from '@chakra-ui/react';
import DownloadProgress from './DownloadProgress.tsx';
import {useEffect} from 'react';
import {useForceUpdate} from 'framer-motion';

const BASE_DOWNLOAD_VIEW_BOX_PROPS: Parameters<typeof Box>[0] = {
    border: '1px',
    borderColor: 'var(--chakra-colors-chakra-border-color)',
    p: 2,
    position: 'absolute'
};

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

    const Downloads = <>
        <Heading size="sm">Downloads:</Heading>
        {downloadManager.activeDownloads.map(download =>
            <DownloadProgress key={download.item.path} remoteDownload={download}/>
        )}
    </>;

    return downloadManager.activeDownloads.length ? <>
            <Show above="md">
                <Box width={530} left={10} bottom={10} {...BASE_DOWNLOAD_VIEW_BOX_PROPS}>
                    {Downloads}
                </Box>
            </Show>
            <Show below="md">
                <Box width="100%" bottom={0} {...BASE_DOWNLOAD_VIEW_BOX_PROPS}>
                    {Downloads}
                </Box>
            </Show>
        </>
        : null;
}
