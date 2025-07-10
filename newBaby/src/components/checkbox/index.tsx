import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextProps } from 'react-native';

type Props = TextProps &{
    textinho: string

}

export function Marcado({textinho, ...rest}: Props) {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.caixa}>
      <TouchableOpacity
        onPress={() => setChecked(!checked)}
        style={{
          height: 24,
          width: 24,
          borderRadius: 4,
          borderWidth: 2,
          borderColor: '#08BAB1',
          backgroundColor: checked ? '#08BAB1' : 'transparent',
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 5
        }}>
        {checked && <Text style={{ color: 'white' }}>✓</Text>}
      </TouchableOpacity>

      <Text>{textinho}</Text>
    </View>
  );
}

export const styles = StyleSheet.create({

caixa:{
    width:"100%",
     flexDirection: 'row', 
     alignItems: 'flex-start', 
     padding: 20 
},

})