import { NavigationContainer } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';

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
            <BottomTab.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="home" size={24} color={color} />
                    ),
                }}
                name="Home"
                component={Home}
            />
            <BottomTab.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="search1" size={20} color={color} />
                    ),
                }}
                name="Search"
                component={Home}
            />
            <BottomTab.Screen
                name="Downloads"
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="download" size={20} color={color} />
                    ),
                }}
                component={Home}
            />
            <BottomTab.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="setting" size={20} color={color} />
                    ),
                }}
                name="Settings"
                component={Home}
            />
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
