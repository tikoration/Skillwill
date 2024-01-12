import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from "react-native";

import contacts, { compareNames } from "./contacts";
import SearchContact from "./SearchContact";

export default function App() {
  const [showContacts, setShowContacts] = useState(false);

  const toggleContacts = () => {
    setShowContacts((prev) => !prev);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Open Contacts" onPress={toggleContacts} />      
      {showContacts && <SearchContact contacts={contacts}/>}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight + 10,
  },
});