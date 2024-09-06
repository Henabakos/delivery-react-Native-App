import { View, Text } from "react-native";
import React from "react";

const Pagination = ({ data }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={data == 1 ? styles.active : styles.pagination}></View>
      <View style={data == 2 ? styles.active : styles.pagination}></View>
      <View style={data == 3 ? styles.active : styles.pagination}></View>
    </View>
  );
};

export default Pagination;

const styles = {
  pagination: {
    width: 20,
    height: 4,
    borderRadius: 5,
    backgroundColor: "#FFA0B1",
  },
  active: {
    width: 20,
    height: 4,
    borderRadius: 5,
    backgroundColor: "#FF123D",
  },
};
