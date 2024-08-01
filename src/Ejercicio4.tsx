import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export const Ejercicio4 = () => {
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
  
      justifyContent:'space-around',//justificar el contenido
      alignItems: 'center', //aliniar los elementos
  },
  box1:{
      width:100,
      height:100,
      backgroundColor:'purple',
     
    
    
  },
  box2:{
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
  

