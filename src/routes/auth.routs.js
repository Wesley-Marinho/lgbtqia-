import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Password from '../pages/Password';
import SignIn from '../pages/SignIn';
const AuthStack = createStackNavigator();

function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="Home" component={Home} options={{ headerShown: false }} />

            <AuthStack.Screen name="Login" component={Login}
                options={{
                    headerStyle: {
                        backgroundColor: '#fff',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#000000'
                    },
                    headerTintColor: '#000000',
                    headerBackTitleVisible: false,
                    headerTitle: 'Login'
                }} />

            <AuthStack.Screen name="SignIn" component={SignIn}
                options={{
                    headerStyle: {
                        backgroundColor: '#fff',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#000000'
                    },
                    headerTintColor: '#000000',
                    headerBackTitleVisible: false,
                    headerTitle: 'Cadastrar'
                }} />

            <AuthStack.Screen name="Password" component={Password}
                options={{
                    headerStyle: {
                        backgroundColor: '#fff',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#000000'
                    },
                    headerTintColor: '#000000',
                    headerBackTitleVisible: false,
                    headerTitle: 'Recuperar senha'
                }} />
        </AuthStack.Navigator>
    );
}

export default AuthRoutes;