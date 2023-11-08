import { View, Text ,Image} from 'react-native'
import React from 'react'
import tw from 'twrnc';
export default function features() {
  return (
    <View style={tw`mb-4`}>
      <Text style={tw`font-semibold text-gray-700 text-3xl mb-3`}>Features</Text>
      <View style={tw`bg-emerald-200 p-4 rounded-xl w-100 mb-3`}>
        <View style={tw`flex-row items-center mb-1`}>
            <Image style={tw`h-8 w-8`} source={require('../../assets/images/chatgptIcon.png')}></Image>
            <Text style={tw`font-semibold text-gray-700 text-2xl`}>ChatGPT</Text>
        </View>
        <Text style={tw`text-gray-700 font-medium`}>ChatGPT can provide you with instant and knowledgeable responses, assist you with creative ideas on a wide range of topics.</Text>
      </View>

      <View style={tw`bg-purple-200 p-4 rounded-xl w-100 mb-3`}>
        <View style={tw`flex-row items-center mb-1`}>
            <Image style={tw`h-8 w-8`} source={require('../../assets/images/dalleIcon.png')}></Image>
            <Text style={tw`font-semibold text-gray-700 text-2xl`}>DALL-E</Text>
        </View>
        <Text style={tw`text-gray-700 font-medium`}>DALL-E can generate imaginative and diverse images from textual descriptions, expanding the boundaries of visual creativity.</Text>
      </View>

      <View style={tw`bg-cyan-200 p-4 rounded-xl w-100 mb-3`}>
        <View style={tw`flex-row items-center mb-1`}>
            <Image style={tw`h-8 w-8`} source={require('../../assets/images/smartaiIcon.png')}></Image>
            <Text style={tw`font-semibold text-gray-700 text-2xl`}>Smart AI</Text>
        </View>
        <Text style={tw`text-gray-700 font-medium`}>A powerful voice assistant with the abilities of ChatGPT and Dall-E, providing you the best of both worlds.</Text>
      </View>
    </View>
  )
}