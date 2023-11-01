import {Box, Heading, Text} from '@chakra-ui/react';
import {LinearGradient} from 'react-text-gradients';

export default function Brief() {
    return <Box maxW={800} textAlign="center">
        <Heading fontSize="6xl">
            <LinearGradient gradient={['to left', '#17acff ,rgb(57 198 196)']}>
                Share your files without server upload
            </LinearGradient>
        </Heading>
        <Text fontSize="2xl" my={4} color="gray.500">
            Share your files <b>peer-to-peer</b> without anything but your <b>browser</b>. Sharing files has never been easier!
        </Text>
    </Box>;
}
