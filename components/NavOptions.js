import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList, Image, TouchableOpacity } from "react-native-web";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order fodd",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen", //Change in future
  },
];

const NavOptions = () => {
  return (
    <FlatList
      data={data}
      keyExtracter={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
