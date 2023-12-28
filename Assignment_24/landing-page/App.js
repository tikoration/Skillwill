import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.mainUsername}>tikoration</Text>
          <Image style={styles.mainPhoto} source={require('./assets/profile-photo.jpg')}/>
        </View>
        <View style={styles.following}> 
          <Text>120</Text>
          <Text>836</Text>
          <Text>487</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    gap: 10,
    left: 17
  },
  mainUsername: {
    fontSize: 24,
    fontWeight: "bold"
  },
  mainPhoto: {
    borderRadius: "50%",
    width: 100,
    height: 100
  },
  following: {

  }
});
