import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import ScreenHeader from '../components/ScreenHeader';
import ChefLogo from '../components/ChefLogo';
import LabeledInput from '../components/LabeledInput';
import BotaoPrimario from '../components/BotaoPrimario';
import { colors } from '../constants/theme';

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.safe}>
      <ScreenHeader title="" />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={styles.body}>
          <View style={styles.logoWrap}>
            <ChefLogo size={350} />
          </View>
          <Text style={styles.title}>Recuperar senha</Text>
          <Text style={styles.desc}>
            Digite seu e-mail institucional para receber o código de verificação.
          </Text>

          <LabeledInput
            testID="forgot-email-input"
            label="E-mail institucional"
            placeholder="seu@email.com"
            autoCapitalize="none"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            containerStyle={{ marginTop: 24 }}
          />

          <BotaoPrimario
            testID="forgot-send-button"
            title="Enviar código"
            onPress={() => router.push('/CodigoVerificacao')}
            style={{ marginTop: 16 }}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.cream },
  body: {
    padding: 22,
    paddingTop: 8,
  },
  logoWrap: {
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.textDark,
    textAlign: 'center',
    marginTop: 10,
  },
  desc: {
    fontSize: 13,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 18,
  },
});
