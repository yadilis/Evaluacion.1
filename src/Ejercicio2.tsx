import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export const Ejercicio2 = () => {
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
    marginTop:50,
        backgroundColor:'#266364',
          //flexDirection:'column-reverse'//direcionar los elmentos
        //justifyContent:'flex-end',//justificar el contenido
        alignItems:'flex-start', //aliniar los elementos
        flexDirection: 'row'
},
box1:{
  //flex:1,
  justifyContent:'flex-start',
  width:100,
  height:100,
  backgroundColor:'purple',
  //position:'relative
  //position:'absolute',
  //bottom:10

  
  
},
box2:{
  flex:1,
  width:100,
  height:100,
  backgroundColor:'orange',
  //top:130
  //position:'relative
  position:'absolute',
  bottom:0,
  right:0
},
box3:{
  width:100,
  height:100,
  backgroundColor:'green',
  //top:130
  //position:'relative
  position:'absolute',
  bottom:0,
  left:0,
  right:0,
  top:0
    
},




});
