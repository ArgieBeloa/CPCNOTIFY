
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {



  return (
  
    <SafeAreaProvider>
      <Stack>
       
          <Stack.Screen name = "index" options = {{ headerShown: false, title: 'Index'}} />
          <Stack.Screen name = "home" options = {{ headerShown: true, title: 'Home'}} />
          <Stack.Screen name = "register" options = {{ headerShown: true, title: 'register'}} />

          <Stack.Screen name = "+not-found" options = {{headerShown: false}} />
           
      </Stack>
    </SafeAreaProvider>
     
  )
}
