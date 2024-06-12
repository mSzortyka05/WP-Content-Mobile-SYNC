import React, { useContext } from 'react';
import { Dimensions } from 'react-native';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, Image, TouchableOpacity, Platform } from 'react-native';


interface AddConnectionProps{
    pressEventHandler: any
}

function AddConnection({pressEventHandler}: AddConnectionProps) {

  return (
    <TouchableOpacity
        style={styles.buttonContainer}
        onPress={()=>{
            pressEventHandler()
        }}
    >
        <Text
            style={styles.plusText}
        >
            +
        </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    buttonContainer:{
        width:60,
        height:60,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff',
        borderRadius:100,
        shadowColor: "#000",
        shadowOffset: {
                width: 0,
                height: 0,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
    },
    plusText:{
        color:'#9952D8',
        fontWeight:'400',
        fontSize:40,
        lineHeight:45,
        
    },
})


export default AddConnection;