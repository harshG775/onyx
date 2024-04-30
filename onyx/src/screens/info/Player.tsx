import { View, Text, StyleSheet, Button, Linking } from "react-native";
import React, { useEffect, useState } from "react";
import { Consumet } from "@/lib/Axios_server";
import AVPlayer from "@/components/AVPlayer";

enum ServerNames {
    "gogocdn" = "gogocdn",
    "streamsb" = "streamsb",
    "vidstreaming" = "vidstreaming",
}
type AnimeDataType = {
    sources: {
        url: string;
        isM3U8: boolean;
        quality: string;
    }[];
};

export default function Player({ route }: any) {
    const { episodeId } = route.params;
    if (episodeId === undefined) {
        console.log("anime episodeId not found");
        return <Text>something went wrong</Text>;
    }
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [animeData, setAnimeData] = useState<AnimeDataType | null>(null);
    useEffect(() => {
        const handleFetch = async () => {
            try {
                setError(false);
                setLoading(true);
                const { data } = await Consumet.get(
                    `/anime/gogoanime/watch/${episodeId}?server=${ServerNames.vidstreaming}`
                );
                setAnimeData(data);
            } catch (error) {
                setError(true);
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        handleFetch();
    }, []);
    if (loading) {
        return <Text>Loading...</Text>;
    }
    if (error) {
        return <Text>Error</Text>;
    }

    if (animeData === null) {
        return <Text>something went wrong</Text>;
    }
    const { sources } = animeData;
    return (
        <View style={Styles.main}>
            <AVPlayer source={sources[0].url} />
            {console.log(sources[0].url)}
        </View>
    );
}
const Styles = StyleSheet.create({
    main: {
        flex: 1,
    },
});
