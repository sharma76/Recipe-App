import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
export default function RecipeDetails({ children, mealData,style }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{children}</Text>
      </View>
      <View>
        {mealData.map((data,index) => (
          <View style={[styles.innerContainer,style]} key={index}>
            <Text style={{fontSize:15}}>{data}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "80%",
 marginVertical:10
  },
  titleContainer: {
    borderBottomWidth: 2,
    marginBottom: 5,
  },
  innerContainer: {
    
    borderRadius: 8,
    backgroundColor: "#ccc",
    padding: 5,
    alignItems: "center",
    marginVertical:2
  },
  title: { fontSize: 20, fontWeight: "bold", textAlign: "center" },
});
