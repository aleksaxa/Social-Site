import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Linking, TouchableOpacity } from 'react-native';
import { login, registration } from '../http/userAPI';
import { Context } from '../../App';
import { observer } from 'mobx-react';

export const Auth = observer(() => {
    const { user } = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleIsLogin = () => {
        setIsLogin(true);
    }
    const handleNoIsLogin = () => {
        setIsLogin(false);
    }
    const handleLogin = async () => {
        const userData = await login(email, password);
        if (userData) {
            user.setMainUser(userData);
            user.setIsAuth(true);
        } else {
            console.log('Вход не осуществлен')
        }
    }
    const handleRegistration = async () => {
        const userData = await registration(email, password, firstName, lastName);
        if (userData) {
            user.setMainUser(userData);
            user.setIsAuth(true);
        } else {
            console.log('Решистрация не осуществлена')
        }
    }
    return (
        <View style={styles.authPage}>
            <Text style={styles.title}>{!isLogin ? "Регистрация" : "Авторизация"}</Text>
            {!isLogin ?
                <View style={styles.blockInput}>
                    <TextInput
                        onChangeText={setEmail}
                        value={email} style={styles.inputEmail}
                        placeholder='Введите ваш Email' />
                    <TextInput
                        onChangeText={setPassword}
                        value={password} style={styles.inputPassword}
                        placeholder='Введите ваш Password' />
                    <TextInput
                        onChangeText={setFirstName}
                        value={firstName} style={styles.inputFirstName}
                        placeholder='Введите ваше Имя' />
                    <TextInput
                        onChangeText={setLastName}
                        value={lastName} style={styles.inputLastName}
                        placeholder='Введите вашу Фамилию' />
                </View>
                :
                <View>
                    <TextInput
                        onChangeText={setEmail}
                        value={email} style={styles.inputEmail}
                        placeholder='Введите ваш Email' />
                    <TextInput
                        onChangeText={setPassword}
                        value={password} style={styles.inputPassword}
                        placeholder='Введите ваш Password' />
                </View>
            }
            {!isLogin ?
                <View style={styles.blockIsLogin}>
                    <Text style={styles.isLoginText}>Есть аккаунт? </Text><TouchableOpacity onPress={handleIsLogin} style={styles.buttonLinks}><Text style={styles.buttonLinksText}>Войти</Text></TouchableOpacity>
                </View>
                :
                <View style={styles.blockIsLogin}>
                    <Text style={styles.isLoginText}>Нет аккаунта? </Text><TouchableOpacity onPress={handleNoIsLogin} style={styles.buttonLinks}><Text style={styles.buttonLinksText}>Зарегистрируйся</Text></TouchableOpacity>
                </View>
            }
            {!isLogin ?
            <View style={styles.blockButton}>
                <Button style={styles.buttonReg} title="Регистрация" onPress={handleRegistration} />
            </View>
            :
            <View style={styles.blockButton}>
                <Button style={styles.buttonLogin} title="Войти" onPress={handleLogin} />
            </View>
            }
            <StatusBar style="auto" />
        </View>
    )
});

const styles = StyleSheet.create({
    authPage: {
        backgroundColor: 'gray',
        width: '80%',
        height: '90%',
        justifyContent: "center",
    },
    title: {
        textAlign: 'center',
        fontSize: 35,
        color: '#ececec',
        fontStyle: 'italic',
        fontWeight: '600',
        marginBottom: 20,
    },
    blockInput: {
        backgroundColor: '',
        color: '#e2e6ec',
        marginBottom: 10,
    },
    inputEmail: {
        borderWidth: 1,
        borderRadius: 7,
        height: 45,
        backgroundColor: '#666d7a',
        color: '#e2e6ec',
        padding: 10,
        marginBottom: 10,
    },
    inputPassword: {
        borderWidth: 1,
        borderRadius: 7,
        height: 45,
        backgroundColor: '#666d7a',
        color: '#e2e6ec',
        padding: 10,
        marginBottom: 10,
    },
    inputFirstName: {
        borderWidth: 1,
        borderRadius: 7,
        height: 45,
        backgroundColor: '#666d7a',
        color: '#e2e6ec',
        padding: 10,
        marginBottom: 10,
    },
    inputLastName: {
        borderWidth: 1,
        borderRadius: 7,
        height: 45,
        backgroundColor: '#666d7a',
        color: '#e2e6ec',
        padding: 10,
        marginBottom: 10,
    },
    
    blockIsLogin: {
        flexDirection: 'row',
        marginBottom: 15,
        justifyContent: 'space-between',
    },
    isLoginText: {
        fontSize: 20,
    },
    buttonLinks: { 
    },
    buttonLinksText: {
        color: 'blue',
        fontSize: 20,
    },


    blockButton: {
        
        
    },
    buttonReg: {
        
    },
    buttonLogin: {
       
    }
});