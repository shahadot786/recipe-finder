import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";

const windowHeight = Dimensions.get("window").height;

const RecipeCard = ({ data }) => {
  //   console.log("data", data?.recipe?.label);
  const image = {
    uri: data?.recipe?.images?.LARGE?.url,
  };
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <ImageBackground
        imageStyle={{
          borderRadius: 20,
        }}
        source={image}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.content}>
          {/* label */}
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              color: "black",
              fontFamily: "cursive",
            }}
          >
            {data?.recipe?.label}
          </Text>
          {/* source */}
          <Text style={{ fontSize: 12, fontFamily: "serif", color: "#3b4435" }}>
            BBC Good Food
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({
  image: {
    width: "85%",
    height: windowHeight / 2,
    margin: 5,
  },
  content: {
    backgroundColor: "#1b1b1b21",
    width: "85%",
    height: 60,
    position: "absolute",
    bottom: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 10,
  },
});
