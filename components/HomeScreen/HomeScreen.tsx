import React, { useContext } from 'react';
import { Dimensions } from 'react-native';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, Image, TouchableOpacity, Platform } from 'react-native';
import LogoContainer from './HomeScreenComponents/LogoContainer';
import Button from './HomeScreenComponents/Button';





function HomeScreen({pageSwitcher}: any) {

  return (
    <SafeAreaView
        style={styles.mainContainer}
    >
        <ImageBackground
            source={require('./../../assets/background-texture.jpg')}
            style={styles.ImageBackground}
        >
            <LogoContainer/>
            <Button pageSwitcher={pageSwitcher} />
        </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    mainContainer:{
        width:'100%',
        height:'100%',
    },
    ImageBackground:{
        width:'100%',
        height:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
})


export default HomeScreen;