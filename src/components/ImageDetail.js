import React from "react";
import {View,Text,StyleSheet,Image} from "react-native";

const ImageDetail = ({title,imageScore,imageSource}) => {
    return (
        <View>
            <Text>{title}</Text>
            <Image source={imageSource}/>
            <Text>Image Score: {imageScore}</Text>
        </View>
    )

}

const styles = StyleSheet.create({});

export default ImageDetail;