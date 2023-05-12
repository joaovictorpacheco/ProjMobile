import { CardStyleInterpolators } from "@react-navigation/stack";
import { NavigationContainer, StackRouter } from "@react-navigation/native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import React from "react";
import { Router } from "./src/screens/routes";

const options ={
  gestureEnabled: true,
  gestureDirection:'horizontal',
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false
}
const Stack = createSharedElementStackNavigator();

const RootStack = () => {
    return(
      <Stack.Navigator screenOptions={options}>
        <Stack.Screen name= "Routes" component={Routes}/>
        <Stack.Screen name= "Cadastro" component={Registro}/>
        <Stack.Screen name= "Login" component={Login}/>
        <Stack.Screen name= "Logoff" component={Logoff}/>
      </Stack.Navigator>
    )
}
export default function App() {
  return (
    <NavigationContainer>
      <RootStack/>
    </NavigationContainer>
  );
}


