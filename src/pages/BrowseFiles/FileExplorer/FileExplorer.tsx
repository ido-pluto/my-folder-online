import {useMemo, useState} from 'react';
import ViewTable from './ViewTable.tsx';
import RemoteDirectory from '../../../core/share/remote-directory.ts';
import VirtualItem from '../../../core/share/virtual-fs/virtual-item.ts';
import VirtualDirectory from '../../../core/share/virtual-fs/virtual-directory.ts';
import {Box, Heading, useToast} from '@chakra-ui/react';
import ExplorerButtons from './ExplorerButtons.tsx';
import PathView from './PathView.tsx';
import RemoteDownloadManager from '../../../core/remote-download-manager.ts';
import DownloadView from './DownloadView/DownloadView.tsx';
import useActiveDirectoryParams from './hooks/useActiveDirectoryParams.ts';

export type FileExplorerProps = { directory: RemoteDirectory };
export default function FileExplorer({directory}: FileExplorerProps) {
    const downloadManager = useMemo(() => new RemoteDownloadManager(directory), [directory]);
    const [activeDirectory, setActiveDirectory] = useActiveDirectoryParams(directory.fs!.files);
    const [selection, setSelection] = useState<string[]>([]);
    const toast = useToast();

    const onItemClick = (item: VirtualItem) => {
        setSelection(lastSelection => {
            if (lastSelection.includes(item.path))
                return lastSelection.filter(path => path !== item.path);

            return [...lastSelection, item.path];
        });
    };

    const onItemDoubleClick = (item: VirtualItem) => {
        if (!(item instanceof VirtualDirectory))
            return;

        setActiveDirectory(item);
        setSelection([]);
    };

    const onUpDirectory = () => {
        setActiveDirectory(activeDirectory.parent || activeDirectory);
        setSelection([]);
    }

    const downloadFiles = async () => {
        try {
            await downloadManager.downloadSelectedFiles(selection, activeDirectory);
        } catch (error) {
            toast({
                title: 'Can not download',
                description: (error as Error).message,
                status: 'error',
            });
        }
    }

    const searchFiles = (query: string) => {
        if(!query && activeDirectory.searchText){
            setActiveDirectory(activeDirectory.parent || directory.fs!.files!);
            return;
        }

        query = query.toLowerCase();
        const resultDirectory = activeDirectory.search(query);
        setActiveDirectory(resultDirectory);
    }

    return <Box>
        <Heading m={5}>{activeDirectory.name || 'Root'}</Heading>
        <ExplorerButtons activeDirectory={activeDirectory} onUpDirectory={onUpDirectory} onDownload={downloadFiles} onSearch={searchFiles}/>
        <PathView directory={activeDirectory} onDirectoryClick={setActiveDirectory}/>
        <ViewTable directory={activeDirectory} selection={selection} elementProps={{onClick: onItemClick, onDoubleClick: onItemDoubleClick}}/>
        <DownloadView downloadManager={downloadManager}/>
    </Box>;
}
