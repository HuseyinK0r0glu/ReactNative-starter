import React from "react";
import { Text, StyleSheet ,View,Button,TouchableOpacity} from "react-native";

const HomeScreen = ({navigation}) => {
  return (
      <View>
        <Text style={styles.text}>Hi there!</Text>
        <Button
            title = "Go to components demo"
            onPress = { () => navigation.navigate("Components")}
        />
        <Button
            title = "Go to the list demo"
            onPress = { () => navigation.navigate("List")}
        />
        <Button
            title = "Go to the Image demo"
            onPress = { () => navigation.navigate("Image")}
        />
        <Button
            title = "Go to the Counter demo"
            onPress = { () => navigation.navigate("Count")}
        />
        <Button
            title = "Go to the color demo"
            onPress = { () => navigation.navigate("Color")}
        />
        <Button
            title = "Go to the square color demo"
            onPress = { () => navigation.navigate("SquareColor")}
        />
        <Button
            title = "Go to reducer counter demo"
            onPress = { () => navigation.navigate("ReducerCounter")}
        />
        <Button
            title = "Go to Texts demo"
            onPress = { () => navigation.navigate("TextScreen")}
        />
        <Button
            title = "Go to Box demo"
            onPress = { () => {navigation.navigate("BoxScreen")}}
        />
          {/*
        <TouchableOpacity onPress = {() => props.navigation.navigate("List")}>
          <Text>Go to list demo</Text>
        </TouchableOpacity>
            */}
      </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
