import {Button, useToast} from '@chakra-ui/react';
import {CopyIcon} from '@chakra-ui/icons';

export type CopyFastLink = { token: string};
export default function CopyFastLink({token}: CopyFastLink) {
    const toast = useToast();

    const fastLink = `${window.location.origin}/browse-files/${token}`;
    const copyLink = async () => {
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
