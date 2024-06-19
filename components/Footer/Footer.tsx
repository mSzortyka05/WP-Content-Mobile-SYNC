import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface FooterProps{
    pageSwitcher: any
}

function Footer({pageSwitcher}:FooterProps) {

  return (
    <View
        style={styles.footer}
    >
        <TouchableOpacity
            style={styles.button}
            onPress={()=>{
                pageSwitcher('Main')
            }}
        >
            <AntDesign name="home" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={()=>{
                pageSwitcher('Main')
            }}
        >
            <Ionicons name="stats-chart-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={()=>{
                pageSwitcher('Sites')
            }}
        >
            <MaterialCommunityIcons name="webhook" size={24} color="white" />
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    footer:{
        position:'absolute',
        bottom: 30,
        backgroundColor:'#000',
        borderRadius:20,
        width:250,
        height:50,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
    },
    button:{
        width:40,
        height:40,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    }
})


export default Footer;