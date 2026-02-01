import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";

export default function OnboardingAccess() {
  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>
        Comencemos 🚀
      </Text>

      <Text style={{ marginTop: 10 }}>
        Regístrate para continuar.
      </Text>

      <Pressable
        onPress={() => router.replace("/register")}
        style={{ marginTop: 30, backgroundColor: "#16a34a", padding: 12 }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Ir al Registro
        </Text>
      </Pressable>
    </View>
  );
}
