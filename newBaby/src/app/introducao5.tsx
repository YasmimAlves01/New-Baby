import { View, Text, StyleSheet, Image, ImageSourcePropType, TouchableOpacity } from "react-native"
import { router } from "expo-router"
import Setinha from "@/components/setaVoltar2/index"
import { ButtonNormal } from "@/components/buttonNormal/buttonNormal";

import FontAwesome from '@expo/vector-icons/FontAwesome';

  function handleNext(){
        router.navigate("/introducao6")
    }

export default function Home(){
    return(
 
    <View style={styles.fundo}>

       <Setinha></Setinha>

        <Image source={require('../image/gravida4.png')} style={styles.image}/>


       <View style={styles.linha}>
        <View style={styles.bolinha}></View>
        <View style={styles.bolinha}></View>
        <View style={styles.bolinha}></View>
        <View style={styles.bolinha}></View>
        <View style={styles.bolinha1}></View>
        <View style={styles.bolinha}></View>
       </View>

   <View style={styles.contentText}>
        <Text style={styles.text}>Organize suas consultas e compromissos, acompanhe sua gestação e sempre tenha na palma da mão a organização do seu dia</Text>
       </View>

      <ButtonNormal title="Proximo" onPress={handleNext}/>

    </View>
        
    )
}

export const styles = StyleSheet.create({

fundo:{
    backgroundColor:"#08BAB1",
    width: "100%",
    height: "70%",
    borderBottomLeftRadius: 180,
    borderBottomRightRadius: 180,

},
contentText:{
    display:"flex",
    width:"100%",
    alignItems:"center"
},
text:{
    textAlign: "center",
    width:"80%",
    fontSize:18,
    fontWeight:500,
    fontFamily: 'Lexa-Deca',
    marginBottom: 25,
},

linha:{
    display:"flex",
    flexDirection:"row",
    gap: 5,
    justifyContent: "center",
    marginBottom: 20,
    marginTop:20
},
bolinha1:{
    width: 15,
    height: 15,
    borderRadius: "100%",
    backgroundColor: "#0F757C"

},
bolinha:{
    width: 15,
    height: 15,
    borderRadius: "100%",
    backgroundColor: "#B6DDE0"

},
image:{
    width:"100%",
    height: "60%",
    display:"flex",
    justifyContent:"center",
    alignSelf:"center",
    marginTop: 70,
    marginBottom: 82,
},

})