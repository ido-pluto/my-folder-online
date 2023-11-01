import { ChakraProvider } from '@chakra-ui/react'
import {RouterProvider} from 'react-router-dom';
import router from './config/routes.tsx';
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App
