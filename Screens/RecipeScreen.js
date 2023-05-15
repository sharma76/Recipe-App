import { Text, StyleSheet, View, ScrollView, Image } from "react-native";
import RecipeDetails from "../Components/RecipeDetails";
import { useLayoutEffect, useState, useContext } from "react";
import IconButton from "../Components/IconButton";
import FavoriteContext from "../Context/Context";

function RecipeScreen({ route, navigation }) {
  const FavoriteCxt = useContext(FavoriteContext);

  const meal = route.params.meal;
  const isFavorite = FavoriteCxt.ids.includes(meal.id);
  function changeFavoriteStatusHandler() {
   
    if (isFavorite) {
      FavoriteCxt.removeFavorite(meal.id);
   
    } else {
      FavoriteCxt.addFavorite(meal.id);
    }
  }

  useLayoutEffect(
    () =>
      navigation.setOptions({
        title: "Recipe: " + meal.title,
        headerRight: () => (
          <IconButton
            icon={isFavorite ? "star" : "star-outline"}
            color="black"
            onPress={changeFavoriteStatusHandler}
          />
        ),
      }),
    [meal, navigation,changeFavoriteStatusHandler]
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      <Text style={styles.title}>{meal.title}</Text>
      <View style={styles.summary}>
        <Text style={styles.summaryTitle}>{meal.duration}m</Text>
        <Text style={styles.summaryTitle}>{meal.complexity}</Text>
        <Text style={styles.summaryTitle}>{meal.affordability}</Text>
      </View>
      <RecipeDetails mealData={meal.ingredients}>Ingredients</RecipeDetails>
      <RecipeDetails mealData={meal.steps} style={{ alignItems: "flex-start" }}>
        Steps
      </RecipeDetails>
    </ScrollView>
  );
}
export default RecipeScreen;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    width: "90%",
    height: 300,
    borderRadius: 8,
  },
  summary: {
    flexDirection: "row",
    margin: 10,
  },
  summaryTitle: {
    marginHorizontal: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
