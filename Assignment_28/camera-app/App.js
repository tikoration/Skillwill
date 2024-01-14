import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";
import CameraScreen from "./CameraScreen";
import CapturedImage from "./CapturedImageScreen";
import ImageDisplay from "./ImageDisplayScreen";
import GalleryContextProvider from "./GalleryContextProvider";

const Stack = createStackNavigator();

const App = () => {
  return (
    <GalleryContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Camera"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Camera" component={CameraScreen} />
          <Stack.Screen
            name="CapturedImage"
            component={CapturedImage}
            options={({ route, navigation }) => ({
              headerShown: true,
              title: "Today",
              headerRight: () => (
                <Button
                  title="All Photos"
                  onPress={() =>
                    navigation.navigate("All Photos", { customProp: "value" })
                  }
                />
              ),
            })}
          />
          <Stack.Screen
            options={{ headerShown: true }}
            name="All Photos"
            component={ImageDisplay}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GalleryContextProvider>
  );
};

export default App;
