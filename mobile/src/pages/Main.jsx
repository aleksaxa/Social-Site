import React, { useContext, useState } from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native"
import { StatusBar } from "expo-status-bar";
import { Context } from '../../App';
import { Header } from '../components/Header';
import { Dialogs } from '../components/Dialogs';

export const Main = () => {

    return (
        <View style={styles.main}>
            <Header />
            <Dialogs />
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
   main: {
    backgroundColor: '#6d6c6c',
    flex: 1,
    width: '100%',
   }

});