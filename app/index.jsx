import { Redirect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Text } from "react-native";

export default function Index() {
  const [isOnboarded, setIsOnboarded] = useState(null);

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      const onboarded = await AsyncStorage.getItem("onboarded");
      setIsOnboarded(onboarded === "true");
    };

    checkOnboardingStatus();
  }, []);

  if (isOnboarded === null) {
    return <Text>Loading...</Text>;
  }

  return isOnboarded ? (
    <Redirect href="/home" />
  ) : (
    <Redirect href="/onboarding" />
  );
}
