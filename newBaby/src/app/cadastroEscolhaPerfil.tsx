import { View, Text, StyleSheet, } from "react-native"
import { ButtonNormal } from "@/components/buttonNormal/buttonNormal"
import { router } from "expo-router"
import {EscolhaPerfil} from "@/components/caixaSelect/index"
import Setinha from "@/components/setaVoltar/index"
import { useState, } from "react"


export default function cadastroEscolhaPerfil(){
    const [perfilSelecionado, setPerfilSelecionado] = useState<string | null>(null);
    function handleNext(){
    if(perfilSelecionado == "Gestação"){
        router.navigate("/cadastroGestacao");
    }
    else if(perfilSelecionado == "Filhos"){
        router.navigate("/cadastroFilhos");
    }
    else{
        alert("Por favor selecione uma opção abaixo");
    }
    }
    return(
       <View style={styles.container}>
           
        <View style={styles.caixinha}> 
            <Setinha/>
        <View style={styles.titulos}>
            <Text style={styles.title}>O que você busca?</Text>
            <Text style={styles.subtitle}>Selecione o  que você busca no app</Text>
        </View>
        </View>

        <View style={styles.checks}>
        <EscolhaPerfil 
        tipo="Quero acompanhar minha gestação" 
        textinho="Ideal para quem esta gravida e deseja acompanhar o desenvolvimento do bebê e o seu próprio.
        Muitas dicas de cuidados, alimentação, mudança do corpo e o que fazer quando a hora chegar" isSelect={perfilSelecionado=="Gestação"} onSelect={() => setPerfilSelecionado("Gestação")}/>
        
        <EscolhaPerfil tipo="Quero acompanhar o desenvolvimento do meu filho(a)" 
        textinho="Ideal para quem ja é papai e mamãe e deseja acompanhar o desenvolvimento, o ensino, e melhorar sua própria rotina. Muitas dicas de cuidado, alimentação, educação e comportamento" isSelect={perfilSelecionado=="Filhos"} onSelect={() => setPerfilSelecionado("Filhos")}/>
        </View>
            
         <Text style={styles.aviso}>** não se preocupe, você poderá alterar isso futuramente. Se você for acompanhar sua gestação ao final dela isso mudara automaticamente</Text>   

        <ButtonNormal title="Proximo" onPress={handleNext}></ButtonNormal>
            


        </View>
    )
}

export const styles = StyleSheet.create({
    caixinha:{
        width:"90%",
        justifyContent:"flex-start",
        gap:20,
        alignContent:"flex-start",
        marginBottom:30
        
    },
    titulos:{
        gap:5,
    },
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        gap:30,
        marginTop: -110

    },
    title:{
        width:"60%",
        fontSize:28,
        fontWeight:500,
    },
    subtitle:{
        fontSize:18,
        fontFamily: 'Lexa-Deca',
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
        marginBottom: 10
    }
})