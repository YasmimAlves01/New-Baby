import DropDownPicker from 'react-native-dropdown-picker';
import { View, Text, StyleSheet} from "react-native"
import React, { useState } from 'react';
import { ButtonNormal } from "@/components/buttonNormal/buttonNormal"
import { router } from "expo-router"
import { Picker } from '@react-native-picker/picker';

import FontAwesome from '@expo/vector-icons/FontAwesome';

  function handleNext(){
        router.navigate("/cadastro4")
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

        <View style={styles.selectd}>

<Picker style={styles.options}>
  <Picker.Item label="3 semanas" value="semana3"/>
  <Picker.Item label="4 semanas" value="semana4" />
  <Picker.Item label="5 semanas" value="semana5" />
  <Picker.Item label="6 semanas" value="semana6" />
  <Picker.Item label="7 semanas" value="semana7" />
  <Picker.Item label="8 semanas" value="semana8" />
  <Picker.Item label="9 semanas" value="semana9" />
  <Picker.Item label="10 semanas" value="semana10" />
  <Picker.Item label="11 semanas" value="semana11" />
  <Picker.Item label="12 semanas" value="semana12" />
  <Picker.Item label="13 semanas" value="semana13" />
  <Picker.Item label="14 semanas" value="semana14" />
  <Picker.Item label="15 semanas" value="semana15" />
  <Picker.Item label="16 semanas" value="semana16" />
  <Picker.Item label="17 semanas" value="semana17" />
  <Picker.Item label="18 semanas" value="semana18" />
  <Picker.Item label="19 semanas" value="semana19" />
  <Picker.Item label="20 semanas" value="semana20" />
  <Picker.Item label="21 semanas" value="semana21" />
  <Picker.Item label="22 semanas" value="semana22" />
  <Picker.Item label="23 semanas" value="semana23" />
  <Picker.Item label="24 semanas" value="semana24" />
  <Picker.Item label="25 semanas" value="semana25" />
  <Picker.Item label="26 semanas" value="semana26" />
  <Picker.Item label="27 semanas" value="semana27" />
  <Picker.Item label="28 semanas" value="semana28" />
  <Picker.Item label="29 semanas" value="semana29" />
  <Picker.Item label="30 semanas" value="semana30" />
  <Picker.Item label="31 semanas" value="semana31" />
  <Picker.Item label="32 semanas" value="semana32" />
  <Picker.Item label="33 semanas" value="semana33" />
  <Picker.Item label="34 semanas" value="semana34" />
  <Picker.Item label="35 semanas" value="semana35" />
  <Picker.Item label="36 semanas" value="semana36" />
  <Picker.Item label="37 semanas" value="semana37" />
  <Picker.Item label="38 semanas" value="semana38" />
  <Picker.Item label="39 semanas" value="semana39" />
  <Picker.Item label="40 semanas" value="semana40" />
  <Picker.Item label="41 semanas" value="semana41" />
  <Picker.Item label="42 semanas" value="semana42" />
</Picker>

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
        fontFamily: 'Lexa-Deca',

    },
    subtitle:{
        fontSize:18,
        fontWeight:400,
        fontFamily: 'Lexa-Deca',

    },
    selectd:{
        width:"95%",
        paddingBottom: 400,

    },
    options:{
        height:60,
        width: "95%",
        padding:5,
        borderRadius:5,
        fontSize:15,
        fontFamily: 'Lexa-Deca',
        backgroundColor:"#E7F4F5",
        borderWidth:1,
        borderColor:"#C5C3C0",
        overflow: "hidden",
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        alignSelf:"center",
    },
})



{/* 
    <View style={{ padding: 20, zIndex:99}}>
      <Text style={{ marginBottom: 10 }}>Selecione uma opção:</Text>

      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Selecione..."
        style={{ borderColor: '#aaa' }}
        dropDownContainerStyle={{ borderColor: '#aaa' }}
      />
    </View> */


// const [open, setOpen] = useState(false);
// const [value, setValue] = useState(null);
// const [items, setItems] = useState([
//     { label: 'Opção 1', value: 'opcao1' },
//     { label: 'Opção 2', value: 'opcao2' },
//     { label: 'Opção 3', value: 'opcao3' },
//   ]);


}