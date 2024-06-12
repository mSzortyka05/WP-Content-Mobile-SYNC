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
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        top:30,
        left:20,
    },
    logo:{
        width:40,
        height:40,
        borderTopLeftRadius:15,
        borderBottomRightRadius:15,
        backgroundColor:'#000',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginRight:10,
    },
    WPText:{
        color:'#fff',
        fontWeight:'900',
        fontSize:14,
    },
    titleText:{
        color:'#000',
        fontWeight:'700',
        fontSize:25,
    },
})


export default LogoContainer;