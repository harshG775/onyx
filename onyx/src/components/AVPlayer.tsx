import { View, StyleSheet } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { useRef } from "react";

export default function Player({ source }: { source: string }) {
    const video = useRef(null);
    return (
        <View style={styles.container}>
            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: source,
                }}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
                
                // onPlaybackStatusUpdate={}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#ecf0f1",
    },
    video: {
        alignSelf: "center",
        height: 320,
        width: 200,
    },
});
