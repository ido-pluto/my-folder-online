import {Button, useToast} from '@chakra-ui/react';
import {CopyIcon} from '@chakra-ui/icons';

export type CopyFastLink = { getToken: () => string };
export default function CopyFastLink({getToken}: CopyFastLink) {
    const toast = useToast();

    const copyLink = async () => {
        const fastLink = `${window.location.origin}/browse-files/${getToken()}`;

        try {
            await navigator.clipboard.writeText(fastLink);
            toast({
                title: 'Copied fast link',
                status: 'success',
                isClosable: true
            });
        } catch (error) {
            toast({
                title: 'Can not copy fast link',
                description: (error as Error).message,
                status: 'error',
                isClosable: true
            });
        }
    };

    return <Button onClick={copyLink} colorScheme="green" variant="ghost" title="Copy Link">
        <CopyIcon fontSize={18} />
    </Button>;
}
