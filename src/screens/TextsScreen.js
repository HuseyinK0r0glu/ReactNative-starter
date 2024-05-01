import React , {useState} from "react";
import {View,Text,StyleSheet,TextInput} from "react-native";

const TextsScreen = () => {
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');

    return <View>
        <Text style = {styles.text} >Enter Name</Text>
        <TextInput
            style = {styles.input}
            autoCapitalize = "none"
            autoCorrect = {false}
            value = {name}
            onChangeText = {(newValue) => setName(newValue)}
        />
        <Text style = {styles.text} >My Name is {name}</Text>
        <Text style = {styles.text} >Enter a password:</Text>
        <TextInput
            style = {styles.input}
            autoCapitalize = "none"
            autoCorrect = {false}
            value = {password}
            onChangeText = { (newValue) => {setPassword(newValue)}}
        />
        {password.length < 4 ? <Text>Password must be longer than 5 characters</Text> : null}
    </View>
}

const styles = StyleSheet.create({
    input:{
        margin:15,
        borderColor: 'black',
        borderWidth:1
    },
    text:{
      fontSize:20
    }
});

export default TextsScreen;