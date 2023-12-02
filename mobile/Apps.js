import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Context } from "./App";
import { Auth } from './src/pages/Auth';
import { Main } from './src/pages/Main';
import { observer } from "mobx-react";

export const Apps = observer(() => {
    const { user } = useContext(Context);
  return (
    <View style={styles.container}>{!user.isAuth ? <Auth /> : <Main />}</View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
});
