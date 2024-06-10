import React, { useContext, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, Image, TouchableOpacity, Platform, Dimensions } from 'react-native';
import Step1Content from './Step1Content';
import Step3Content from './Step3Content';
import Step2Content from './Step2Content';


interface InstructionsCarouselProps{
    pageSwitcher: any,
}

function InstructionsCarousel({pageSwitcher}: InstructionsCarouselProps) {
    const [step, setStep] = useState<number>(1)

    const backHandle = () =>{
        step>1?setStep(step-1):pageSwitcher('Home')
    }
    const nextHandle = () =>{
        step<3?setStep(step+1):pageSwitcher('SetUp')
    }

  return (
    <View
        style={styles.mainContainer} 
    >
        {step==1?<Step1Content/>:null}
        {step==2?<Step2Content/>:null}
        {step==3?<Step3Content/>:null}

        <View
            style={styles.footer}
        >
            <TouchableOpacity
            onPress={()=>{
                backHandle()
            }}
            >
                <Text
                    style={styles.backText}
                >
                    Back
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{
                nextHandle()
            }}
            style={styles.nextTextButton}
            >
                <Text
                    style={styles.nextText}
                >
                    {step!=3?'Next':'Set up'}
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    mainContainer:{
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent:'space-between'
    },
    footer:{
        width:'100%',
        paddingTop:20,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
    },
    backText:{
        fontWeight:'700',
        color:'gray',
    },
    nextTextButton:{
        display:'flex',
        width:100,
        height:40,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#9952D8',
        shadowColor: "#000",
        shadowOffset: {
                width: 0,
                height: 0,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
    },
    nextText:{
        fontWeight:'700',
        color:'#fff',
        
    },
    
})


export default InstructionsCarousel;