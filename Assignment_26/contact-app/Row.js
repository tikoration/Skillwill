import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Row = ({ name, phone }) => (
  <View style={styles.row}>
    <Text>{name}</Text>
    <Text>{phone}</Text>
  </View>
);

export default Row;

const styles = StyleSheet.create({
  row: {
    margin: 10,
    padding: 10,
    width: "80%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'grey',
    alignItems: 'center'
  },
});