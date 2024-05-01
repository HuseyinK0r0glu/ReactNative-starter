import React , {useReducer} from "react";
import {View,Button,Text,StyleSheet} from "react-native";

const reducer = (state,action) => {
    /// state === {count : number}
    /// action === {type : 'increment' || 'decrement' , payload : 1}
    switch (action.type){
        case 'increment':
            return {...state , counter: state.counter + action.payload}
        case 'decrement':
            return {...state , counter: state.counter -  action.payload}
        default:
            return state;
    }
}

const INCREMENT_VALUE = 1;

const ReducerCounterScreen = () => {

    const [state,dispatch] = useReducer(reducer, {counter : 0});

    return <View>
        <Button title = "Increase" onPress = { () => dispatch({type:'increment',payload:INCREMENT_VALUE})}/>
        <Button title = "Decrease" onPress = { () => dispatch({type:'decrement',payload:INCREMENT_VALUE})}/>
        <Text style = {styles.textStyle} >Current Count:</Text>
        <Text style = {styles.textStyle}>{state.counter}</Text>
    </View>
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:30
    }
});

export default ReducerCounterScreen;

