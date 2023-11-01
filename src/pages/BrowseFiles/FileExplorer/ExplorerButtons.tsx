import {Box, Button, FormControl, Input} from '@chakra-ui/react';
import {AiOutlineArrowUp, AiOutlineSearch} from 'react-icons/ai';
import {BsCloudDownload} from 'react-icons/bs';
import {KeyboardEvent, useState} from 'react';
import VirtualDirectory from '../../../core/share/virtual-fs/virtual-directory.ts';

export type ExplorerButtonsProps = {activeDirectory: VirtualDirectory, onDownload: () => void, onSearch: (search: string) => void, onUpDirectory: () => void};
export default function ExplorerButtons({activeDirectory, onDownload, onSearch, onUpDirectory}: ExplorerButtonsProps) {
    const [search, setSearch] = useState('');
    const onSearchClick = () => {
        onSearch(search);
    }
    const onSearchKeyDown = (e: KeyboardEvent) => {
        if(e.key === 'Enter')
            onSearchClick();
    }

    return <Box m={5} border="1px" borderColor="var(--chakra-colors-chakra-border-color)" display="flex" flexWrap="wrap" justifyContent="space-between">
        <Box display="flex" gap={4} p={2}>
            <Button fontSize={20} title="Upper directory" onClick={onUpDirectory}>
                <AiOutlineArrowUp/>
            </Button>
            <Button fontSize={20} title="Download" onClick={onDownload}>
                <BsCloudDownload/>
            </Button>
        </Box>
        <Box display="flex" alignItems="center" p={2}>
            {activeDirectory.files.length.toLocaleString()} items
        </Box>
        <Box>
            <FormControl display="flex" gap={4} p={2}>
                <Input placeholder="Search" onChange={e => setSearch(e.target.value)} onKeyDown={onSearchKeyDown}/>
                <Button fontSize={25}>
                    <AiOutlineSearch/>
                </Button>
            </FormControl>
        </Box>
    </Box>;
}
