import {View, Text, StyleSheet, Alert, Image, ImageSourcePropType } from "react-native"
import { useState } from "react"
import { router } from "expo-router"
import {ButtonGoogle} from "@/components/buttonGoogle/buttonGoogle"
import { ButtonNormal } from "@/components/buttonNormal/buttonNormal"
import {Input} from "@/components/input/index"



export default function Index(){

    const [nomePessoa,setNomePessoa] = useState<string>()
    //const [nomePessoa,setNamePessoa] = useState("") -> ja identifica que é uma string


    function handleNext(){
        router.navigate("/home")
    }

    function handleMessage(){
        const name = "Nova Mamãe"
        Alert.alert(`Olá ${name}`)
    }

   /* function onChangeText(text:string){
        console.log(text)
        setNamePessoa(text) 
    }*/

    return(
    <View style={styles.conatiner}>

        <Image source={require('../image/Babylogo.png')}/>
        <Text style={styles.title}>Bem-Vindo</Text>
        <Text style={styles.subtitle}>Escolha a maneira que deseja acessar</Text>
        {/* 
        {/* <Text style={styles.title}>Bem-vinda {nomePessoa}</Text>


        <Input onChangeText={setNomePessoa}/>
        <Input onChangeText={(text) => setNamePessoa(text)}/> */}

        <ButtonGoogle title="Entrar com o Google" image={require('../image/icon.png')} onPress={handleMessage}/>

        <ButtonNormal title="Outras formas"  onPress={handleNext}/>
    </View>
    )
}

const styles = StyleSheet.create({

    conatiner:{
        flex: 1,
        justifyContent:"center", 
        backgroundColor:"#FFF",
        gap: 30,
        alignItems:"center",
        
    },

    title:{
        color:"#11838C",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    },
    subtitle:{
        color:"#11838C",
        fontSize:18,
        fontWeight:400,
    },

})
