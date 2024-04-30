import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Consumet } from "@/lib/Axios_server";
export default function Info({ route }: any) {
    const { id } = route.params;
    if (id === undefined) {
        console.log("anime id not found");
        return <Text>something went wrong</Text>;
    }

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [animeData, setAnimeData] = useState<any>(null);
    useEffect(() => {
        const handleFetch = async () => {
            try {
                setError(false);
                setLoading(true);
                const { data } = await Consumet.get(
                    `/anime/gogoanime/info/${id}`
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
    return (
        <ScrollView style={{flex: 1, padding: 10 }}>
            <Image
                style={{ flex: 1, width: 100, height: 100 }}
                source={{ uri: animeData?.image }}
            />
            <Text>{animeData?.title}</Text>
            <Text>{animeData?.description}</Text>
            <Text>{animeData?.subOrDub}</Text>

            <Text>Episodes {animeData?.totalEpisodes}</Text>
            <ScrollView>
                {animeData?.episodes.map((episode: any) => (
                    <Text style={{ padding: 10 }} key={episode.id}>{episode.number}</Text>
                ))}
            </ScrollView>
        </ScrollView>
    );
}
