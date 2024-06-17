import React, { useContext, useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, Image, TouchableOpacity, Platform } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface TopSectionProps{
    pressEventHandler: any
}


function TopSection({pressEventHandler}: TopSectionProps) {

  return (
    <View
        style={styles.container}
    >
        <TouchableOpacity
            style={styles.mainCard}
        >
            <ImageBackground
                source={require('./../../../assets/background-texture.jpg')}
                style={styles.imgBackground}
                imageStyle={{borderRadius:20, width:'100%'}}
                blurRadius={40}
            >
                <Text
                    style={styles.whiteText}
                >
                    Manage all your wordpress websites 
                </Text>
                <View
                    style={{flexDirection:'row', justifyContent:'space-between', paddingRight:20, paddingLeft:20, paddingBottom:20,}}
                >
                    <Text
                        style={styles.smallText}
                    >
                        Go to list
                    </Text>
                    <AntDesign name="arrowright" size={24} color="white"/>
                </View>
            </ImageBackground>
        </TouchableOpacity>
        <View
            style={styles.smallBoxesContainer}
        >
            <TouchableOpacity
                style={[styles.smallBox, {backgroundColor:'#000'}]}
            >
                <Text
                    style={[styles.whiteText, {textAlign:'center'}]}
                >
                    Web statistics
                </Text>
                <Ionicons name="stats-chart-outline" size={50} color="#425FFC" style={{textAlign:'center'}}/>    
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.smallBox}
                onPress={()=>{pressEventHandler()}}
            >
                <Text
                    style={styles.blackText}
                >
                    Connect another website
                </Text>
                <AntDesign name="pluscircle" size={35} color="black" style={{textAlign:'center'}}/>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-start',
        padding:10,
        marginTop:50,
    },
    mainCard:{
        width:'100%',
        height:200,
        borderRadius:20,
        shadowColor: "#000",
        shadowOffset: {
                width: 0,
                height: 0,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
        backgroundColor:'#fff',
    },      
    imgBackground:{
        width:'100%',
        height:'100%',
        borderRadius:20,
        display:'flex',
        alignContent:'flex-start',
        justifyContent:'flex-end',
    },
    smallBoxesContainer:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:10,
    },
    smallBox:{
        width:190,
        height:190,
        borderRadius:20, 
        borderWidth:1,
        borderColor:'#000',
        display:"flex",
        justifyContent:'center',
        alignContent:'center',
    },
    whiteText:{
        margin:20,
        color:'#fff',
        fontSize:25,
        fontWeight:'700'
    },
    smallText:{
        color:'#fff',
        fontSize:18,
        fontWeight:'900'
    },      
    blackText:{
        margin:20,
        color:'#000',
        fontSize:25,
        fontWeight:'700',
        textAlign:'center',
    }
})


export default TopSection;