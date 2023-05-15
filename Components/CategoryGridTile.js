import { StyleSheet } from "react-native";
import { Pressable, Text } from "react-native";
import { View } from "react-native";
import PropTypes from "prop-types";
import MealsScreen from "../Screens/MealsScreen";
function CategoryGridTile({ item, onPress }) {
  return (
    <View style={[styles.gridItem, { backgroundColor: item.color }]}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.pressed : null,
        ]}
        android_ripple={{ color: "red" }}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.text}>{item.title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
CategoryGridTile.propType = {
  item: PropTypes.object,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,

    borderRadius: 10,
    height: 120,

    margin: 20,
    overflow: "hidden",
    elevation: 10,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
  button: {
    flex: 1,
  },
  pressed: {
    opacity: 0.5,
  },
});
export default CategoryGridTile;
