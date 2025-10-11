import { View, Text, StyleSheet} from "react-native"
import React, { useState } from 'react';
import { ButtonNormal } from "@/components/buttonNormal/buttonNormal"
import { router } from "expo-router"
import { Picker } from '@react-native-picker/picker';
import {CheckPost} from "@/components/checkPost/index";
import Setinha from "@/components/setaVoltar/index";


import FontAwesome from '@expo/vector-icons/FontAwesome';

  function handleNext(){
        router.navigate("/")
    }


export default function SelectTypes(){


    return(

        <View style={styles.container}>

        <View style={styles.caixinha}> 
            <Setinha/>
        <View style={styles.titulos}>
            <Text style={styles.title}>Acompanhe</Text>
            <Text style={styles.subtitle}>Que tipo de post você deseja ver</Text>
        </View>
        </View>

        <View style={styles.RowCheckd}>
        <CheckPost textinho="Educação"></CheckPost>
        <CheckPost textinho="Desenvolvimento Infantil"></CheckPost>
        <CheckPost textinho="Dicas amamentação"></CheckPost>
        <CheckPost textinho="Dicas de cuidados"></CheckPost>
        <CheckPost textinho="Adolescência"></CheckPost>
        <CheckPost textinho="Roupas de bebê"></CheckPost>
        <CheckPost textinho="Maternida"></CheckPost>
        <CheckPost textinho="Dicas Pediatricas"></CheckPost>
        <CheckPost textinho="Exercicios Fisicos"></CheckPost>
        <CheckPost textinho="Comunicação com os Filhos"></CheckPost>
        <CheckPost textinho="Dicas Financeiras"></CheckPost>
        <CheckPost textinho="Introdução Alimentar"></CheckPost>
        <CheckPost textinho="Desenvolvimento emocional"></CheckPost>
        <CheckPost textinho="Autocuidado"></CheckPost>
        <CheckPost textinho="Dicas de segurança domestica e segurança"></CheckPost>
        <CheckPost textinho="Atividades e lazer"></CheckPost>
        <CheckPost textinho="Vinculo mamãe e bebê"></CheckPost>
        <CheckPost textinho="Saude mental"></CheckPost>
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

    },
    title:{
        width:"60%",
        fontSize:28,
        fontWeight:500,
        fontFamily: 'Lexa-Deca',

    },
    subtitle:{
        fontSize:18,
        fontWeight:400,
        fontFamily: 'Lexa-Deca',
    },
    RowCheckd: {
        width: "90%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        gap: 5,
        marginTop: 15,
        marginBottom: "12%",
    },


})