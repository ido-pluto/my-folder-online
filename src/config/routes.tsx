import {createBrowserRouter,} from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage.tsx';
import BrowseFiles from '../pages/BrowseFiles/BrowseFiles.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>,
    },
    {
        path: '/browse-files/:password?/*',
        element: <BrowseFiles/>,
    },
]);

export default router;
