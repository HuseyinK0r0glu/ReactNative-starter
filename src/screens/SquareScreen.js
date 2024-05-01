import React, { useReducer } from "react";
import {View,StyleSheet} from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state,action) => {
    /// state === {red:number,green:number,blue:number};
    /// action === {type: 'change_red' || 'change_green' || 'change_blue' , payload : 15 || -15 }

    switch (action.type){
        case 'change_red':
            if(state.red + action.payload > 255 || state.red + action.payload < 0){
                return state;
            }else {
                return {...state , red: state.red + action.payload};
            }
        case 'change_green':
            if(state.green + action.payload > 255 || state.green + action.payload < 0){
                return state;
            }else{
                return {...state , green: state.green + action.payload};
            }
        case 'change_blue':
            if(state.blue + action.payload > 255 || state.blue + action.payload < 0){
                return state;
            }else{
                return {...state , blue: state.blue + action.payload};
            }
        default:
            return state;
    }

};

const SquareScreen = () => {

    /// useState

    /*const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);*/

    /*const setColor = (color,change) => {
        /// color === 'red' , 'green' , 'blue'
        /// change === +15 , -15

        if(color === red){
            if(red + change > 255 || red + change < 0){
                return;
            }else{
                return setRed(red + change);
            }
        }else if(color === green){
            if(green + change > 255 || red + change < 0){
                return;
            }else{
                return setGreen(green + change);
            }
        }else{
            if(blue + change > 255 || blue + change < 0){
                return;
            }else{
                return setBlue(blue + change);
            }
        }

    }*/

    /*const setColor = (color,change) => {
        switch (color) {
            case 'red':
                if(red + change > 255 || red + change < 0 ? null : setRed(red + change));
                return;
            case 'green':
                if(green + change > 255 || green + change < 0 ? null : setGreen(green + change));
                return;
            case 'blue':
                if(blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change));
                return;
            default:
                return;
        }
    }*/



    const [state,dispatch] = useReducer(reducer,{red: 0,green: 0,blue: 0});

    return <View>
        <ColorCounter
            onIncrease={() => dispatch({type: 'change_red', payload:COLOR_INCREMENT})}
            onDecrease={() => dispatch({type: 'change_red', payload:-1 * COLOR_INCREMENT})}
            color="Red"
        />
        <ColorCounter
            onIncrease={() => dispatch({type: 'change_green', payload:COLOR_INCREMENT})}
            onDecrease={() => dispatch({type: 'change_green', payload:-1 * COLOR_INCREMENT})}
            color="Green"
        />
        <ColorCounter
            onIncrease={() => dispatch({type: 'change_blue', payload:COLOR_INCREMENT})}
            onDecrease={() => dispatch({type: 'change_blue', payload:-1 * COLOR_INCREMENT})}
            color="Blue"
        />
        <View style = {{
            height:150,
            width:150,
            backgroundColor:`rgb(${state.red},${state.green},${state.blue})`
        }}/>
    </View>
}

const styles = StyleSheet.create({});

export default SquareScreen;