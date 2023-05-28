import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "../../components/card/RecipeCard";

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const BASE_URL = "https://api.edamam.com/api/recipes/v2";
  const APP_ID = "aae6de6c";
  const API_KEY = "6ece92c299d2dfa7c9ac97920e5c9a86";
  const TYPE = "public";
  const QUERY = "salad";
  //https://api.edamam.com/api/recipes/v2?app_id=aae6de6c&app_key=6ece92c299d2dfa7c9ac97920e5c9a86&type=public&q=salad
  const SEARCH_QUERY = `${BASE_URL}?app_id=${APP_ID}&app_key=${API_KEY}&type=${TYPE}&q=${QUERY}`;

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`${SEARCH_QUERY}`);
        setData(response?.data?.hits);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecipe();
  }, []);
  // console.log("Response", data);
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item, index }) => <RecipeCard key={index} data={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
