import React, { useContext, useEffect } from 'react'
import { Image, StyleSheet, Text, View } from "react-native"
import { Context } from '../../App'
import { getALLUsers } from '../http/userAPI';
import { observer } from 'mobx-react';
import DefaultAvatar from '../assets/DefaultAvatar.png'

export const Dialogs = observer(() => {
    const { user } = useContext(Context);

    useEffect(() => {
        getALLUsers().then(usersData => {
            user.setUsers(usersData);
        });
    }, []);
    return (
        <View style={styles.blockDialogs}>
            {user.users.map((userData, index) => {
                if (userData.id === user.mainUser.id) {
                    return null;
                }
                return (
                    <View key={index} style={styles.dialogs}>
                        <Image source={!userData.img ? DefaultAvatar : 'http://192.168.1.52:5000/' + userData.img} style={styles.img}/>
                        <Text style={styles.name}>{userData.lastName} {userData.firstName}</Text>
                    </View>
                );
            })}
        </View>
    )
});

const styles = StyleSheet.create({
    blockDialogs: {
        //paddingBottom: 10,
        //backgroundColor: '#6949ab',
        
    },
    dialogs: {
        flexDirection: 'row',
        backgroundColor: '#5c5a5a',
        color: '#fff',
        height: 70,
        margin: 1,
        alignItems: 'center'
    },
    img: {
        marginLeft: 10,
        marginRight: 15,
        height: 55,
        width: 55,
        //backgroundColor: 'yellow',
    },
    name: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 20,
        fontStyle: 'italic'
    },
});