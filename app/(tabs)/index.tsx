import SearchBar from "@/components/SearchBar";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  View,
} from "react-native";
import Section from "@/components/Section";
import useFetch from "@/service/useFetch";
import { fetchData } from "@/service/api";

export default function Index() {
  const { data, loading, error: dataError } = useFetch(() => fetchData({}));
  
  return (
    <View className="flex-1">
      <ScrollView
        className="flex-1"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        {loading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            className="items-center place-content-center"
          />
        ) : dataError ? (
          <Text className="text-center align-middle">
            Error: {dataError?.message}
          </Text>
        ) : (
          <View className=" flex-col gap-3 mt-20 mb-20 pb-5">
            <SearchBar />
            <View className="mt-2" />
            <Section
              data={data?.trendingMovies}
              title={"Trending Movies"}
              type="movie"
            />
            <Section
              data={data?.trendingTvShows}
              title={"Trending Tv Shows"}
              type="tv"
            />
            <Section
              data={data?.topRatedMovies}
              title={"Top Rated Movies"}
              type="movie"
            />
            <Section
              data={data?.topRatedTvShows}
              title={"Top Rated Tv Shows"}
              type="tv"
            />
            <Section data={data?.upComming} title={"Up Coming"} type="movie" />
          </View>
        )}
      </ScrollView>
    </View>
  );
}
