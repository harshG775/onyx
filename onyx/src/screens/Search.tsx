import React from "react";
import { View, Text, ScrollView,TextInput, StyleSheet ,StatusBar, Pressable} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Search() {
    return (
        <View style={styles.main}>
            <View style={styles.searchBarWrapper}>
                <TextInput
                        placeholder="Search..."
                        style={styles.searchInput}
                        returnKeyType="search"
                />
                <AntDesign name="search1" size={20} color="#aaa" />
            </View>
            <ScrollView>
                <Text>Search</Text>
            </ScrollView>
            
        </View>
    );
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: StatusBar.currentHeight,
    },
    searchBarWrapper: {
        width: "90%",
        borderRadius: 5,
        paddingVertical: 5,
        marginTop: 15,
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },
    label: {
        position: "absolute",
    },
    searchInput: {
        width: "90%",
        height: 30,
        textAlignVertical: "center",
    },
})