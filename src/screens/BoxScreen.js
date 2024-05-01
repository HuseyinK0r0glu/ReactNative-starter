import React from "react";
import {View,Text,StyleSheet} from "react-native";
import TextsScreen from "./TextsScreen";

const BoxScreen = () => {
    return <View style = {styles.view} >
        <View style = {styles.view1}/>
        <View style = {styles.view2}/>
        <View style = {styles.view3}/>
    </View>
}

const styles = StyleSheet.create({
    view:{
        borderWidth:3,
        borderColor:'black',
        height:100,
        flexDirection:'row',
        justifyContent:"space-between"
    },
    text1:{
        borderWidth:3,
        borderColor:'red',
    },
    text2:{
        borderWidth:3,
        borderColor:'red',
        ...StyleSheet.absoluteFillObject
    },
    text3:{
        borderWidth:3,
        borderColor:'red',
    },
    view1:{
        height:50,
        width:50,
        backgroundColor:'red'
    },
    view2:{
        height:50,
        width:50,
        backgroundColor:'blue',
        ///marginTop:50
        //top:50
        alignSelf:'flex-end'
    },
    view3:{
        height:50,
        width:50,
        backgroundColor:'green'
    }
});

export default BoxScreen