import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/Store"; 
import Home from "./src/screens/Home";
import Splash from "./src/screens/Splash";
import TodoDetailes from "./src/screens/TodoDetailes"; 
import CompletedTasks from "./src/screens/CompletedTasks";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="TodoDetailes" component={TodoDetailes} />
            <Stack.Screen name="CompletedTasks" component={CompletedTasks} />
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
}
