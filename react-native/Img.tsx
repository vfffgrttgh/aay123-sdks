import { Image } from "react-native";
import { styles } from "./Styles";

type img = {
    src: string;
    id: number;
}

export default function Img({src, id}: img) {
    return (
        <Image
            source={{ uri: src }}
            key={id}
            style={styles.img}
        />
    )
}
