import { NavigationContainer } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

// BottomTab navigation

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const BottomTab = createBottomTabNavigator();
import Home from "@/screens/Home";
import Search from "@/screens/Search";
function BottomTabNavigator() {
    return (
        <BottomTab.Navigator>
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
                    headerShown: false,
                }}
                name="Search"
                component={Search}
            />
            <BottomTab.Screen
                name="Downloads"
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="download" size={20} color={color} />
                    ),
                }}
                component={Search}
            />
            <BottomTab.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="setting" size={20} color={color} />
                    ),
                }}
                name="Settings"
                component={Search}
            />
        </BottomTab.Navigator>
    );
}
// BottomTab navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Info from "@/screens/info/Info";
const Stack = createNativeStackNavigator();

function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name="LOGO"
                component={BottomTabNavigator}
            />
            <Stack.Screen
                name="Info"
                component={Info}
            />
            
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
