import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Button,
  Modal,
} from "react-native";
import React from "react";

const GoalInput = ({ addGoalHandler, displayModal, switchGoalsModal }) => {
  const [newGoal, setText] = React.useState("");
  const goalInputeHandler = (enteredGoal) => {
    setText(enteredGoal);
  };
  const prevAddGoalHandler = () => {
    if (newGoal.length) {
      addGoalHandler(newGoal);
      setText("");
      switchGoalsModal();
    }
  };

  return (
    <Modal animationType="slide" visible={displayModal}>
      <View style={s.inputContainer}>
        <Image style={s.goalIcon} source={require("../assets/goal.png")} />
        <TextInput
          value={newGoal}
          onChangeText={goalInputeHandler}
          style={s.textInput}
        />
        <View style={s.buttonContainer}>
          <Button onPress={switchGoalsModal} color="#f31282" title="Cancel" />
          <Button
            onPress={prevAddGoalHandler}
            color="#b180f0"
            title="Add Goal"
          />
        </View>
      </View>
    </Modal>
  );
};

const s = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
  },
  textInput: {
    width: "80%",
    marginBottom: 20,
    padding: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
  },
  goalIcon: {
    height: 100,
    width: 100,
    margin: 20,
  },
});

export default GoalInput;
