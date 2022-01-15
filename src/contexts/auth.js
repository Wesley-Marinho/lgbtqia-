import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import firebase from '../database/firebaseConnection';
export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadingAuth, setLoadingAuth] = useState(false);


    async function handleMessage(tittle, contact, vacancies, system) {
        let key = await firebase.database().ref('chat').push().key;
        await firebase.database().ref('chat').child(key).set({
            tittle: tittle,
            contact: contact,
            vacancies: vacancies,
            system: system,
        })
    }

    useEffect(() => {
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem('Auth_user');
            if (storageUser) {
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
            setLoading(false);
        }
        loadStorage();
    }, []);

    async function signIn(email, password) {
        setLoadingAuth(true);
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.uid;
                await firebase.database().ref('users').child(uid).once('value')
                    .then((snapshot) => {
                        let data = {
                            uid: uid,
                            email: snapshot.val().email,
                        };
                        setUser(data);
                        storageUser(data);
                        setLoadingAuth(false);
                    })
            })
            .catch(() => {
                Alert.alert('Opa!', 'Algo deu errado.');
                setLoadingAuth(false);
            });
    }

    async function resetPassword(Email) {
        await firebase.auth().sendPasswordResetEmail(Email)
            .then(() => {
                Alert.alert('Atenção!', 'E-mail enviado.');
            }).catch(() => {
                Alert.alert('Opa!', 'Algo deu errado.');
            })
    }

    async function signUp(email, password) {
        setLoadingAuth(true);
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.uid;
                await firebase.database().ref('users').child(uid).set({
                    email: email
                })
                    .then(() => {
                        let data = {
                            uid: uid,
                            email: value.user.email,
                        };
                        setUser(data);
                        storageUser(data);
                        setLoadingAuth(false);
                    })
            })
            .catch(() => {
                Alert.alert('Opa!', 'Algo deu errado.');
                setLoadingAuth(false);
            });
    }

    async function storageUser(data) {
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    }

    async function signOut() {
        await firebase.auth().signOut();
        await AsyncStorage.clear()
            .then(() => {
                setUser(null);
            })
    }


   

    return (
        <AuthContext.Provider value={{
            signed: !!user, user, loading, 
            signUp: signUp, resetPassword, 
            signIn: signIn, signOut, loadingAuth, 
            handleMessage, 
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;