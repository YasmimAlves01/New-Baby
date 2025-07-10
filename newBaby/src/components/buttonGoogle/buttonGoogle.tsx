import { TouchableOpacity,TouchableOpacityProps, Text, Image, ImageSourcePropType } from "react-native";
import { styles } from "./styles";

import FontAwesome from '@expo/vector-icons/FontAwesome';



type Props = TouchableOpacityProps &{
    title: string
    image?: ImageSourcePropType;
}

export function ButtonGoogle({title,image, ...rest}: Props) {
  return (
    <TouchableOpacity activeOpacity={0.3} style={styles.button}
      {...rest}>
        <Image source={image}/>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
