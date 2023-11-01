import WebsiteLayout from '../../layouts/website/WebsiteLayout.tsx';
import Login from './Login.tsx';
import ConnectToPeer from './ConnectToPeer.tsx';
import {useParams} from 'react-router-dom';
import {useState} from 'react';

export default function BrowseFiles(){
    const {password: paramPassword} = useParams();
    const [password, setPassword] = useState(paramPassword);

    return <WebsiteLayout>
        {
            password ? <ConnectToPeer passwordState={[password, setPassword]} />:
            <Login updatePassword={setPassword} />
        }
    </WebsiteLayout>;
}
