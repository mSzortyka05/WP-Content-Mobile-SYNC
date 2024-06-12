import React, { useContext } from 'react';
import { Dimensions } from 'react-native';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, Image, TouchableOpacity, Platform } from 'react-native';


interface ConnectButtonProps{
    pressEventHandler: any
}

function ConnectButton({pressEventHandler}: ConnectButtonProps) {

  return (
    <TouchableOpacity
        style={styles.buttonContainer}
        onPress={()=>{
            pressEventHandler()
        }}
    >
        <Text
            style={styles.Text}
        >
            Connect Website
        </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    buttonContainer:{
        width:'90%',
        height:60,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#9952D8',
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
                width: 0,
                height: 0,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
        marginTop:50,
    },
    Text:{
        color:'#fff',
        fontWeight:'400',
        fontSize:20,
        textAlign:'center',
    },
})


export default ConnectButton;