import { View, Text, StyleSheet, Image, ImageSourcePropType, TouchableOpacity } from "react-native"
import { ButtonNormal } from "@/components/buttonNormal/buttonNormal"
import {ButtonGoogle} from "@/components/buttonGoogle/buttonGoogle"
import { router } from "expo-router"
import {Input} from "@/components/input/index"
import {Marcado} from "@/components/checkbox/index"

import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function Home(){
    return(
        <View style={styles.container}>
           
        <View style={styles.caixinha}> 
            <FontAwesome name="chevron-left" size={30} color="#00A7A7" onPress={() => router.back()}/>
        <View style={styles.titulos}>
            <Text style={styles.title}>Acessar</Text>
            <Text style={styles.subtitle}>Faça login na sua conta</Text>
        </View>
        </View>
        <Input label="E-mail" placeholder="Digite seu e-mail"/>
        <Input label="Senha" placeholder="Digite sua senha" secureTextEntry={true} />
       
        <Marcado textinho="Lembre-se de mim"/>
            
            <ButtonNormal title="Entrar" />
            <ButtonGoogle title="Cadastre-se" image={undefined} />

            <View style={styles.outras}>
                <View style={styles.textinhos}>
                <Text style={styles.texto}>____________________</Text>
                <Text style={styles.texto}>ou</Text>
                <Text style={styles.texto}>____________________</Text>
                </View>
                <Text style={styles.texto}>acesse com</Text>
            </View>
            

            <View style={styles.acesso}>

                    <TouchableOpacity activeOpacity={0.3} style={styles.button}>
                        <Image source={require('../image/icon.png')} style={styles.img}/>
                    </TouchableOpacity>

                     <TouchableOpacity activeOpacity={0.3} style={styles.button}>
                        <Image source={require('../image/g10.png')} style={styles.img}/>
                    </TouchableOpacity>

            </View>


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
        gap:32,

    },
    title:{
        fontSize:28,
        fontWeight:500,
    },
    subtitle:{
        fontSize:18,
        fontWeight:400,
    },
    outras:{
        width:"100%",
        flexDirection:"column",
        justifyContent:"center",
        alignContent:"center",
        alignSelf:"center",
        textAlign:"center",
        gap:10,
        
    },
    textinhos:{
        flexDirection:"row",
        justifyContent:"center",
        alignContent:"center",
        alignSelf:"center",
        gap:10
    },
    texto:{
        color:"#C5C3C0",
        textAlign:"center"
    },
    acesso:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        gap:40
    },
    button:{
        backgroundColor:"#FFF",
        borderColor: "#08BAB1" ,
        borderWidth: 4,
        borderRadius:10,
        padding:14
    },
    img:{
        width:35,
        height:35
    }

})