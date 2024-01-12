import { View, Text } from 'react-native';
import { commonStyles } from '../styles';
import { useNavigation } from '@react-navigation/native';

const ChatsScreen = () => {
  const {navigate} = useNavigation();

  const navigateToChatDetail = () => {
    navigate('User1Chat');
  };

  return (
    <View style={commonStyles.user}>
      <Text style={commonStyles.userName} onPress={navigateToChatDetail}>User 1 Chat</Text>
    </View>
  );
};

export default ChatsScreen;