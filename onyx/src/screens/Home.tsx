import { Consumet } from "@/lib/Axios_server";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, Pressable, TouchableOpacity } from "react-native";
export default function Home() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [topAiringAnime, setTopAiringAnime] = useState<any>(null);
    useEffect(() => {
        const handleFetch = async () => {
            try {
                setError(false);
                setLoading(true);
                const { data } = await Consumet.get(
                    "anime/gogoanime/top-airing"
                );
                setTopAiringAnime(data);
            } catch (error) {
                setError(true);
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        handleFetch();
    }, []);
    return (
        <ScrollView>
            <Text style={{ padding: 10, fontWeight: "bold", fontSize: 20 }}>
                Top Airing
            </Text>
            {loading && <Text>Loading...</Text>}
            {error && <Text>Error</Text>}
            {topAiringAnime &&
                topAiringAnime.results.map((item: any) => (
                    <AnimeListItem item={item} key={item.id} />
                ))}
        </ScrollView>
    );
}




type AnimeListItemType = {
    item: {
        id: number;
        image: string;
        title: string;
        episodeId: string;
        episodeNumber: number;
        genres: string[];
    };
}
function AnimeListItem({ item }: AnimeListItemType) {
    const navigation = useNavigation()
    const { id, image, title, episodeId, episodeNumber, genres } = item
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            // @ts-ignore //TODO
            onPress={() => navigation.navigate("Info", { id: id })}
            >
            <View
                style={{
                    flexDirection: "row",
                    gap: 10,
                    padding: 10,
                    width: "100%",
                }}
            >
                <Image
                    style={{ flex: 1, width: 100, height: 100 }}
                    source={{ uri: image }}
                />
                <View style={{ flex: 2 }}>
                    <Text>{title}</Text>
                    <View
                        style={{ flexDirection: "row", flexWrap: "wrap", gap: 5 }}
                    >
                        {genres.map((genre: any) => (
                            <Text
                                style={{
                                    backgroundColor: "#ccc",
                                    padding: 5,
                                    fontSize: 10,
                                }}
                                key={genre}
                            >
                                {genre}
                            </Text>
                        ))}
                    </View>
                    <Text id={episodeId}>Episode {episodeNumber}</Text>
                </View>
            </View>

        </TouchableOpacity>
    );
}
