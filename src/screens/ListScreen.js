import React from "react";
import {View,Text,StyleSheet,FlatList} from "react-native";

const ListScreen = () => {

    const friends = [
        {name: 'Friend #1' , age: 31},
        {name: 'Friend #2' , age: 69},
        {name: 'Friend #3' , age: 33},
        {name: 'Friend #4' , age: 43},
        {name: 'Friend #5' , age: 24},
        {name: 'Friend #6' , age: 13},
        {name: 'Friend #7' , age: 57},
        {name: 'Friend #8' , age: 25},
        {name: 'Friend #9' , age: 18},
    ];

    return (
        <FlatList
            /*horizontal
            showsHorizontalScrollIndicator = {false}*/
            keyExtractor = {friend => friend.name}
            data={friends}
            renderItem = {({ item }) => {
                // element === {item : {name: 'Friend #1' }, index = 0}
                // item === {name: 'Friend #1'}
                return <Text style = {styles.textStyle}>{item.name} - Age {item.age}</Text>
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle : {
        marginVertical : 50
    }
});

export default ListScreen;