import React from "react";
import strings from "../../strings";
import HomeScreen from "../../screens/Home/HomeScreen";

const HomeStack = (Stack) => {
  return (
    <>
      <Stack.Screen name={strings.HomeScreen} component={HomeScreen} />
    </>
  );
};

export default HomeStack;
