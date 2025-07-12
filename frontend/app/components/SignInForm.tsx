import { View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";

const SignInForm = () => {
  return (
    <View style={styles.container}>
      <TextInput label="Username" style={styles.inputfield} />
      <TextInput label="Password" style={styles.inputfield} secureTextEntry />
      <Button mode="contained" onPress={() => console.log("Login pressed")}>
        Login
      </Button>
    </View>
  );
};

export { SignInForm };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  inputfield: {
    width: "100%",
    marginBottom: 16,
  },
});
