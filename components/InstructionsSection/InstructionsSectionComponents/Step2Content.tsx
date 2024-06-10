import React, { useContext } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, Image, TouchableOpacity, Platform, Dimensions, ScrollView, Linking } from 'react-native';





function Step2Content({pageSwitcher}: any) {

  return (
    <ScrollView>
    <View
        style={styles.mainContainer} 
    >
        <Text
            style={styles.headersText}
        >
            Install <Text style={{color:'#9952D8'}}>WP Content Mobile SYNC</Text> plugin
        </Text>
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
            Go to <Text style={{color:'lightblue'}}>Plugins/Add new Plugin</Text> Section
        </Text>
        <Text
            style={[styles.tipsText,{marginTop:20,}]}
        >
            Search for our plugin and install it!
        </Text>
        <Text
            style={[styles.tipsText,{marginTop:20,}]}
        >
            Optionally, you can download the latest version of the plugin in .zip form from our website and follow the instructions on the page
        </Text>
        <Text style={[styles.tipsText, {color: 'lightblue', textDecorationLine:'underline'}]}
              onPress={() => Linking.openURL('https://wp-mobile-sync.wuaze.com/download')}>
          Dowload .zip file from website
        </Text>
        <Image 
            source={require('./../../../assets/step2.png')} 
            style={styles.img}
        />
        
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
        height:250,
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


export default Step2Content;