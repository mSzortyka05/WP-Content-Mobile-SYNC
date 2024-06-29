import LottieView from 'lottie-react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, StyleSheet, SafeAreaView, View, Text, Modal, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Footer from '../Footer/Footer';
import Header from '../MainScreen/MainScreenComponents/Header';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';



function ManagerScreen({pageSwitcher, url}: any) {
    const [webSiteURL, setWebSiteURL] = useState<string>(url)
    const [APIKey, setAPIKey] = useState<string>()

    useEffect(() =>{
        const getAPIKey = async() =>{
            const value = await AsyncStorage.getItem(url)
            if(value){
                setAPIKey(value)
            }
            else{
                setAPIKey('')
            }
        }
        getAPIKey()    
    },[])

  return (
    <SafeAreaView
        style={styles.mainContainer}
    >
        <ScrollView
            style={styles.scroll}
        >
            <View
                style={styles.mainContainer}
            >
                <Header text={'Website Manager'}/>
                <Text
                    style={styles.titleText}
                >
                    {webSiteURL.split('//')[1]}
                </Text>
                <View
                    style={styles.button}
                >
                    <Text
                        style={styles.buttonText}
                    >
                        Add new post 
                    </Text>
                    <MaterialIcons name="post-add" size={32} color="#9952D8" />
                </View>
                <View
                    style={styles.button}
                >
                    <Text
                        style={styles.buttonText}
                    >
                        Edit post 
                    </Text>
                    <Feather name="edit" size={24} color="#9952D8" />
                </View>
                <View
                    style={styles.button}
                >
                    <Text
                        style={styles.buttonText}
                    >
                        Edit post 
                    </Text>
                    <MaterialIcons name="delete-sweep" size={32} color="red" />
                </View>
                <View
                    style={styles.statsContainer}
                >
                    <Text
                        style={styles.statsText}
                    >
                        Stats
                    </Text>
                </View>
            </View>
        </ScrollView>
        <Footer pageSwitcher={pageSwitcher} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    mainContainer:{
        width:'100%',
        height:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-start',
        paddingTop:20,
    },
    scroll:{
        width:'100%',

    },
    labelText:{
        fontSize:20,
        fontWeight:'700',
        color:'#1C244B',
        padding:20,
    },
    modal:{
        width:'100%',
        height:'100%',
        
    },
    modalContentContainer:{
        width:'100%',
        height:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-end',
        backgroundColor:'transparent'
    },
    content:{
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        backgroundColor:'#fff',
        width:'100%',
        height:'60%',
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-start',
        padding:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    input:{
        width:'90%',
        height:60,
        borderRadius:10,
        backgroundColor:'#fff',
        shadowColor: "#000",
        shadowOffset: {
                width: 0,
                height: 0,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
        fontSize:18, 
        paddingLeft:10,
    },
    checkboxContainer:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        padding:20,
    },
    titleText:{
        fontSize:22,
        fontWeight:'700',
        color:'gray'
    },
    button:{
        width:'90%',
        height:80,
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
        marginTop:20,
        marginBottom:20,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    buttonText:{
        fontSize:20,
        fontWeight:'700'
    },
    statsContainer:{
        width:'100%',
        padding:20,
        display:'flex',
        alignItems:'flex-start',
    },
    statsText:{
        fontSize:22,
        fontWeight:'700',
        padding:20,
        color:'gray',
    }
})


export default ManagerScreen;