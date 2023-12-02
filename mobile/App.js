import React, { createContext } from 'react';
import { StyleSheet } from 'react-native';
import UserStore from './src/store/UserStore';
import MessageStore from './src/store/MessageStore';
import { Apps } from './Apps';


export const Context = createContext();

export default function App() {
  return (
      <Context.Provider value={{ user: new UserStore(), message: new MessageStore() }}>
        <Apps />
      </Context.Provider>
  );
}

const styles = StyleSheet.create({
  
});

