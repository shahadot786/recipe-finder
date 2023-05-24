import React, { useState } from "react";
import AuthStack from "./Auth/AuthStack";
import HomeStack from "./Home/HomeStack";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Routes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <>{isLoggedIn ? <>{HomeStack(Stack)}</> : <>{AuthStack(Stack)}</>}</>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
