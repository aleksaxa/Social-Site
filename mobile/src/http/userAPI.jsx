
import { jwtDecode } from "jwt-decode";
import { $authHost, $host } from ".";
import AsyncStorage from '@react-native-async-storage/async-storage';
import "core-js/stable/atob";


export const registration = async (email, password, lastName, firstName) => {
    try {
        const { data } = await $host.post('api/user/registration', {
            email,
            password,
            lastName,
            firstName,
            role: 'USER',
        });
        await AsyncStorage.setItem('token', data.token);
        return jwtDecode(data.token);
    } catch (error) {
        console.error("Ошибка при регистрации:", error);
    }
};

export const login = async (email, password) => {
    try {
        const { data } = await $host.post('api/user/login', {
            email, 
            password
        });
        
        await AsyncStorage.setItem('token', data.token);
        return jwtDecode(data.token);
    } catch (error) {
        console.error("Ошибка при авторизации:", error);
    }
};

export const check = async () => {
    const { data } = await $authHost.get('api/user/auth',)
    AsyncStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const getALLUsers = async () => {
    const { data } = await $host.get('api/user')
    return data
}
export const updateUserName = async (id, userData) => {
    const { data } = await $authHost.put('api/user/info/' + id, userData)
    AsyncStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}
export const updateUserAvatar = async (id, userData) => {
    const { data } = await $authHost.put('api/user/avatar/' + id, userData)
    AsyncStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}
export const getUserById = async (userId) => {
    try {
        const allUsers = await getALLUsers();
        const user = allUsers.find((user) => user.id === userId);
        return user;
    } catch (error) {
        console.error("Ошибка при получении пользователя по id:", error);
    }
};
