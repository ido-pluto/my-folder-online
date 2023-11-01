import {BSON, Document} from 'bson';

export default function deserializeBSON(data: Uint8Array) {
    const json =  BSON.deserialize(data);
    fixBinaryDeserializeJSON(json);

    return json;
}

function fixBinaryDeserializeJSON(doc: Document){
    for(const key in doc){
        const value = doc[key];
        if(!value || typeof value !== 'object') continue;

        if(value.buffer instanceof Uint8Array){
            doc[key] = value.buffer;
        } else {
            fixBinaryDeserializeJSON(value);
        }
    }
}
