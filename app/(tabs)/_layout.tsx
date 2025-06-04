import React from "react";
import "../global.css";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";

const TabBarIcon = ({ focused, title }: any) => {
  return (
    <>
      <Ionicons size={30} name={title} color={focused ? "white" : "grey"} />
    </>
  );
};

const _layout = () => {
  return (
    <LinearGradient
      colors={["#1A2A6C", "#B21F1F", "#FDBB2D"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 2 }}
      style={{ flex: 1, position: 'relative'}}
    >
      <Tabs
        screenOptions={{
            sceneStyle:{
                backgroundColor: 'transparent'
            },
          tabBarShowLabel: false,
          tabBarBackground: () => (
            <BlurView intensity={100} tint="dark" style={{ flex: 1 }} />
          ),
          tabBarIconStyle: {
            height: 40,
            width: 40,
            justifyContent: "center",
            alignItems: "center",
          },
          tabBarItemStyle: {
            width: "100%",
            height: "100%",
            justifyContent: "flex-start",
            alignItems: "center",
          },

          tabBarStyle: {
            // marginHorizontal: 20,
            // marginBottom: 36,
            //   height: 90,
            // borderRadius: 30,
            // borderWidth: 4,
            // borderColor: 'red'
            position: "absolute",
            backgroundColor: "transparent",
            borderTopWidth: 0,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} title={"home"} />
            ),
          }}
        />

        <Tabs.Screen
          name="search"
          options={{
            title: "Search",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} title={"search"} />
            ),
          }}
        />
        <Tabs.Screen
          name="saved"
          options={{
            title: "Saved",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} title={"bookmarks"} />
            ),
          }}
        />
      </Tabs>
    </LinearGradient>
  );
};

export default _layout;

/*
       

*/
