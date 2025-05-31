import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import useFetch from "@/service/useFetch";
import { fetchData } from "@/service/api";
import Card from "@/components/Card";
import SearchBar from "@/components/SearchBar";
const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, loading, error, refetchData, reset } = useFetch(
    () => fetchData({ query: searchQuery }),
    false
  );

  useEffect(() => {
    const timedRequest = setTimeout(async () => {
      // console.log(data)
      if (searchQuery.trim()) {
        await refetchData();
      } else {
        reset();
      }
    }, 500);
    return () => clearTimeout(timedRequest);
  }, [searchQuery]);

  return (
    <View className=" flex-1 pt-20">
      <FlatList
        data={data?.filter((item: any) => item.poster_path)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Card {...item} isCols={true} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={{
          alignContent: "center",
          justifyContent: "space-between",
          gap: 10,
          marginVertical: 10,
          marginHorizontal: 10,
        }}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        ListHeaderComponent={
          <>
            <View className="w-full  mb-5 ">
              <SearchBar
                value={searchQuery}
                onChangeText={(text: string) => {
                  setSearchQuery(text);
                }}
              />
            </View>
            <View className="mx-6 ">
              {loading && (
                <ActivityIndicator
                  size={"large"}
                  color="#0000ff"
                  className="mt-50"
                />
              )}
              {error && (
                <Text className="text-red-500">Error : {error.message}</Text>
              )}

              {!loading && !error && searchQuery.trim() && (
                <Text className="text-white font-medium text-xl w-full  overflow-hidden">
                  Search results for{" "}
                  <Text
                    className="text-orange-500 font-semibold"
                    numberOfLines={1}
                  >
                    {searchQuery}
                  </Text>
                </Text>
              )}
              {}
            </View>
          </>
        }
        ListEmptyComponent={
          data?.length <= 0 && searchQuery.trim().length > 0 ? (
            <>
              <View className="justify-center items-center">
                <Text className="text-white font-extrabold text-2xl text-center">
                  No Result for {searchQuery}
                </Text>
              </View>
            </>
          ) : searchQuery.trim().length <= 0 ? (
            <Text className="text-center place-content-center">
              Search for a Movie
            </Text>
          ) : null
        }
      />
    </View>
  );
};

export default Search;
