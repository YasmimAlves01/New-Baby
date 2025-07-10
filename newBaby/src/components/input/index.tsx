import { View,Text, TextInput, TextInputProps, TextProps } from "react-native";

import {styles} from "./styles"

type Props = TextProps & TextInputProps &{
    label?: string

}

export function Input({label,...rest}: Props){
    return(
        <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput {...rest}  style={styles.input}/>
        </View>
    )
}