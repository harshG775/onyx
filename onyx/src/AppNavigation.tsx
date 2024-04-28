import { NavigationContainer } from "@react-navigation/native";

// BottomTab navigation

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const BottomTab = createBottomTabNavigator();
import Home from "./screens/Home";

function BottomTabNavigator() {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name="Home" component={Home} />
        </BottomTab.Navigator>
    );
}

// Main navigation
export default function AppNavigation() {
    return (
        <NavigationContainer>
            <BottomTabNavigator />
        </NavigationContainer>
    );
}
