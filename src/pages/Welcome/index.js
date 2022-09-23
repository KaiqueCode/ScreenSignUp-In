import React from "react";
import { View, Text, Button } from "react-native";

import { useNavigation } from "@react-navigation/native";

function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Tela Welcome</Text>
      <Button
        title="SignIn"
        onPress={() => navigation.navigate("SignIn")}
      ></Button>
    </View>
  );
}

export { Welcome };
