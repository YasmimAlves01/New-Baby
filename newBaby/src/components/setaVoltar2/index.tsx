import { View, StyleSheet} from "react-native"
import { router } from "expo-router"
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function Setinha(){
    return(
 
    <View style={styles.voltar}>

        <FontAwesome name="chevron-left" size={35} color="#ffffffff" onPress={() => router.back()}/>

    </View>
        
    )
}


export const styles = StyleSheet.create({

voltar:{
    display:"flex",
    justifyContent:"flex-start",
    marginTop: 70,
    marginLeft: 20,
}

})