import React, { useContext } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, Image, TouchableOpacity, Platform, Dimensions, ScrollView } from 'react-native';





function Step1Content({pageSwitcher}: any) {

  return (
    <ScrollView>
    <View
        style={styles.mainContainer} 
    >
        <Text
            style={styles.headersText}
        >
            Log in to your WordPress admin panel
        </Text>
        <Image 
            source={require('./../../../assets/step1.png')} 
            style={styles.img}
        />
        <View
            style={styles.tipsHeaderContainer}
        >
            <Text
                style={styles.tipsText}
            >
                Tips
            </Text>
            <Image source={require('./../../../assets/idea-icon.png')} style={styles.icon}/>
        </View>
        <Text
            style={styles.tipsText}
        >
            Make sure you have permission to download and activate the plugins
        </Text>
        <Text
            style={styles.tipsText}
        >
            If you have any problem, please contact your site administrator
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
        height:150,
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


export default Step1Content;