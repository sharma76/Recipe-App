import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Image, Pressable } from "react-native";

export default function RenderMeals({ item }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.pressed : null)}
        android_ripple={{ color: "#ccc" }}
        onPress={() =>
          navigation.navigate("RecipeScreen", {
            meal: item,
          })
        }
      >
        <View style={styles.innerContainer}>
          <Image style={styles.image} source={{ uri: item.imageUrl }} />
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.summary}>
            <Text style={styles.summaryTitle}>{item.duration}m</Text>
            <Text style={styles.summaryTitle}>{item.complexity}</Text>
            <Text style={styles.summaryTitle}>{item.affordability}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 10,
    overflow: "hidden",
  },
  innerContainer: {
    alignItems: "center",
  },
  summary: {
    flexDirection: "row",
    margin: 10,
  },
  summaryTitle: {
    marginHorizontal: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.5,
  },
});
