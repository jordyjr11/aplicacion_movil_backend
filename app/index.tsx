import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";

export default function OnboardingWelcome() {
  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: "bold" }}>¡Bienvenido! 👋</Text>
      <Text style={{ marginTop: 10, fontSize: 16 }}>
        Esta app te ayudará a gestionar tu cuenta de forma segura.
      </Text>

      <Pressable
        onPress={() => router.push("/onboarding/benefits")}
        style={{ marginTop: 30, backgroundColor: "#2563eb", padding: 12 }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Siguiente
        </Text>
      </Pressable>
    </View>
  );
}
