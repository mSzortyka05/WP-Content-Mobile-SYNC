import LottieView from 'lottie-react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, StyleSheet, SafeAreaView, View, Text, Modal, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ConnectButton from '../SetUpScreen/SetUpScreenComponents/ConnectButton';
import Header from '../MainScreen/MainScreenComponents/Header';
import ListPosition from './SitesListScreenComponents/ListPosition';
import { AntDesign } from '@expo/vector-icons';
import Footer from '../Footer/Footer';

function SitesListScreen({pageSwitcher}: any) {
    const [isVisible, setIsVisible] = useState<boolean>(false)

    const [webSiteURL, setWebSiteURL] = useState<string>('')
    const [APIKey, setAPIKey] = useState<string>('')
    const [SSLCertificate, setSSLCertificate] = useState<boolean>(false)

    const [keys, setKeys] = useState<any>([]);

    const fetchKeys = async () => {
        console.log('connecting...')
            try {
                const allKeys = await AsyncStorage.getAllKeys();
                setKeys(allKeys);
            } catch (e) {
                console.error(e);
            }
        console.log('fetched')
        };

    useEffect(() => {
        fetchKeys();
    }, []);

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
        fetchKeys()
    }
    
  return (
    <SafeAreaView
        style={styles.mainContainer}
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
                <Header text={'Your websites'}/>
                <ScrollView
                    style={styles.scroll}
                >
                    <View
                        style={styles.listContainer}
                    >
                        {keys.map((key:string, index: number)=>(
                            <ListPosition key={index} url={key} pageSwitcher={pageSwitcher} fetchKeys={fetchKeys}/>
                        ))}
                        <TouchableOpacity
                            style={styles.button}
                            onPress={()=>{
                                setIsVisible(true)
                            }}
                        >
                            <Text
                                style={styles.buttonText}
                            >
                                Connect another site
                            </Text>
                            <AntDesign name="pluscircle" size={20} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={{height: 200}}></View>
                </ScrollView>
            </View>
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
    listContainer:{
        width:'100%',
        paddingTop:50,
        display:'flex',
        alignItems:'center',

    },
    button:{
        marginTop:50,
        width:'90%',
        height:60,
        borderRadius:20,
        backgroundColor:'#9952D8',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    buttonText:{
        color:'#fff',
        fontWeight:'700',
        fontSize:18,
        paddingRight:20,
    }
})


export default SitesListScreen;