import React , {useState,useReducer} from "react";
import {Text,View,StyleSheet,Button} from "react-native";

/*
const COUNT_INCREMENT = 1;

const reducer = (state,action) => {

    switch(action.type){
        case 'Increase':
            return {...state , count : state.count + action.payload};
        case 'Decrease':
            return {...state , count : state.count - action.payload}; 
        default:
            return state;
    }

};

const CounterScreen = () => {

    const [state,dispatch] = useReducer(reducer,{count : 0});

    return (
        <View>
            <Button title = "Increase" onPress = { () => dispatch({type:'Increase',payload:COUNT_INCREMENT})}/>
            <Button title = "Decrease" onPress = { () => dispatch({type:'Decrease',payload:COUNT_INCREMENT})}/>
            <Text>Current Count: {state.count}</Text>
        </View>
    );
};
*/



const CounterScreen = () => {
    const [counter,setCounter] = useState(0);
    return (
        <View>
            <Button title = "Increase" onPress = { () => setCounter(counter + 1)}/>
            <Button title = "Decrease" onPress = { () => setCounter(counter -1)}/>
            <Text>Current Count: {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;