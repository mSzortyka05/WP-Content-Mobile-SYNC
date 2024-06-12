import LottieView from 'lottie-react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, StyleSheet, SafeAreaView, View, Text, Modal, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './MainScreenComponents/Header';
import TopSection from './MainScreenComponents/TopSection';


function MainScreen({pageSwitcher}: any) {
    const [isConfigured, setIsConfigured] = useState<boolean>(false)
    const [isVisible, setIsVisible] = useState<boolean>(false)

    const [webSiteURL, setWebSiteURL] = useState<string>('')
    const [APIKey, setAPIKey] = useState<string>('')
    const [SSLCertificate, setSSLCertificate] = useState<boolean>(false)

    
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
                <Header />
                <TopSection />
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
})


export default MainScreen;