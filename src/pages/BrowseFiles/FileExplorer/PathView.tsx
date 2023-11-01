import VirtualDirectory from '../../../core/share/virtual-fs/virtual-directory.ts';
import {Box, Button} from '@chakra-ui/react';
import {useEffect, useState} from 'react';
import {ChevronRightIcon} from '@chakra-ui/icons';

export type PathViewProps = { directory: VirtualDirectory, onDirectoryClick: (directory: VirtualDirectory) => void };
export default function PathView({directory, onDirectoryClick}: PathViewProps) {
    const [allDirectories, setAllDirectories] = useState<VirtualDirectory[]>([]);

    useEffect(() => {
        const directories: VirtualDirectory[] = [];
        let currentDirectory = directory;

        while (currentDirectory) {
            directories.unshift(currentDirectory);
            currentDirectory = currentDirectory.parent!;
        }

        setAllDirectories(directories);

    }, [directory]);

    return <Box m={5} border="1px" borderColor="var(--chakra-colors-chakra-border-color)" display="flex" flexWrap="wrap">
        {allDirectories.map((directory, index) =>
            <Box key={directory.path} display="flex" alignItems="center">
                <Button variant="link" onClick={() => onDirectoryClick(directory)} py={2} mx={3}>
                    {directory.name}
                </Button>
                {
                    index !== allDirectories.length - 1 ?
                        <ChevronRightIcon/> : ''
                }
            </Box>
        )}
    </Box>;
}
