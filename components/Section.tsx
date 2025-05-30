import { View, Text, FlatList } from "react-native";
import React from "react";
import Card from "./Card";
const Section = ({ data, title }: any) => {
  return (
    <View className="flex-col gap-1">
      <Text className="text-white text-2xl font-bold pl-2">{title}</Text>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(show, i) => show?.id.toString()}
        renderItem={({item}) => (<Card {...item}/>)}
        contentContainerStyle={{
          paddingHorizontal: 2,
          // paddingLeft: 2,
          justifyContent: "flex-start",
          overflowX: "scroll",
          gap: 10,
        }}
        // ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      />
    </View>
  );
};

export default Section;
