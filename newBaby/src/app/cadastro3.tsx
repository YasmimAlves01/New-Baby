import DropDownPicker from 'react-native-dropdown-picker';
import { View, Text, StyleSheet} from "react-native"
import React, { useState } from 'react';
import { ButtonNormal } from "@/components/buttonNormal/buttonNormal"
import { router } from "expo-router"
import { Picker } from '@react-native-picker/picker';

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

        <View style={{ padding: 20 }}>
      <Text>Selecione uma opção:</Text>

      <Picker
        style={{ height: 50, width: 200 }}
      >
        <Picker.Item label="Opção 1" value="opcao1" />
        <Picker.Item label="Opção 2" value="opcao2" />
        <Picker.Item label="Opção 3" value="opcao3" />
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
    },
    subtitle:{
        fontSize:18,
        fontWeight:400,
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