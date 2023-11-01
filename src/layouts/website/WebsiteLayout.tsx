import Header from './Header.tsx';
import {Box} from '@chakra-ui/react';

type WebsiteLayoutProps = Parameters<typeof Box>[0];
export default function WebsiteLayout({children, ...props}: WebsiteLayoutProps) {
    return <Box display="flex" flexDirection="column" h="full" {...props}>
        <Header/>
        <Box flexGrow={1} display="flex" flexDirection="column">
            {children}
        </Box>
    </Box>;
}
