import { NavigationContainer } from "@react-navigation/native";

// BottomTab navigation

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const BottomTab = createBottomTabNavigator();
import Home from "@/screens/Home";

function BottomTabNavigator() {
    return (
        <BottomTab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <BottomTab.Screen name="Home" component={Home} />
            <BottomTab.Screen name="Discover" component={Home} />
            <BottomTab.Screen name="List" component={Home} />
            <BottomTab.Screen name="Settings" component={Home} />
        </BottomTab.Navigator>
    );
}
// BottomTab navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="LOGO" component={BottomTabNavigator} />
        </Stack.Navigator>
    );
}
// Main navigation
export default function AppNavigation() {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    );
}
