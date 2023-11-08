import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import Features from '../components/features';
import { dummyMessages } from '../constants';
import * as Permissions from 'expo-permissions';
import * as Speech from 'expo-speech';

export default function HomeScreen() {
  const [messages, setMessages] = useState([]);
  const [recording, setRecording] = useState(false);
  const [speaking, setSpeaking] = useState(true);

  const clear = () => {
    setMessages([]);
  };

 

  return (
    <View style={tw`flex-1 justify-start bg-white`}>
      <SafeAreaView style={tw`justify-center items-center`}>
        <Image
          source={require('../../assets/images/bot.png')}
          style={tw`w-40 h-50 mb-7`}
        />
      </SafeAreaView>
      <View style={tw`flex-1 justify-start bg-white`}>
        {messages.length > 0 ? (
          <View style={tw`flex-1`}>
            <Text style={tw`text-gray-700 font-semibold ml-1 text-2xl mb-2`}>
              Assistant
            </Text>
            <View style={tw`bg-neutral-200 rounded-3xl p-4 h-90 ml-3 mr-2`}>
              <ScrollView
                bounces={false}
                style={tw`mb-3`}
                showsVerticalScrollIndicator={false}>
                {/* Your message rendering logic */}
              </ScrollView>
            </View>
          </View>
        ) : (
          <Features />
        )}

        <View style={tw`flex justify-center items-center`}>
          {recording ? (
            <TouchableOpacity>
              <Image
                style={tw`rounded-full w-30 h-30`}
                source={require('../../assets/images/voiceLoading.gif')}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity >
              <Image
                style={tw`rounded-full w-30 h-30`}
                source={require('../../assets/images/recordingIcon.png')}
              />
            </TouchableOpacity>
          )}

          {messages.length > 0 && (
            <TouchableOpacity
              onPress={clear}
              style={tw`bg-neutral-400 rounded-3xl p-2 absolute right-10`}>
              <Text style={tw`text-white font-semibold`}>Clear</Text>
            </TouchableOpacity>
          )}

          {speaking && (
            <TouchableOpacity
              style={tw`bg-red-400 rounded-3xl p-2 absolute left-10`}>
              <Text style={tw`text-white font-semibold`}>Stop</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}
