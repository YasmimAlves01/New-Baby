import { View, Text, StyleSheet} from "react-native"
import { ButtonNormal } from "@/components/buttonNormal/buttonNormal"
import { router } from "expo-router"
import {Input} from "@/components/input/index"

import FontAwesome from '@expo/vector-icons/FontAwesome';

  function handleNext(){
        router.navigate("/cadastro2")
    }

export default function Cadastro(){
    return(
        <View style={styles.container}>
           
        <View style={styles.caixinha}> 
            <FontAwesome name="chevron-left" size={35} color="#00A7A7" onPress={() => router.back()}/>
        <View style={styles.titulos}>
            <Text style={styles.title}>Seja bem-vindo</Text>
            <Text style={styles.subtitle}>Vamos começar o seu cadastro</Text>
        </View>
        </View>

        <View style={styles.inputs}>
        <Input label="Nome" placeholder="Digite seu nome"/>
        <Input label="E-mail" placeholder="Digite seu e-mail"/>
        <Input label="Crie sua senha" placeholder="Digite sua senha" secureTextEntry={true} />
        <Input label="Repita sua senha" placeholder="Repita sua senha" secureTextEntry={true} />
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
        gap:50,
        marginTop: -40

    },
    title:{
        fontSize:28,
        fontWeight:500,
    },
    subtitle:{
        fontSize:18,
        fontWeight:400,
    },
    inputs:{
        width:"100%",
        justifyContent:"center",
        alignContent:"center",
        alignSelf:"center",
        gap:20,
        alignItems:"center",
        marginBottom:30
    }

})