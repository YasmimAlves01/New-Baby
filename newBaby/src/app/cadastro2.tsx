import { View, Text, StyleSheet} from "react-native"
import { ButtonNormal } from "@/components/buttonNormal/buttonNormal"
import { router } from "expo-router"
import {EscolhaPerfil} from "@/components/caixaSelect/index"

import FontAwesome from '@expo/vector-icons/FontAwesome';

  function handleNext(){
        router.navigate("/cadastro3")
    }

export default function CadastroDois(){
    return(
       <View style={styles.container}>
           
        <View style={styles.caixinha}> 
            <FontAwesome name="chevron-left" size={35} color="#00A7A7" onPress={() => router.back()}/>
        <View style={styles.titulos}>
            <Text style={styles.title}>O que você busca?</Text>
            <Text style={styles.subtitle}>Selecione o  que você busca no app</Text>
        </View>
        </View>

        <View style={styles.checks}>
        <EscolhaPerfil 
        tipo="Quero acompanhar minha gestação" 
        textinho="Ideal para quem esta gravida e deseja acompanhar o desenvolvimento do bebê e o seu próprio.
        Muitas dicas de cuidados, alimentação, mudança do corpo e o que fazer quando a hora chegar"/>
        
        <EscolhaPerfil tipo="Quero acompanhar o desenvolvimento do meu filho(a)" 
        textinho="Ideal para quem ja é papai e mamãe e deseja acompanhar o desenvolvimento, o ensino, e melhorar sua própria rotina. Muitas dicas de cuidado, alimentação, educação e comportamento"/>
        </View>
            
         <Text style={styles.aviso}>** não se preocupe, você poderá alterar isso futuramente. Se você for acompanhar sua gestação ao final dela isso mudara automaticamente</Text>   

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
    checks:{
        width:"100%",
        gap:20,
        alignSelf:'center',
        alignItems:'center'
    },
    aviso:{
        width:'90%',
        color:'#727272',
        fontSize: 12,
        marginBottom: 50
    }
})