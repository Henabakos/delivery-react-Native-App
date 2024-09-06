import { useRouter } from "expo-router";
import React from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import Pagination from "../../components/onbording/Pagination";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width, height } = Dimensions.get("screen");

const OnboardingItems = ({ item, onNext, currentIndex }) => {
  const router = useRouter();
  const completeOnboarding = async () => {
    await AsyncStorage.setItem("onboarded", "true");
    router.replace("/home");
  };
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.overlay}>
        <Image source={item.icon} style={styles.icon} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Pagination style={styles.pagination} data={item.id} />
        {item.id == 3 ? (
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={completeOnboarding}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <TouchableOpacity style={styles.button} onPress={onNext}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      {item.id !== 3 && <Text style={styles.skip}>Skip</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
  },
  image: {
    width: "100%",
    resizeMode: "contain",
  },
  overlay: {
    position: "absolute",
    height: "40%",
    bottom: 50,
    left: 0,
    right: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 0.5,
    backgroundColor: "#fff",
  },
  icon: {
    width: 31,
    height: 36.5,
    marginBottom: 20,
    marginTop: 20,
    alignSelf: "center",
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "900",
    marginBottom: 10,
    textAlign: "center",
    color: "#FF123D",
  },
  description: {
    fontSize: 14,
    fontWeight: "medium",
    textAlign: "center",
    width: "80%",
    alignSelf: "center",
    marginBottom: 20,
  },
  skip: {
    position: "absolute",
    top: 40,
    right: 20,
    color: "#FF123D",
    fontSize: 14,
    fontWeight: "medium",
    width: "80%",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#FF123D",
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: "center",
    width: "40%",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "medium",
  },
});

export default OnboardingItems;
