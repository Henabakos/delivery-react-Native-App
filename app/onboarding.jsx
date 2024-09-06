import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import data from "../components/onbording/data";
import OnbordingItems from "../components/onbording/OnbordingItems";
import { useRef, useState } from "react";

export default function Onboarding() {
  const flatListRef = useRef(null);

  const handleNext = ({ index }) => {
    flatListRef.current.scrollToIndex({
      index: index + 1,
      animated: true,
    });
  };
  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={({ item, index }) => (
          <OnbordingItems item={item} onNext={() => handleNext({ index })} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment="center"
        scrollEventThrottle={16}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
  },
  pagination: {
    position: "absolute",
    // bottom: 40,
    left: 0,
    top: 0,
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#fff",
  },
});
