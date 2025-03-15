import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View
      className="flex-1 justify-center items-center"
    >
      <Link href={{ pathname: "/movie/[id]", params: { id: "1" } }}>movie1</Link>
      <Text className="text-5xl text-accent">movie start</Text>
    </View>
  );
}
