import LottieView from 'lottie-react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, StyleSheet, SafeAreaView, View, Text, Modal, TextInput, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Footer from '../Footer/Footer';
import Header from '../MainScreen/MainScreenComponents/Header';
import { MaterialIcons } from '@expo/vector-icons';
import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";
import axios from 'axios';
import PostListElement from './ManagerScreenComponents/PostListElement';



function ManagerScreen({pageSwitcher, url}: any) {
    const [webSiteURL, setWebSiteURL] = useState<string>(url)
    const [APIKey, setAPIKey] = useState<string>()
    const [data, setData] = useState<any>(null)
    const [posts, setPosts] = useState<any>()
    const [deleting, setDeleting] = useState<boolean>(false);
    

    const fetchNumberOfPost = async() =>{
        try{
            const response = await axios.get(url+'/wp-json/mobile-sync/get-post-count',{
                headers: {
                    'X-API-KEY': APIKey
                }
            })
            if(response){
                setData([ {value: Number(response.data.count-1)}, {value: Number(response.data.count)}])
                console.log(response.data.count)
            }
        }
        catch(error:any){
            console.error(error)
        }
        
    }
    const getAPIKey = async() =>{
        const value = await AsyncStorage.getItem(url)
        if(value){
            setAPIKey(value)
        }
        else{
            setAPIKey('')
        }
    }

    const getAllPosts = async() =>{
        const response = await axios.get(url+'/wp-json/mobile-sync/get-posts', {
            headers: {
                'X-API-KEY': APIKey
            }
        })
        if(response){
            setPosts(response.data)
            console.log(response.data)
        }
    }

    useEffect(()=>{
       getAPIKey()
    },[])

    useEffect(()=>{
        if(APIKey){
            fetchNumberOfPost()
            getAllPosts()
        }
    },[APIKey])
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
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{
                        pageSwitcher('PostCreator', {url: url})
                    }}
                >
                    <Text
                        style={styles.buttonText}
                    >
                        Add new post 
                    </Text>
                    <MaterialIcons name="post-add" size={32} color="lightgreen" />
                </TouchableOpacity>
                
                <View
                    style={styles.statsContainer}
                >
                    <Text
                        style={styles.statsText}
                    >
                        Stats
                    </Text>
                </View>
                <Text
                    style={styles.statsText}
                >
                    number of posts 
                </Text>
                {data?<LineChart data = {data} areaChart width={320} height={250} color1='#9952D8' isAnimated={true} thickness={7} hideDataPoints={true}/>:<ActivityIndicator size={'large'} color={'#9952D8'}/>}
                <Text
                    style={styles.statsText}
                >
                    All Posts
                </Text>
                {
                    posts?posts.map((post:any, index:number)=>{
                        return(
                            <PostListElement key={index} title={post.title} id={post.id} apiKey={APIKey} url={url} refreshHandle={()=>{getAllPosts()}}/>
                        )
                    }):<ActivityIndicator size={'large'} color={'#9952D8'}/>                    
                }
                <View style={{height:150, width:'100%'}}></View>
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
        height:60,
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
    },
})


export default ManagerScreen;