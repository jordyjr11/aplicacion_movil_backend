import { View, Text, TextInput, Pressable } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../src/validations/register.schema";
import { z } from "zod";
import { useEffect } from "react";

type FormData = z.infer<typeof registerSchema>;

export default function Register() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(registerSchema),
  });

  // Registro manual de campos (React Native)
  useEffect(() => {
    register("name");
    register("email");
    register("password");
    register("confirmPassword");
  }, [register]);

  // Validación asíncrona simulada (correo existente)
  const checkEmail = async (email: string) => {
    await new Promise((r) => setTimeout(r, 800));
    if (email === "test@test.com") {
      setError("email", {
        message: "Este correo ya está registrado",
      });
    }
  };

  const onSubmit = async (data: FormData) => {
    await checkEmail(data.email);
    alert("Registro exitoso ✅");
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>Registro</Text>

      <TextInput
        placeholder="Nombre completo"
        onChangeText={(v) => setValue("name", v)}
        style={{ borderWidth: 1, marginTop: 10, padding: 8 }}
      />
      {errors.name && <Text>{errors.name.message}</Text>}

      <TextInput
        placeholder="Correo electrónico"
        keyboardType="email-address"
        onChangeText={(v) => setValue("email", v)}
        style={{ borderWidth: 1, marginTop: 10, padding: 8 }}
      />
      {errors.email && <Text>{errors.email.message}</Text>}

      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        onChangeText={(v) => setValue("password", v)}
        style={{ borderWidth: 1, marginTop: 10, padding: 8 }}
      />
      {errors.password && <Text>{errors.password.message}</Text>}

      <TextInput
        placeholder="Confirmar contraseña"
        secureTextEntry
        onChangeText={(v) => setValue("confirmPassword", v)}
        style={{ borderWidth: 1, marginTop: 10, padding: 8 }}
      />
      {errors.confirmPassword && (
        <Text>{errors.confirmPassword.message}</Text>
      )}

      <Pressable
        onPress={handleSubmit(onSubmit)}
        style={{
          backgroundColor: "#2563eb",
          padding: 12,
          marginTop: 20,
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Registrarse
        </Text>
      </Pressable>
    </View>
  );
}
