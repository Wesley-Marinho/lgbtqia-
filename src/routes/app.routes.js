import { FontAwesome, FontAwesome5, AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import LogOut from '../pages/LogOut';

const Tab = createBottomTabNavigator();
const AuthStack = createStackNavigator();

function Tabs() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    backgroundColor: '#3202D1',
                    border: 0,
                },
                labelStyle: {
                    fontWeight: 'bold'
                },
                activeTintColor: '#3202D1',
                activeBackgroundColor: '#000000',
                inactiveTintColor: '#ffffff',
            }}>
            <Tab.Screen name="1" component={LogOut}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="hat-wizard" color={color} size={size} />
                    )
                }} />

            <Tab.Screen name="2" component={LogOut}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="user" color={color} size={size} />

                    )
                }} />

            <Tab.Screen name="3" component={LogOut} options={{
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name="notification" size={size * 1.4} color={color} />
                )
            }} />

            <Tab.Screen name="Sair" component={LogOut} options={{
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name='power-off' color={color} size={size} />
                )
            }} />

        </Tab.Navigator>
    );
}

function AppRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="Home" component={Tabs}
                options={{ headerShown: false }} />

           

        </AuthStack.Navigator>
    );
}

export default AppRoutes;