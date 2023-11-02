import RemoteDownloadManager from '../../../../core/remote-download-manager.ts';
import {Box, Button, Collapse, Heading, Show, useDisclosure, useToast} from '@chakra-ui/react';
import DownloadProgress from './DownloadProgress.tsx';
import {useEffect} from 'react';
import theme from '../../../../config/theme.ts';
import {FcCollapse, FcExpand} from 'react-icons/fc';
import {useCounter} from 'usehooks-ts';

const BASE_DOWNLOAD_VIEW_BOX_PROPS: Parameters<typeof Box>[0] = {
    border: '1px',
    borderColor: 'var(--chakra-colors-chakra-border-color)',
    position: 'absolute'
};

export type DownloadViewProps = { downloadManager: RemoteDownloadManager };

export default function DownloadView({downloadManager}: DownloadViewProps) {
    const forceUpdate = useCounter();
    const toast = useToast();
    const {isOpen, onToggle, onOpen} = useDisclosure();

    useEffect(() => {
        downloadManager.on('change', forceUpdate.increment);
        downloadManager.on('downloadedFinished', download => {
            toast({
                title: 'Download finished',
                description: download.item.name,
                status: 'success',
                isClosable: true
            });
        });

        onOpen();
    }, [downloadManager]);

    const Downloads = <Box backgroundColor={theme.colors.white} _dark={{backgroundColor: theme.colors.gray[800]}} p={3}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Heading size="sm">{downloadManager.activeDownloads.length} Downloads:</Heading>
            <Button variant="link" onClick={onToggle}>
                {isOpen ?
                    <FcCollapse/> :
                    <FcExpand/>
                }
            </Button>
        </Box>
        <Collapse in={isOpen} animateOpacity>
            {downloadManager.activeDownloads.map(download =>
                <DownloadProgress key={download.item.path} remoteDownload={download}/>
            )}
        </Collapse>
    </Box>;

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
