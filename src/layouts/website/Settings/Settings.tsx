import {Button, IconButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure} from '@chakra-ui/react';
import {SettingsIcon} from '@chakra-ui/icons';
import WServer from './WServer.tsx';
import ICEServer from './ICEServer.tsx';

export default function Settings() {
    const {isOpen, onOpen, onClose} = useDisclosure();

    return <>
        <IconButton aria-label={'Open Settings'} onClick={onOpen} rounded={'100%'} icon={
            <SettingsIcon/>
        }/>

        <Modal onClose={onClose} size="xl" isOpen={isOpen}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Settings</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <WServer/>
                    <ICEServer/>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>;
}
