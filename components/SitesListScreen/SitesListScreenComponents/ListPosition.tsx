import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, Modal, Pressable } from 'react-native';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, Image, TouchableOpacity, Platform } from 'react-native';
import axios from 'axios';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { encode } from 'base64-arraybuffer';

interface ListPositionProps{
    url: string
    pageSwitcher: any
    fetchKeys: any
}

function ListPosition({url, pageSwitcher, fetchKeys}:ListPositionProps) {
  const [favicon, setFavicon] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const [deletingModalVisible, setDeletingModalVisible] = useState<boolean>(false)


  const fetchFavicon = async (url: string): Promise<string> => {
    const faviconUrl = new URL('/favicon.ico', url).toString();
    const response = await axios.get(faviconUrl, { responseType: 'arraybuffer' });
    const base64 = encode(response.data);
    return `data:image/x-icon;base64,${base64}`;
  };

  
  useEffect(() => {
    const loadFavicon = async () => {
      try {
        const faviconData = await fetchFavicon(url);
        setFavicon(faviconData);
      } catch (error) {
        console.error('Error fetching favicon:', error);
      }}

      loadFavicon()
  }, [url]);

  const deleteByKey = async(key:string) =>{
    try {
      await AsyncStorage.removeItem(key);
      fetchKeys()
      return true;
    }
    catch(exception) {
        return false;
    }
  }

  return (
    <Pressable
      style={styles.mainContainer}
      onPress={()=>{pageSwitcher('Manager', {url: url})}}
      onLongPress={()=>{setDeletingModalVisible(true)}}
    >
      <Modal
        visible={deletingModalVisible}
        onRequestClose={()=>{setDeletingModalVisible(false)}}
        transparent={true}
        style={
          {
            width:'100%',
            height:'100%',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'rgba(0,0,0,0.5)'
          }
        }
      >
        <View
          style={
            {
              width:'100%',
              height:'100%',
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              backgroundColor:'rgba(0,0,0,0.5)'
            }
          }
        >
          <View
            style={styles.modal}
          >
            <Text
              style={styles.modalTitle}
            >
              Would you like to remove connection to this site?
            </Text>
            <View
              style={{
                width:'100%',
                flexDirection:'row',
                justifyContent:'space-around',
                paddingTop:15,
              }}
            >
              <TouchableOpacity
                style={styles.delButton}
                onPress={()=>{
                  deleteByKey(url)
                  setDeletingModalVisible(false)
                }}
              >
                <Text
                  style={{
                    fontSize:18,
                    fontWeight:'700',
                    color:'red',
                  }}
                >
                  Remove
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.delButton}
                onPress={()=>{
                  setDeletingModalVisible(false)
                }}
              >
                <Text
                  style={{
                    fontSize:18,
                    fontWeight:'700',
                    color:'gray'
                  }}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
        <View
          style={styles.iconContainer}
        >
          {favicon?<Image source={{uri: favicon}} style={{width:32,height:32,}}/>:
          <MaterialCommunityIcons name="web-check" size={32} color="white" />}
        </View>
        <Text
          style={styles.title}
        >
          {url.split('//')[1]}
        </Text>
        <AntDesign name="rightcircle" size={24} color="#9952D8" />
    </Pressable>
  );    
}

const styles = StyleSheet.create({
    mainContainer:{
      width:'100%',
      height:70,
      margin:10,
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      borderBottomWidth:1,
      borderColor:'lightgray',
      padding:20,
    },
    iconContainer:{
      width:60,
      height:60,
      borderRadius:15,
      backgroundColor:'#000',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
    },
    title:{
      fontSize:18,
      fontWeight:'700',
      paddingLeft:10,
    },
    modal:{
      width:'60%',
      height:200,
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#fff',
      borderRadius:20,
    },
    delButton:{
      width:'40%',
      height:40,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
    },
    modalTitle:{
      fontSize:16,
      fontWeight:'700',
    }
})


export default ListPosition;