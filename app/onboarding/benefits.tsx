import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";

export default function OnboardingBenefits() {
  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>
        ¿Qué puedes hacer?
      </Text>

      <Text style={{ marginTop: 10 }}>✅ Registro seguro</Text>
      <Text>✅ Validaciones automáticas</Text>
      <Text>✅ Mejor experiencia de usuario</Text>

      <View style={{ flexDirection: "row", marginTop: 30 }}>
        <Pressable
          onPress={() => router.back()}
          style={{ flex: 1, padding: 12, borderWidth: 1, marginRight: 10 }}
        >
          <Text style={{ textAlign: "center" }}>Atrás</Text>
        </Pressable>

        <Pressable
          onPress={() => router.push("/onboarding/access")}
          style={{ flex: 1, backgroundColor: "#2563eb", padding: 12 }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>
            Siguiente
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
