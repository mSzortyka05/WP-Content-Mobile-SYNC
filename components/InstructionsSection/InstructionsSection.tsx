import React, { useContext } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, Image, TouchableOpacity, Platform, Dimensions } from 'react-native';





function InstructionsSection({pageSwitcher}: any) {

  return (
    <View
        style={styles.mainContainer} 
    >
        <View
            style={styles.footer}
        >
            <TouchableOpacity
            onPress={()=>{}}
            >
                <Text
                    style={styles.backText}
                >
                    Back
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{}}
            style={styles.nextTextButton}
            >
                <Text
                    style={styles.nextText}
                >
                    Next
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    mainContainer:{
        width:'100%',
        padding:10,
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
    footer:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
    },
    backText:{
        fontWeight:'700',
        color:'gray',
    },
    nextTextButton:{
        display:'flex',
        width:100,
        height:40,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#9952D8',
        shadowColor: "#000",
        shadowOffset: {
                width: 0,
                height: 0,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
    },
    nextText:{
        fontWeight:'700',
        color:'#fff',
        
    },
})


export default InstructionsSection;