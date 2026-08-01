import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import ChefLogo from '../components/ChefLogo';
import BotaoPrimario from '../components/BotaoPrimario';
import { colors } from '../constants/theme';

export default function SplashScreen() {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container} testID="splash-screen">
        <View style={styles.top}>
          <ChefLogo size={96} />
          <Text style={styles.title}>Merenda Já</Text>
          <Text style={styles.subtitle}>GESTÃO DE ALIMENTAÇÃO</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.welcome}>Bem-vindo!</Text>
          <Text style={styles.desc}>
            Gerencie seu cardápio, alunos, turmas e refeições de forma simples,
            rápida e eficiente.
          </Text>
          <View style={styles.dots}>
            <View style={[styles.dot, styles.dotActive]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>

        <Pressable
          testID="terms-checkbox"
          style={styles.termsRow}
          onPress={() => setAgreed(a => !a)}
        >
          <View style={[styles.checkbox, agreed && styles.checkboxChecked]}>
            {agreed && <Ionicons name="checkmark" size={14} color="#fff" />}
          </View>
          <Text style={styles.termsText}>Li e concordo com os termos de uso</Text>
        </Pressable>

        <BotaoPrimario
          testID="splash-start-button"
          title="Começar"
          onPress={() => router.push('/Acesso')}
          style={{ marginTop: 12 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.yellow },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  top: {
    alignItems: 'center',
    marginTop: 40,
    gap: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: colors.primaryDark,
    marginTop: 8,
  },
  subtitle: {
    fontSize: 12,
    color: colors.primary,
    letterSpacing: 2,
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginTop: 12,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  welcome: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.textDark,
    textAlign: 'center',
    marginBottom: 8,
  },
  desc: {
    fontSize: 14,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: 20,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    marginTop: 14,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#F2C97B',
  },
  dotActive: {
    backgroundColor: colors.primary,
    width: 18,
  },
  termsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: colors.primary,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: colors.primary,
  },
  termsText: {
    fontSize: 13,
    color: colors.textDark,
    flex: 1,
  },
});