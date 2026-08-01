import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import ScreenHeader from '../components/ScreenHeader';
import LabeledInput from '../components/LabeledInput';
import BotaoPrimario from '../components/BotaoPrimario';
import { colors } from '../constants/theme';

function Select({ placeholder, testID }: { placeholder: string; testID?: string }) {
  return (
    <Pressable testID={testID} style={styles.select}>
      <Text style={styles.selectText}>{placeholder}</Text>
      <Ionicons name="chevron-down" size={18} color={colors.textMuted} />
    </Pressable>
  );
}

export default function CadastroAluno() {
  const router = useRouter();
  const [nome, setNome] = useState('');
  const [rm, setRm] = useState('');
  const [email, setEmail] = useState('');
  return (
    <SafeAreaView style={styles.safe}>
      <ScreenHeader title="" />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={styles.body}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={38} color="#fff" />
          </View>
          <Text style={styles.title}>Cadastro de Aluno</Text>

          <LabeledInput
            testID="aluno-nome-input"
            label="Nome do aluno"
            placeholder="Nome completo"
            value={nome} onChangeText={setNome}
            containerStyle={{ marginTop: 16 }}
          />
          <LabeledInput
            testID="aluno-rm-input"
            label="RM"
            placeholder="Número de matrícula"
            keyboardType="number-pad"
            value={rm} onChangeText={setRm}
          />
          <View>
            <Text style={styles.label}>Turma</Text>
            <Select placeholder="Selecione a turma" testID="aluno-turma-select" />
          </View>
          <View style={{ marginTop: 14 }}>
            <Text style={styles.label}>Período</Text>
            <Select placeholder="Selecione o período" testID="aluno-periodo-select" />
          </View>
          <LabeledInput
            testID="aluno-email-input"
            label="E-mail institucional (opcional)"
            placeholder="aluno@email.com"
            autoCapitalize="none"
            keyboardType="email-address"
            value={email} onChangeText={setEmail}
            containerStyle={{ marginTop: 14 }}
          />

          <BotaoPrimario
            testID="aluno-submit-button"
            title="Cadastrar aluno"
            onPress={() => router.back()}
            style={{ marginTop: 12 }}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.cream },
  body: { padding: 22, paddingTop: 4 },
  avatar: {
    width: 78, height: 78, borderRadius: 39,
    backgroundColor: colors.primary,
    alignSelf: 'center',
    alignItems: 'center', justifyContent: 'center',
    marginBottom: 8,
  },
  title: { fontSize: 20, fontWeight: '800', color: colors.textDark, textAlign: 'center' },
  label: { fontSize: 13, color: colors.textDark, fontWeight: '600', marginBottom: 6 },
  select: {
    backgroundColor: '#fff', borderRadius: 12,
    borderWidth: 1, borderColor: colors.inputBorder,
    height: 48, paddingHorizontal: 14,
    flexDirection: 'row', alignItems: 'center',
  },
  selectText: { flex: 1, color: colors.textLight, fontSize: 14 },
});