import {CirclesWithBar} from 'react-loader-spinner';
import {Box, Heading, theme, useColorMode} from '@chakra-ui/react';
import {TypeAnimation} from 'react-type-animation';

function LoadingAnimation({size}: {size: number}) {
    const {colorMode} = useColorMode();
    const loadingColor = colorMode === 'light' ? theme.colors.blue['400'] : theme.colors.blue['200'];

    return <Box borderRadius={'100%'} boxShadow="2xl" p={size / 30}>
        <CirclesWithBar height={size} width={size} color={loadingColor}/>
    </Box>;
}

export default function Loading() {
    const {colorMode} = useColorMode();

    const loadingBackgroundColor = colorMode === 'light' ? theme.colors.gray['50'] : theme.colors.gray['900'];

    return <Box display="flex" background={loadingBackgroundColor} flexGrow={1} flexDirection="column" justifyContent="center" alignItems="center">
        <Heading size="2xl" mb={40} textShadow={'4px 3px #74797a80'}>
            <TypeAnimation
                sequence={[
                    'Connecting...',
                    1000,
                    'Connecting to peer...',
                    1000,
                    'Connecting peer to peer...',
                    1000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '2em', display: 'inline-block' }}
                speed={25}
            />

        </Heading>
        <LoadingAnimation size={300}/>
    </Box>;
}
