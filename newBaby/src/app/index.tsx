import {View, Text, StyleSheet, Alert, Image, ImageSourcePropType,ActivityIndicator  } from "react-native"
import { useState,useEffect } from "react"
import { router } from "expo-router"
import {ButtonGoogle} from "@/components/buttonGoogle/buttonGoogle"
import { ButtonNormal } from "@/components/buttonNormal/buttonNormal"
import {Input} from "@/components/input/index"
import * as Font from 'expo-font'


export default function Index(){

    const [nomePessoa,setNomePessoa] = useState<string>()
    //const [nomePessoa,setNamePessoa] = useState("") -> ja identifica que é uma string


      const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Lexa-Deca': require('../../assets/fonts/LexendDeca-VariableFont_wght.ttf'),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
        <Text>New Baby</Text>
      </View>
    );



   /* function onChangeText(text:string){
        console.log(text)
        setNamePessoa(text) 
    }*/
  }
  
    function handleNext(){
        router.navigate("/login")
    }

    function handleMessage(){
        const name = "Nova Mamãe"
        Alert.alert(`Olá ${name}`)
    }
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
        fontFamily: 'Lexa-Deca',
    },
    subtitle:{
        color:"#11838C",
        fontSize:18,
        fontWeight:400,
        fontFamily: 'Lexa-Deca',

    },

})
