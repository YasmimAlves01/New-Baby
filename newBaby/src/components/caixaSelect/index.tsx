import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextProps } from 'react-native';

type Props = TextProps &{
    textinho: string,
    tipo: string

}

export function EscolhaPerfil({textinho,tipo, ...rest}: Props) {
  const [checked, setChecked] = useState(false);


  return (
    <View style={styles.caixa}>
        <View style={styles.TitleRow}>
      <TouchableOpacity
        onPress={() => setChecked(!checked)}
        style={{
          height: 24,
          width: 24,
          borderRadius: 4,
          borderWidth: 2,
          borderColor: '#08BAB1',
          backgroundColor: checked ? '#08BAB1' : '#FFF',
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 5
        }}>
        {checked && <Text style={{ color: 'white' }}>✓</Text>}
      </TouchableOpacity>
      <Text style={styles.title}>{tipo}</Text>
</View>
      <Text>{textinho}</Text>
    </View>
  );
}

export const styles = StyleSheet.create({

caixa:{
    width:"90%",
    flexDirection: 'column', 
    alignItems: 'flex-start', 
    padding: 10,
    gap:10,
    borderColor: "#079B94" ,
    borderWidth: 2,
    borderRadius:10,
},
TitleRow:{
    width:"100%",
    flexDirection:"row",
    alignItems:'flex-start'
},
title:{
    fontSize:17,
    fontWeight:'600',
    color:'#079B94',
    fontFamily: 'Lexa-Deca',

}


})