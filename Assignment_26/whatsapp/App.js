import { NavigationContainer } from '@react-navigation/native';
import {TabNavigator} from "./navigator"


const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;