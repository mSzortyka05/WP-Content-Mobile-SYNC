import React, { useContext } from 'react';
import { Dimensions } from 'react-native';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, Image, TouchableOpacity, Platform } from 'react-native';
import InstructionsSection from '../InstructionsSection/InstructionsSection';





function GuideScreen({pageSwitcher}: any) {

  return (
    <SafeAreaView
        style={styles.mainContainer}
    >
        <Text
            style={styles.titleText}
        >
            Step by step configuration
        </Text>
        <InstructionsSection pageSwitcher={pageSwitcher}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    mainContainer:{
        width:'100%',
        height:'100%',
        display:'flex',
        padding:30,
    },
    titleText:{
        fontSize:25,
        fontWeight:'900',
        color:'#1C244B'
    },
})


export default GuideScreen;