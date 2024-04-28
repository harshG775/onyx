import { Consumet } from "@/lib/Axios_server";
import { useEffect } from "react";
import { View, Text } from "react-native";
export default function Home() {
    useEffect(() => {
        const handleFetch = async () => {
            const { data } = await Consumet.get("anime/gogoanime/top-airing");
            console.log(data);
        }
        handleFetch();
    }, []);
    return (
        <View>
            <Text>home</Text>
        </View>
    );
}
