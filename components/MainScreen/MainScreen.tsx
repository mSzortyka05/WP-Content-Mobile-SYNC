import LottieView from 'lottie-react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, StyleSheet, SafeAreaView, View, Text, Modal, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './MainScreenComponents/Header';
import TopSection from './MainScreenComponents/TopSection';
import ConnectButton from '../SetUpScreen/SetUpScreenComponents/ConnectButton';


function MainScreen({pageSwitcher}: any) {
    const [isConfigured, setIsConfigured] = useState<boolean>(false)
    const [isVisible, setIsVisible] = useState<boolean>(false)

    const [webSiteURL, setWebSiteURL] = useState<string>('')
    const [APIKey, setAPIKey] = useState<string>('')
    const [SSLCertificate, setSSLCertificate] = useState<boolean>(false)

    useEffect(()=>{
        validateForm()
    }, [webSiteURL, APIKey])

    const validateForm = () =>{
        
    }

    const storeData = async (key:string, value:string) => {
        try {
          await AsyncStorage.setItem(key, value);
        } catch (error) {
          console.error('Error storing data', error);
        }
      };

    const addConnectionHandle = async() =>{
        setIsVisible(false)
        let url = (SSLCertificate?'https://':'http://')+webSiteURL
        await storeData(url, APIKey)
        setIsConfigured(true)
        setTimeout(()=>{pageSwitcher('Main')}, 6000)
    }
    
  return (
    <SafeAreaView
        style={styles.mainContainer}
    >
        <ScrollView
            style={styles.scroll}
        >
            <Modal
            visible={isVisible}
            animationType="slide"
            transparent
            style={styles.modal}
            onRequestClose={()=>{
                setIsVisible(false)
            }
            }
        >
            <View
                style={styles.modalContentContainer}
            >
                <View
                    style={styles.content}
                >
                    <Text style={styles.labelText}>Your WordPress Website Domein</Text>
                    <TextInput 
                        placeholder={'example.com'}
                        value={webSiteURL} 
                        onChangeText={setWebSiteURL} 
                        style={styles.input} 
                    />
                    <Text style={styles.labelText}>Generated API Key</Text>
                    <TextInput 
                        placeholder={'FZphWtR...'}
                        value={APIKey} 
                        onChangeText={setAPIKey} 
                        style={styles.input} 
                    />
                    <View
                        style={styles.checkboxContainer}
                    >
                        <Text
                            style={{fontSize:18, width:'70%', flexWrap:'wrap', color:'#1C244B', fontWeight:'700'}}
                        >
                        The website has an SSL certificate
                        </Text>
                    <TouchableOpacity
                        style={{width:40, height:40, borderRadius:10, borderWidth:2, borderColor:'#9952D8', padding:2,}}
                        onPress={()=>{
                            setSSLCertificate(!SSLCertificate)
                        }}
                    >
                        <View style={{backgroundColor: SSLCertificate?'#9952D8':'#fff', width:'100%', height:'100%', borderRadius:10}}></View>
                    </TouchableOpacity>
                    </View>
                    
                    <ConnectButton pressEventHandler={()=>{addConnectionHandle()}} />
                </View>
            </View>
        </Modal>
            <View
                style={styles.mainContainer}
            >
                <Header />
                <TopSection pressEventHandler={()=>{setIsVisible(true)}}/>
            </View>
        </ScrollView>
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
    }
})


export default MainScreen;