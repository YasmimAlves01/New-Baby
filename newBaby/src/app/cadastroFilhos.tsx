import DropDownPicker from 'react-native-dropdown-picker';
import { View, Text, StyleSheet} from "react-native"
import React, { useState } from 'react';
import { ButtonNormal } from "@/components/buttonNormal/buttonNormal"
import { router } from "expo-router"
import { Picker } from '@react-native-picker/picker';
import Setinha from "@/components/setaVoltar/index"


import FontAwesome from '@expo/vector-icons/FontAwesome';

  function handleNext(){
        router.navigate("/escolhaConteudoFilhos")
    }



export default function SelectCadastro(){


    return(

        <View style={styles.container}>

        <View style={styles.caixinha}> 
            <Setinha/>
            <View style={styles.titulos}>
            <Text style={styles.title}>Meu filho(a) tem</Text>
            <Text style={styles.subtitle}>Selecione de quantos meses/anos seu filho(a) tem </Text>
        </View>
        </View>

        <View style={styles.selectd}>

<Picker style={styles.options}>
  <Picker.Item label="6 meses" value="mes6" />
  <Picker.Item label="7 meses" value="mes7" />
  <Picker.Item label="8 meses" value="mes8" />
  <Picker.Item label="9 meses" value="mes9" />
  <Picker.Item label="10 meses" value="mes10" />
  <Picker.Item label="11 meses" value="mes11" />
  <Picker.Item label="12 meses (1 ano)" value="ano1" />
  <Picker.Item label="2 anos" value="ano2" />
  <Picker.Item label="3 anos" value="ano3" />
  <Picker.Item label="4 anos" value="ano4" />
  <Picker.Item label="5 anos" value="ano5" />
  <Picker.Item label="6 anos" value="ano6" />
  <Picker.Item label="7 anos" value="ano7" />
  <Picker.Item label="8 anos" value="ano8" />
  <Picker.Item label="9 anos" value="ano9" />
  <Picker.Item label="10 anos" value="ano10" />
  <Picker.Item label="11 anos" value="ano11" />
  <Picker.Item label="12 anos" value="ano12" />
  <Picker.Item label="13 anos" value="ano13" />
  <Picker.Item label="14 anos" value="ano14" />
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