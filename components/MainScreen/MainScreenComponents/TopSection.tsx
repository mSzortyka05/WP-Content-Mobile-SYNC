import React, { useContext, useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, Image, TouchableOpacity, Platform } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


function TopSection() {
    const [keys, setKeys] = useState<any>([]);

    useEffect(() => {
        const fetchKeys = async () => {
          try {
            const allKeys = await AsyncStorage.getAllKeys();
            setKeys(allKeys);
          } catch (e) {
            console.error(e);
          }
        };
    
        fetchKeys();
      }, []);

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
                imageStyle={styles.imgBackground}
                blurRadius={40}
            >

            </ImageBackground>
        </TouchableOpacity>
        <View
            style={styles.smallBoxesContainer}
        >
            <TouchableOpacity
                style={[styles.smallBox, {backgroundColor:'#000'}]}
            >
                
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.smallBox}
            >
                
            </TouchableOpacity>
        </View>
        {keys.map((key:any, index:any) => (
        <Text key={index}>{key}</Text>
      ))}
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
        borderColor:'#000'
    },
})


export default TopSection;