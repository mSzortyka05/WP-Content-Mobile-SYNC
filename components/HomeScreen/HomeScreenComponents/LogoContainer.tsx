import React, { useContext } from 'react';
import { Dimensions } from 'react-native';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, Image, TouchableOpacity, Platform } from 'react-native';


function LogoContainer() {

  return (
    <View
        style={styles.LogoContainer}
    >
        <View
            style={styles.logo}
        >
            <Text
                style={styles.WPText}
            >
                WP
            </Text>
        </View>
        <Text
            style={styles.titleText}
        >
            Mobile SYNC
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    LogoContainer:{
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    logo:{
        width:65,
        height:65,
        borderTopLeftRadius:15,
        borderBottomRightRadius:15,
        backgroundColor:'#fff',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    WPText:{
        color:'#000',
        fontWeight:'900',
        fontSize:25,
    },
    titleText:{
        color:'#fff',
        fontWeight:'700',
        fontSize:30,
    },
})


export default LogoContainer;