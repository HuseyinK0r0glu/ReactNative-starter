import React from "react";
import {Text , StyleSheet,View} from "react-native";

/*const ComponentScreen = function (){
    return <Text>This is the components screen</Text>;
};*/

const ComponentScreen = () => {
    const greeting = "Bye there!";
    const sayHello = <Text style={styles.textStyle}>Hello!</Text>;
    const name = "John";

    return (
    <View>
        <Text style={styles.forExercise}>Getting started with React Native!</Text>
        <Text style={styles.subHeaderStyle}>My name is {name}</Text>
    </View>)
};

const styles = StyleSheet.create({
   textStyle : {
       fontSize : 30
   },
    subHeaderStyle : {
       fontSize : 20
    },
    forExercise : {
       fontSize : 45
    }
});

export default ComponentScreen;