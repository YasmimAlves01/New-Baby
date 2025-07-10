import { TouchableOpacity,TouchableOpacityProps, Text} from "react-native";
import { styles } from "./styles";

import FontAwesome from '@expo/vector-icons/FontAwesome';



type Props = TouchableOpacityProps &{
    title: string

}

export function ButtonNormal({title, ...rest}: Props) {
  return (
    <TouchableOpacity activeOpacity={0.3} style={styles.button}
      {...rest}>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
