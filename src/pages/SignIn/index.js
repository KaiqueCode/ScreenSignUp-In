import React from "react";
import { View, Text, Button } from "react-native";

import { useNavigation } from "@react-navigation/native";

function SignIn() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Tela Sign In</Text>
      <Button
        title="Welcome"
        onPress={() => navigation.navigate("Welcome")}
      ></Button>
    </View>
  );
}

export { SignIn };
