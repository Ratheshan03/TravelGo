import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectOrigin, setOrigin } from "../slices/navSlice";
import React from "react";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Oulfa , Casablanca",
    coordinate: { longi: 3.34, lati: 2.4566 },
  },
  {
    id: "456",
    icon: "briefcase",
    location: "work",
    destination: "Nearshore ,Casablanca",
    coordinate: { longi: 32.34, lati: 12.4566 },
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
      )}
      renderItem={({
        item: { location, destination, icon, coordinate },
        item,
      }) => (
        <TouchableOpacity
          style={tw`flex-row items-center p-5`}
          onPress={() => {
            setOrigin(coordinate);
            console.log("clicked", coordinate, " origin", origin);
          }}
        >
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
