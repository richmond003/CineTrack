import { View, Text, TextInput, Platform } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

interface Search{
  onChangeText?: (text: string)=> void,
  value?: string,
  onPress?: () => void
}

const SearchBar = ({onChangeText, value, onPress}: Search) => {
  return (
    <View
      className={`border-2 border-[#ab8bff] rounded-full px-5  ${Platform.OS === 'ios'?'py-4':'py-2'} mx-4 flex-row justify-start items-center gap-3`}
    >
      <Ionicons
        name="search"
        size={20}
        color={'#ab8bff'}
      />
      <TextInput
        onChangeText={onChangeText}
        value={value}
        placeholder="Search for a movies....."
        placeholderTextColor={'#ab8bff'}
        onPress={onPress}
        className="flex-1 text-white"
      />
    </View>
  );
};

export default SearchBar;
