import React, { useContext } from 'react';
import { Dimensions } from 'react-native';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, Image, TouchableOpacity, Platform } from 'react-native';
import { Octicons } from '@expo/vector-icons';


interface HeaderProps{
    text: string
}

function Header({text}:HeaderProps) {

  return (
    <View
        style={styles.header}
    >
        <View
            style={styles.logo}
        >
            <Text
                style={styles.logoText}
            >
                WP
            </Text>
        </View>
        <View style={{width:2, height:'90%', backgroundColor:'lightgray', marginLeft:20,}}></View>
        <Text
            style={styles.greatingText}
        >
            {text}
        </Text>
        <TouchableOpacity
            style={{position:'absolute', right:30, top:25}}
        >
            <Octicons name="bell" size={26} color="black"/>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    logo:{
        width:45,
        height:45,
        borderTopLeftRadius:15,
        borderBottomRightRadius:15,
        backgroundColor:'#000',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginRight:10,
    },
    logoText:{
        color:'#fff',
        fontWeight:'900',
        fontSize:16,
    },
    header:{
        width:'100%',
        height:70,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        padding:10,
        paddingLeft:30,
        paddingRight:30,
        position:'relative'
    },
    greatingText:{
        padding:10,
        fontSize:22,
        fontWeight:'700',
    }
})


export default Header;