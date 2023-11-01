import VirtualDirectory from '../../../core/share/virtual-fs/virtual-directory.ts';
import {Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useColorMode} from '@chakra-ui/react';
import {FcOpenedFolder} from 'react-icons/fc';
import theme from '../../../config/theme.ts';
import VirtualItem from '../../../core/share/virtual-fs/virtual-item.ts';
import prettyBytes from 'pretty-bytes';
import {useState} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

type ViewTableElementProps = {
    onClick?: (item: VirtualItem) => void,
    onDoubleClick?: (item: VirtualItem) => void
};

export type ViewTableProps = {
    directory: VirtualDirectory,
    elementProps: ViewTableElementProps,
    selection: string[]
};

const MAX_VIEW_ITEMS = 100;
export default function ViewTable({directory, elementProps, selection}: ViewTableProps) {
    const [viewLimit, setViewLimit] = useState(MAX_VIEW_ITEMS);
    const {colorMode} = useColorMode();
    const backGroundSelection = (path: string) => {
        if (!selection.includes(path))
            return '#fff0';
        return colorMode === 'dark' ? theme.colors.whiteAlpha[50] : theme.colors.blackAlpha[50];
    };

    const getMoreItems = () => {
        setViewLimit(prev => prev + MAX_VIEW_ITEMS);
    };

    return directory.files.length ?
        <InfiniteScroll
            dataLength={viewLimit}
            next={getMoreItems}
            hasMore={viewLimit < directory.files.length}
            loader={<></>}
        >
            <TableContainer border="1px" borderColor="var(--chakra-colors-chakra-border-color)" borderBottom="none" m={5}>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Size</Th>
                            <Th>Type</Th>
                            <Th>Modified</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {directory.files.slice(0, viewLimit).map(child =>
                            <Tr
                                key={child.path}
                                onClick={() => elementProps.onClick?.(child)}
                                onDoubleClick={() => elementProps.onDoubleClick?.(child)}
                                backgroundColor={backGroundSelection(child.path)}
                            >
                                <Td>{child.name}</Td>
                                <Td>{prettyBytes(child.size)}</Td>
                                <Td>{child instanceof VirtualDirectory ? <FolderIcon/> : child.type}</Td>
                                <Td>{child.lastModified.toLocaleTimeString()}</Td>
                            </Tr>)
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </InfiniteScroll>:
        <Box p={5} m="auto">Empty directory</Box>;
}


function FolderIcon() {
    return <Box fontSize={18}>
        <FcOpenedFolder/>
    </Box>;
}
