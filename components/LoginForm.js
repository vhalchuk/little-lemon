import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>Welcome to Little Lemon</Text>
        {loggedIn && (
          <Text style={styles.loggedInText}>You are logged in!</Text>
        )}
        {!loggedIn && (
          <>
            <Text style={styles.subtitle}>Login to continue</Text>
            <TextInput
              style={styles.input}
              placeholder="email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="password"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
              keyboardType="default"
            />
            <View style={styles.buttonContainer}>
              <Pressable
                style={styles.button}
                onPress={() => setLoggedIn(true)}
              >
                <Text style={styles.buttonText}>Log In</Text>
              </Pressable>
            </View>
          </>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    padding: 8,
    marginVertical: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
    padding: 8,
    marginVertical: 8,
    textAlign: "center",
  },
  input: {
    borderRadius: 8,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    borderRadius: 8,
    backgroundColor: "#fffbad",
    paddingHorizontal: 28,
    paddingVertical: 8,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 24,
  },
  loggedInText: {
    textAlign: "center",
    fontSize: 24,
  },
});
