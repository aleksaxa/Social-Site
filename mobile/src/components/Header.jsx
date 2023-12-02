import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View } from "react-native"
import { Context } from '../../App'

export const Header = () => {
    const { user } = useContext(Context);


    const handleLogOut = async () => {
        try {
            user.setIsAuth(false);
        } catch (error) {
            console.error("Ошибка выхода:", error);
        }
    }
    return (
        <View style={styles.header}>
            <Button style={styles.buttonMenu} title='Выйти' onPress={handleLogOut} />
            <Button style={styles.buttonSearch} title='Поиск' onPress={handleLogOut} />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 95,
        paddingBottom: 10,
        backgroundColor: '#4b4b4b',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 45,
        paddingLeft: 15,
        paddingRight: 15,
    },
    buttonMenu: {
        
    },
    buttonSearch: {
        
    },
});