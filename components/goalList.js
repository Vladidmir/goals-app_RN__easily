import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./goalItem";
const GoalsList = ({ data, removeGoalHandler }) => {
  return (
    <View style={s.goalsContainer}>
      <FlatList
        data={data}
        keyExtractor={(item, i) => item.id}
        renderItem={(goalObj) => (
          <GoalItem removeGoalHandler={removeGoalHandler} goal={goalObj} />
        )}
      />
    </View>
  );
};

const s = StyleSheet.create({
  goalsContainer: {
    flex: 5,
  },
});

export default GoalsList;
