import { StyleSheet, View, Text, Pressable } from "react-native";
const GoalItem = ({ goal, removeGoalHandler }) => {
  return (
    <View style={s.goalItem}>
      <Pressable
        onPress={() => removeGoalHandler(goal.item.id)}
        android_ripple={{ color: "#dddddd" }}
        style={({ pressed }) => pressed && s.pressedItem}
      >
        <Text style={s.goalText}>{goal.item.text}</Text>
      </Pressable>
    </View>
  );
};

const s = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#683fd1",
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});

export default GoalItem;
