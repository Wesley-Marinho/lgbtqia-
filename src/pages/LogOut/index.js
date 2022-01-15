import { LinearGradient } from "expo-linear-gradient";
import React, { useContext } from 'react';
import { Alert, Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import global from "../../style/global.js";
import style from './style.js';
import AppLoading from 'expo-app-loading';
import { useFonts, NovaMono_400Regular } from '@expo-google-fonts/nova-mono';
export default function App() {
    let [fontsLoaded] = useFonts({
        NovaMono_400Regular,
    });

    const font = StyleSheet.create({
        link: {
            color: '#ffffff',
            fontSize: 25,
            textAlign: 'center',
            fontFamily: 'NovaMono_400Regular',
        },
    });

    const { signOut } = useContext(AuthContext);
    function Alerta() {
        Alert.alert(
            "Cuidado!",
            "Deseja mesmo sair?",
            [
                {
                    text: "Sim", onPress: () => signOut(),
                },
                {
                    text: "Não",
                }
            ],
        )
    }

    if (!fontsLoaded) {
        return <AppLoading />;

    } else {
        return (
            <LinearGradient colors={['#ffffff', '#3202D1',]}
                style={global.LinearGradient}>
                <View style={style.container}>
                   
                    <View style={style.container}>
                        <TouchableOpacity
                            style={style.button}
                            onPress={Alerta}>
                            <Text style={font.link}>Deslogar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        );
    }
}