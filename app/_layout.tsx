import { Stack } from "expo-router";
import {Text} from 'react-native'
// import { ClerkProvider} from "@clerk/clerk-expo";


export default function RootLayout() {
  return (
    // <ClerkProvider publishableKey={process.env.EXPO_CLERK_PUBLISHABLE_KEY}>
      
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      
          // <Text>Playground</Text>
    // </ClerkProvider>
  );
}
