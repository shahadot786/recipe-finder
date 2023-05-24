import React from "react";
import strings from "../../strings";
import SignInScreen from "../../screens/Auth/SignInScreen";
import SignUpScreen from "../../screens/Auth/SignUpScreen";

const AuthStack = (Stack) => {
  return (
    <>
      <Stack.Screen name={strings.SignInScreen} component={SignInScreen} />
      <Stack.Screen name={strings.SignUpScreen} component={SignUpScreen} />
    </>
  );
};

export default AuthStack;
