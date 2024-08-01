import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Ejercicio3 = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.box1}></Text>
    <Text style={styles.box2}></Text>
    <Text style={styles.box3}></Text>
  </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:50,
    
        flexDirection:'row',//direcionar los elmentos
        justifyContent:'space-evenly',//justificar el contenido
        alignItems: 'stretch', //aliniar los elementos
    },
    box1:{
        width:100,
        height:100,
        backgroundColor:'purple',
       // justifyContent:'flex-start',//justificar el contenido
       
      
      
    },
    box2:{
         flexDirection:'row-reverse',
      width:100,
      height:100,
      backgroundColor:'orange',
     
    },
    box3:{
      width:100,
      height:100,
      backgroundColor:'green',
     
        
    },
    
    
    
    
    });
    