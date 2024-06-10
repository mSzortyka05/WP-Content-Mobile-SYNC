import React, { useContext } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, Image, TouchableOpacity, Platform, Dimensions, ScrollView, Linking } from 'react-native';





function Step3Content({pageSwitcher}: any) {

  return (
    <ScrollView>
    <View
        style={styles.mainContainer} 
    >
        <Text
            style={styles.headersText}
        >
            Activate <Text style={{color:'#9952D8'}}>WP Content Mobile SYNC</Text> plugin and go to Mobile SYNC tab
        </Text>
        <Image 
            source={require('./../../../assets/step3.png')} 
            style={styles.img}
        />
        <Text
            style={[styles.tipsText,{marginTop:20,}]}
        >
            You can find there your website <Text style={{color:'dimgray'}}>API key</Text>
        </Text>
        <Text
            style={[styles.tipsText,{marginTop:20,}]}
        >
            When you get the <Text style={{color:'dimgray'}}>API key</Text> you can move on to Set up
        </Text>
        
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    width:'100%',
    display:'flex',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    padding:20,
    },
    headersText:{
        fontSize:20,
        fontWeight:'900',
        color:'#1C244B'
    },
    img:{
        width:'100%',
        height:110,
        borderRadius:10,
        marginTop:50,
    },
    icon:{
        width:50,
        height:60,
        tintColor:'lightgray',
        marginLeft:20,
    },
    tipsText:{
        color:'lightgray',
        fontSize:20,
        fontWeight:'900',
    },
    tipsHeaderContainer:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        margin:20,
        marginTop:50,
    },
})


export default Step3Content;