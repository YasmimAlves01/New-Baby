import { View, Text, StyleSheet} from "react-native"
import { ButtonNormal } from "@/components/buttonNormal/buttonNormal"
import { router } from "expo-router"
import {Input} from "@/components/input/index"
import {EscolhaPerfil} from "@/components/caixaSelect/index"

import FontAwesome from '@expo/vector-icons/FontAwesome';

  function handleNext(){
        router.navigate("/cadastro2")
    }

export default function SelectCadastro(){
    return(

        <View style={styles.container}>
           
        <View style={styles.caixinha}> 
            <FontAwesome name="chevron-left" size={35} color="#00A7A7" onPress={() => router.back()}/>
        <View style={styles.titulos}>
            <Text style={styles.title}>De quantos semanas estou</Text>
            <Text style={styles.subtitle}>Selecione de quantos semanas você está</Text>
        </View>
        </View>


        <ButtonNormal title="Proximo" onPress={handleNext}/>

        </View>
    )
}

export const styles = StyleSheet.create({
    caixinha:{
        width:"90%",
        justifyContent:"flex-start",
        gap:20,
        alignContent:"flex-start",  
    },
    titulos:{
        gap:5,
    },
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        gap:30,
        marginTop: -50

    },
    title:{
        width:"60%",
        fontSize:28,
        fontWeight:500,
    },
    subtitle:{
        fontSize:18,
        fontWeight:400,
    },
})