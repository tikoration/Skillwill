import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Instagram from './Instagram';

export default function App() {

  const onClick = () => {
    console.log("this does nothing")
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Instagram onClick={onClick}/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "white",
    justifyContent: 'center',
  }
})
