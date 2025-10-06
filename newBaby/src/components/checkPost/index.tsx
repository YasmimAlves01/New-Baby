import { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, TextProps } from 'react-native';

type Props = TextProps & {
  textinho: string;
};

export function CheckPost({ textinho, ...rest }: Props) {
  const [checked, setChecked] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setChecked(!checked)}
      style={[
        styles.botao,
        checked && styles.botaoSelecionado
      ]}
    >
      <Text style={[
        styles.texto,
        checked && styles.textoSelecionado
      ]}>
        {textinho}
      </Text>
    </TouchableOpacity>
  );
}

export const styles = StyleSheet.create({
  botao: {
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#08BAB1',
    backgroundColor: 'transparent',
    alignSelf: 'flex-start',
    marginBottom: 10, 
  },
  botaoSelecionado: {
    backgroundColor: '#08BAB1',
  },
  texto: {
    fontSize: 15,
    fontWeight: '500',
    color: '#141414',
    fontFamily: 'Lexa-Deca',
  },
  textoSelecionado: {
    color: '#fff',
    fontFamily: 'Lexa-Deca',
  },
});