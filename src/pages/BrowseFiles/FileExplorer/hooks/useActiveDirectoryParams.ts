import VirtualDirectory from '../../../../core/share/virtual-fs/virtual-directory.ts';
import {useNavigate, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import VirtualFile from '../../../../core/share/virtual-fs/virtual-file.ts';

const SEARCH_CHAR_START = ":"

export default function useActiveDirectoryParams(rootDirectory: VirtualDirectory) {
    const [activeDirectory, setActiveDirectory] = useState<VirtualDirectory>(rootDirectory);
    const {password, '*': path = '/'} = useParams();
    const navigation = useNavigate();

    useEffect(() => {
        setActiveDirectory(parsePath(path, rootDirectory));
    }, [path, rootDirectory]);

    const setPath = (directory: VirtualDirectory) => {
        navigation(`/browse-files/${password}/${stringifyPath(directory)}`);
    }

    return [activeDirectory, setPath] as const;
}


function parsePath(path: string, root: VirtualDirectory) {
    const pathParts = path.split('/').filter(Boolean);

    let currentDirectory = root;
    for(const part of pathParts){
        if(part.startsWith(SEARCH_CHAR_START)){
            currentDirectory = currentDirectory.search(part.slice(SEARCH_CHAR_START.length));
        } else {
            currentDirectory = currentDirectory.files.find(file => file.name === part && !(file instanceof VirtualFile)) as VirtualDirectory;
        }
    }

    return currentDirectory;
}

function stringifyPath(directory: VirtualDirectory) {
    const pathParts = [];
    let currentDirectory: VirtualDirectory | undefined = directory;

    do {
        if(currentDirectory.searchText){
            pathParts.unshift(SEARCH_CHAR_START + currentDirectory.searchText);
        } else {
            pathParts.unshift(currentDirectory.isRoot ? '': currentDirectory.name);
        }

        currentDirectory = currentDirectory.parent;
    } while(currentDirectory?.parent)

    return pathParts.join('/');
}
