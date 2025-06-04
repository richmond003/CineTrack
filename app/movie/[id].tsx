import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  FlatList,
  ImageBackground,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import useFetch from "@/service/useFetch";
import { fetchDetails } from "@/service/api";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Avatar } from "@rneui/themed";
import Section from "@/components/Section";

const DetailScreen = () => {
  const { id, type } = useLocalSearchParams();
  const { data, loading, error } = useFetch(() =>
    fetchDetails({ id: id, type: type })
  );

  const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <LinearGradient
      colors={["#1A2A6C", "#B21F1F", "#FDBB2D"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 5 }}
      style={{ flex: 1, position: "relative" }}
    >
      <ScrollView className="flex-1 " showsVerticalScrollIndicator={false}>
        {loading ? (
          <ActivityIndicator
            size={"large"}
            color={"#0000ff"}
            className="items-center align-middle"
          />
        ) : error ? (
          <Text>Error: {error?.message}</Text>
        ) : (
          <>
            <ImageBackground
              source={{
                uri: `https://image.tmdb.org/t/p/w500${data?.details.backdrop_path || data?.details.poster_path}`,
              }}
              style={{
                width: "100%",
                height: 370,
                justifyContent: "flex-end",
              }}
              resizeMode= 'cover'
            >
              <View
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  paddingVertical: 6,
                  paddingHorizontal: 10,
                }}
              >
                <Text className="text-4xl font-extrabold text-white">
                  {data?.details?.title || data?.details?.name || "Title"}
                </Text>
                <Text className="font-medium text-lg text-white">
                  {data?.details?.tagline}
                </Text>
              </View>
            </ImageBackground>
            <View className="flex-col gap-3 w-full px-2">
              <Text className="text-white text-2xl font-bold">StoryLine</Text>
              <Text className="text-white font-light text-xl text-justify">
                {data?.details.overview}
              </Text>
            </View>

            <FlatList
              data={data?.credits.filter(
                (item: any) =>
                  item.known_for_department === "Acting" && item.profile_path
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <Avatar
                  size={70}
                  rounded
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${item?.profile_path}`,
                  }}
                />
              )}
              contentContainerStyle={{
                paddingHorizontal: 2,
                justifyContent: "flex-start",
              }}
              // keyExtractor={(show, i) => show?.cast_id.toString()}
              ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
              className="mt-7"
            />
            <View className="mt-10 " style={{ marginBottom: 40 }}>
              <Section
                data={data?.similar.filter((item: any) => item.poster_path)}
                title={"Similar"}
                type={type}
              />
            </View>
          </>
        )}
      </ScrollView>
    </LinearGradient>
  );
};

export default DetailScreen;

/* 

<View>
                  <Text className="text-4xl font-extrabold text-white">{data?.details?.title||data?.details?.name||'Title'}</Text>
                  <Text className="font-medium text-lg text-white">{data?.details?.tagline}</Text>
                </View>


*/
