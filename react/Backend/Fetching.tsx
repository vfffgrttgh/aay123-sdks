import { db } from "./Database";

export function fetchData(type: any) {
    if(type === "JSON" || type === "json") {
        return db.json();
    } else if(type === "XML" || type === "xml") {
        return db.xml();
    }
}
