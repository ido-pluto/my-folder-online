import VirtualItem from './virtual-item.ts';

export default class VirtualDirectory extends VirtualItem {
    public searchText: string | null = null;
    constructor(path: string, public parent?: VirtualDirectory, public files: VirtualItem[] = []) {
        super(path);
    }
    override get size() {
        return this.files.reduce((size, file) => size + file.size, 0);
    }

    override get lastModified(): Date {
        const allDates = this.files.map(file => file.lastModified.getTime());
        return new Date(Math.max(...allDates));
    }

    get allNestedItems(): VirtualItem[] {
        const files: VirtualItem[] = [];

        for(const file of this.files){
            if(file instanceof VirtualDirectory){
                files.push(file, ...file.allNestedItems);
            }else{
                files.push(file);
            }
        }

        return files;
    }

    public search(query: string){
        query = query.toLowerCase();
        const foundFiles = this.allNestedItems.filter(file => file.name.toLowerCase().includes(query));
        const resultDirectory = new VirtualDirectory(`${this.path}/Search Results`, this, foundFiles);
        resultDirectory.searchText = query;

        return resultDirectory;
    }
}
