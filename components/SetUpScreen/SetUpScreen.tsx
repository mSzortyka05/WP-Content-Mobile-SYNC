import LottieView from 'lottie-react-native';
import React, { useContext } from 'react';
import { Dimensions, StyleSheet, SafeAreaView, View, Text } from 'react-native';

function SetUpScreen({pageSwitcher}: any) {

  return (
    <SafeAreaView
        style={styles.mainContainer}
    >
        <View
            style={styles.infoBox}
        >
            <Text>
                Configure your first WordPress website 
            </Text>
            
        </View>
        <LottieView source={require('./../../assets/Animation - 1718130413496.json')} autoPlay loop/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    mainContainer:{
        width:'100%',
        height:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    infoBox:{
        width:'60%',
        height:300,
        minWidth:200,
        maxWidth:500,
        backgroundColor:'#fff',
        shadowColor: "#000",
        shadowOffset: {
                width: 0,
                height: 0,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
        borderRadius:20,
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-start',
        padding:20,
    },
})


export default SetUpScreen;