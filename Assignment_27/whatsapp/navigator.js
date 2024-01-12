import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import UpdatesScreen from './screens/UpdatesScreen';
import CallsScreen from './screens/CallsScreen.js';
import CommunitiesScreen from './screens/CommunitiesScreen';
import ChatsScreen from './screens/ChatsScreen';
import SettingsScreen from './screens/SettingsScreen';
import User1Chat from './screens/User1Chat';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ChatsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Chats" component={ChatsScreen} />
    <Stack.Screen name="User1Chat" component={User1Chat} />
  </Stack.Navigator>
);

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Updates') {
            iconName = focused ? 'chatbubble-sharp' : 'logo-whatsapp';
          } else if (route.name === 'Calls') {
            iconName = focused ? 'call' : 'call-outline';
          } else if (route.name === 'Communities') {
            iconName = focused ? 'people-sharp' : 'people-outline';
          } else if (route.name === 'Chats') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'cog' : 'cog-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Updates" component={UpdatesScreen} />
      <Tab.Screen name="Calls" component={CallsScreen} />
      <Tab.Screen name="Communities" component={CommunitiesScreen} />
      <Tab.Screen options={{
          headerShown: false}} name="Chats" component={ChatsStack} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
