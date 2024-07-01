import LottieView from 'lottie-react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, StyleSheet, SafeAreaView, View, Text, Modal, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Footer from '../Footer/Footer';
import Header from '../MainScreen/MainScreenComponents/Header';
import axios from 'axios';


function PostCreatorScreen({pageSwitcher, url}: any) {
  const [webSiteURL, setWebSiteURL] = useState<string>(url)
  const [APIKey, setAPIKey] = useState<string>()
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
    

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

  const submitHandle = async() =>{
    const response = await axios.post(url+'/wp-json/mobile-sync/add-content',{
        title:title,
        content:content,
    },{
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': APIKey
        }
    })
    console.log(response)
    
  }

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
                    style={styles.labelText}
                >
                    Title of New Post
                </Text>
                <TextInput 
                    style={styles.titleInput}
                    onChangeText={setTitle}
                    value={title}
                    placeholder={'title'}
                />
                <Text
                    style={styles.labelText}
                >
                    Content of New Post
                </Text>
                <TextInput 
                    style={styles.contentInput}
                    multiline={true}
                    onChangeText={setContent}
                    value={content}
                    placeholder={'content of post'}
                />
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={()=>{
                        submitHandle()
                    }}
                >
                    <Text
                        style={styles.buttonText}
                    >
                        Publish
                    </Text>
                </TouchableOpacity>
                <View style={{height:150,width:'100%'}}></View>
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
    titleInput:{
        width:'90%',
        height:55,
        borderRadius:20,
        backgroundColor:'#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
        margin:20,
        paddingLeft:20,
        fontSize:18,
    },
    labelText:{
        fontSize:22,
        fontWeight:'700',
        color:'gray'
    },
    contentInput:{
        width:'90%',
        minHeight:250,
        height:'auto',
        borderRadius:20,
        backgroundColor:'#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
        margin:20,
        paddingLeft:20,
        fontSize:18,
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        padding:20,
    },

    submitButton:{
        backgroundColor:'#9952D8',
        borderRadius:10,
        width:'60%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        height:50,
    },
    buttonText:{
        color:'#fff',
        fontWeight:'700',
        fontSize:18,
    }
})


export default PostCreatorScreen;