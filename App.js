import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import Splash from "./src/screens/Splash";
import TodoDetailes from "./src/screens/TodoDetailes";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TodoDetailes" component={TodoDetailes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
