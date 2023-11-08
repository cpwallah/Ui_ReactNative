import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    
     <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Welcome'>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Welcome' component={WelcomeScreen}/>

      </Stack.Navigator>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
