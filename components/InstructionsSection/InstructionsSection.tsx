import React, { useContext } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, Image, TouchableOpacity, Platform, Dimensions } from 'react-native';
import InstructionsCarousel from './InstructionsSectionComponents/InstructionsCarousel';





function InstructionsSection({pageSwitcher}: any) {

  return (
    <View
        style={styles.mainContainer} 
    >
        <InstructionsCarousel pageSwitcher={pageSwitcher}/>
    </View>
  );
}

const styles = StyleSheet.create({
    mainContainer:{
        width:'100%',
        padding:10,
        height:'90%',
        marginTop:20,
        borderRadius:20,
        backgroundColor:'#fff',
        shadowColor: "#000",
        shadowOffset: {
                width: 0,
                height: 0,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
    },
    
})


export default InstructionsSection;