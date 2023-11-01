import WebsiteLayout from '../../layouts/website/WebsiteLayout.tsx';
import Brief from './Brief.tsx';
import GroupShare from './GroupShare.tsx';
import {Box} from '@chakra-ui/react';

export default function HomePage() {
    return <WebsiteLayout>
        <Box display="flex" flexWrap="wrap" justifyContent="space-around" mt={-10} alignItems="center" height="100%">
            <Brief/>
            <GroupShare/>
        </Box>
    </WebsiteLayout>;
}
