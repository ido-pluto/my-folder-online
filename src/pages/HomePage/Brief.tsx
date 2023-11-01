import {Box, Button, Heading, Text} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import {FiShare2} from 'react-icons/fi';
import {LuFolderSearch} from 'react-icons/lu';
import { LinearGradient } from 'react-text-gradients'

export default function Brief() {
    return <Box mx="auto" mt="15vh" maxW={800} textAlign="center" mb={250}>
        <Heading fontSize="6xl">
            <LinearGradient gradient={['to left', '#17acff ,rgb(57 198 196)']}>
                Share your files without server upload
            </LinearGradient>
        </Heading>
        <Text fontSize="2xl" my={4} color="gray.500">
            Share your files <b>peer-to-peer</b> without anything but your <b>browser</b>. Sharing files has never been easier!
        </Text>

        <Box display="flex" justifyContent="center" gap={5} mt={8}>
            <a href="/#share-files">
                <Button colorScheme="messenger" size="lg" display="flex" gap={2}>
                    Share now
                    <FiShare2/>
                </Button>
            </a>
            <Link to="/browse-files">
                <Button colorScheme="linkedin" size="lg" display="flex" gap={2}>
                    Browse now
                    <LuFolderSearch/>
                </Button>
            </Link>
        </Box>
    </Box>;
}
