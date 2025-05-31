import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const Card = ({
  id,
  title,
  name,
  poster_path,
  release_date,
  first_air_date,
  vote_average,
  isCols,
  media_type,
  manual_type
}: Show) => {
  return (
    <View className={isCols ? "w-[31%] h-60" : "w-40 h-60"}>
      <Link
        href={{
          pathname: "/movie/[id]",
          params: { id: id, type: media_type || manual_type },
        }}
        asChild
      >
        <TouchableOpacity>
          <Image
            source={{
              uri: poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : "https://i.pinimg.com/736x/c4/c7/69/c4c7697549a8c6a1c3f26a743caa75e4.jpg",
            }}
            className="h-[85%] w-full rounded-lg"
            resizeMode="stretch"
          />
          <View className="px-2">
            <Text numberOfLines={1} className="text-white text-xs  font-medium">
              {title || name}
            </Text>
            <View className="flex-row  justify-between items-center">
              <View className="flex-row items-center justify-start gap-1">
                <Ionicons name={"star"} color={"yellow"} size={10} />
                <Text className="text-gray-400 text-xs">
                  {(vote_average / 2).toFixed(1)}
                </Text>
              </View>
              <Text className="text-gray-400 text-xs">
                {(release_date || first_air_date)?.split("-")[0]}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Card;
