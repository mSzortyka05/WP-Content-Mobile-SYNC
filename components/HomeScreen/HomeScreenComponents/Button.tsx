import { LinearGradient } from 'expo-linear-gradient';
import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';


function Button({pageSwitcher}: any) {

  return (
    <TouchableOpacity
        onPress={()=>{pageSwitcher('Home')}}
        style={styles.button}
    >
        <LinearGradient
            colors={['#363636', '#202020', '#101010']}
            style={styles.contentContainer}
        >
            <Text
                style={styles.buttonText}
            >
                Get started
            </Text>
        </LinearGradient>
        
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button:{
        width:200,
        height:50,
        borderRadius:15,
        margin:20,
    },
    contentContainer:{
        width:'100%',
        height:'100%',
        borderRadius:15,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    buttonText:{
        color:'#fff',
        fontWeight:'700',
        fontSize:18
    },
})


export default Button;