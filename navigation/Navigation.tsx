import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";
import React from "react";
import AstroidDetails from '../screens/astroidDetails';
import Home from '../screens/home';

const Stack=createStackNavigator();

const Navigation =()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name="home"
                component={Home}
                options={{title:"Astroid Search"}}/>
            <Stack.Screen
             name='Astroid'
             component={AstroidDetails}
             options={{title:"Astroid Details"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Navigation;