import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import global from "../../style/global.js";
import style from './style.js';
import AppLoading from 'expo-app-loading';
import { useFonts, NovaMono_400Regular } from '@expo-google-fonts/nova-mono';

const font = StyleSheet.create({
    tittle: {
        color: '#000000',
        fontSize: 25,
        textAlign: 'center',
        paddingBottom: 20,
        fontFamily: 'NovaMono_400Regular',
    },
    link:{
        color: '#ffffff',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'NovaMono_400Regular',
    },
    logging:{
        color: '#000000',
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'NovaMono_400Regular',
    }
});

export default function app() {
    const navigation = useNavigation();
    let [fontsLoaded] = useFonts({
        NovaMono_400Regular,
    });

    if (!fontsLoaded) {
        return <AppLoading />;

    } else {
        return (
            <LinearGradient colors={['#ffffff', '#3202D1',]}
                style={global.LinearGradientHome}>


                <View style={style.containerImg}>


                    <Text style={font.tittle}>Seja sua propria gay</Text>
                </View>

                <View style={style.containerImg}>
                    <TouchableOpacity style={style.buttonCriar}
                        onPress={() => navigation.navigate('SignIn')}>
                        <Text style={font.link}>Criar Conta</Text>
                    </TouchableOpacity>
                </View>

                <View style={style.container}>
                    <Text style={font.logging}>Já tem uma conta?   </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}>
                        <Text style={font.link}>Entrar</Text>
                    </TouchableOpacity>
                </View>

            </LinearGradient>
        );
    }
}