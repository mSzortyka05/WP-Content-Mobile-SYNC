import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, Modal } from 'react-native';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, Image, TouchableOpacity, Platform } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';

interface PostListElementProps{
    title: string
    id: number
    apiKey: string | undefined
    url: string
    refreshHandle: any
}

function PostListElement({title, id, apiKey, url, refreshHandle}:PostListElementProps) {
  const [deletingModalVisible, setDeletingModalVisible] = useState<boolean>(false)


    const deletePost = async() =>{
        try{
            const response = await axios.delete(url+'/wp-json/mobile-sync/delete-post/'+id, {
                headers: {
                    'X-API-KEY': apiKey
                }
            })
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        refreshHandle()
    },[deletingModalVisible])

  return (
    <TouchableOpacity
        style={styles.container}
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
              Are you sure you want to delete this post?
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
                  deletePost()
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
        <Text
            style={styles.title}
        >
            {title}
        </Text>
        <View
            style={styles.buttonsContainer}
        >
        <TouchableOpacity
                    style={styles.button}
                >
                <Feather name="edit" size={24} color="#9952D8" />
        </TouchableOpacity>
        <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{
                        setDeletingModalVisible(true)
                    }}
                >
                <MaterialIcons name="delete-sweep" size={32} color="red" />
                </TouchableOpacity>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        width:'90%',
        height:70,
        backgroundColor:'#fff',
        padding:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
        borderRadius:20,
        margin:10,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    title:{
        fontSize:20,
        fontWeight:'700',
        color:'gray'
    },
    button:{
        width:50,
        height:50,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    buttonsContainer:{
        display:'flex',
        flexDirection:'row',

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
        textAlign:'center'
      }

})


export default PostListElement;