import WebsiteLayout from '../../layouts/website/WebsiteLayout.tsx';
import Brief from './Brief.tsx';
import GroupShare from './GroupShare.tsx';

export default function HomePage() {
    return <WebsiteLayout>
        <Brief />
        <GroupShare />
    </WebsiteLayout>;
}
