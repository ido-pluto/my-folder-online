import {ChangeEvent, useEffect, useRef} from 'react';
import {Box, Button, Heading, Input} from '@chakra-ui/react';
import useArrayState from 'use-array-state';
import ShareFiles from './ShareFiles/ShareFiles.tsx';

export default function GroupShare() {
    const [filesCollections, setFilesCollections] = useArrayState<File[]>();
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (!inputRef.current) return;

        inputRef.current.setAttribute('webkitdirectory', 'true');
        inputRef.current.setAttribute('directory', 'true');
    });

    const newShare = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files?.length) return;

        setFilesCollections.push([...files]);
    }

    const stopShare = (files:File[]) => {
        const index = filesCollections.findIndex(filesCollection => filesCollection === files);
        setFilesCollections.remove(index);
    }

    return <Box p={10} m={5} width="50%" minWidth={400} maxWidth="100%" borderLeft="1px" borderRight="1px" borderColor="var(--chakra-colors-chakra-border-color)">
        <Input type="file" ref={inputRef} onChange={newShare} multiple display="none"/>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={5}>
            <Heading>My shares</Heading>
            <Button id="share-files" colorScheme="messenger" onClick={() => inputRef.current?.click()}>New share</Button>
        </Box>

        <Box display="flex" flexDirection="column" gap={5} mt={50}>
            {filesCollections.map((files) =>
                <ShareFiles key={fileListToId(files)} files={files} onStopShare={stopShare}/>
            )}
        </Box>
    </Box>;
}


function fileListToId(files: File[]) {
    return files.map(file => file.webkitRelativePath).join('-');
}
