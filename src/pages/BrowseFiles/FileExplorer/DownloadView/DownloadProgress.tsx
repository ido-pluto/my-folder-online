import RemoteDownload, {DownloadStatus} from '../../../../core/share/remote-download/remote-download.ts';
import {Box, Button, Progress} from '@chakra-ui/react';
import {VscDebugContinue, VscDebugPause, VscDebugStop} from 'react-icons/vsc';

export type DownloadProgressProps = { remoteDownload: RemoteDownload };
export default function DownloadProgress({remoteDownload}: DownloadProgressProps) {
    const abort = () => remoteDownload.streamSignal.emit('abort');
    const resume = () => remoteDownload.streamSignal.emit('resume');
    const pause = () => remoteDownload.streamSignal.emit('pause');


    return <Box display="flex" py={2} gap={4}>
        <Box flexGrow={1}>
            {remoteDownload.item.name}
            <Box fontFamily="monospace">
                {remoteDownload.progressText}
            </Box>
            <Progress mt={2} hasStripe value={remoteDownload.transferredBytes} min={0} max={remoteDownload.item.size}/>
        </Box>
        <Box display="flex" alignItems="center" gap={2}>
            {
                remoteDownload.status === DownloadStatus.PAUSED ?
                    <Button onClick={resume} variant="ghost" title="Resume" fontSize={18}>
                        <VscDebugContinue/>
                    </Button> :
                    <Button onClick={pause} variant="ghost" title="Pause" fontSize={18}>
                        <VscDebugPause/>
                    </Button>
            }
            <Button onClick={abort} title="Abort" variant="ghost" colorScheme="red" fontSize={20}>
                <VscDebugStop/>
            </Button>
        </Box>
    </Box>;

}
