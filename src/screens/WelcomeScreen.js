import { View, Text ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
export default function WelcomeScreen() {
  const navigation= useNavigation();
  return (
    <SafeAreaView style={tw`flex-1 justify-center items-center bg-white`}>
      <Text style={tw`text-5xl font-bold text-gray-700 mb-2`}>Jarvis</Text>
      <Text style={tw`text-gray-600 font-semibold`}>The Future is here,powered by AI</Text>
      <Image source={require('../../assets/images/welcome.png')} style={tw`w-72 h-72 mb-20`} />
      <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={tw`bg-emerald-600 mx-5 p-4 rounded-2xl w-60 h-17`}>
        <Text style={tw`text-white text-center text-2xl`}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}