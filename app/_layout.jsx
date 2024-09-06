import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text } from "react-native";

export default function RootLayout() {
  const [isOnboarded, setIsOnboarded] = useState(null);

  // Check if the user has completed onboarding
  useEffect(() => {
    const checkOnboardingStatus = async () => {
      const onboarded = await AsyncStorage.getItem("onboarded");
      setIsOnboarded(onboarded === "true");
    };

    checkOnboardingStatus();
  }, []);

  if (isOnboarded === null) {
    return <Text>Loading...</Text>; // Show a loading screen or spinner
  }

  return (
    <>
      <StatusBar backgroundColor="#FF123D" barStyle={"dark-content"} />
      <Stack screenOptions={{ headerShown: false }}>
        {isOnboarded ? (
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        )}
      </Stack>
    </>
  );
}
