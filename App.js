import React from "react";
import { StyleSheet, SafeAreaView, Button, StatusBar } from "react-native";

import GoalsList from "./components/goalList.js";
import GoalInput from "./components/goalInput.js";

export default function App() {
  const [goalsList, setGoalList] = React.useState([]);
  const [goalsModal, setGoalsModal] = React.useState(false);

  const addGoalHandler = (newGoal) => {
    setGoalList((currentGoals) => [
      ...currentGoals,
      { text: newGoal, id: Math.floor(Math.random() * 4).toString() },
    ]);
  };

  const removeGoalHandler = (id) => {
    setGoalList((goalsList) => goalsList.filter((item) => item.id !== id));
  };

  const switchGoalsModal = () => {
    setGoalsModal((goalsModal) => !goalsModal);
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={s.appContainer}>
        <Button
          onPress={switchGoalsModal}
          title="Add new Goal"
          color="#a065ec"
        />
        <GoalsList removeGoalHandler={removeGoalHandler} data={goalsList} />
        <GoalInput
          displayModal={goalsModal}
          switchGoalsModal={switchGoalsModal}
          addGoalHandler={addGoalHandler}
        />
      </SafeAreaView>
    </>
  );
}

const s = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
});
