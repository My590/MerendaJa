import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, Pressable, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import ScreenHeader from '../components/ScreenHeader';
import LabeledInput from '../components/LabeledInput';
import BotaoPrimario from '../components/BotaoPrimario';
import { colors } from '../constants/theme';

export default function AddRefeicao() {
  const router = useRouter();
  const [nome, setNome] = useState('');
  return (
    <SafeAreaView style={styles.safe}>
      <ScreenHeader title="Adicionar refeição" />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={styles.body}>
          <View style={styles.avatar}>
            <Ionicons name="people" size={38} color="#fff" />
          </View>

          <LabeledInput
            testID="turma-nome-input"
            label="Nome da Refeição"
            placeholder="Almoço"
            value={nome} onChangeText={setNome}
            containerStyle={{ marginTop: 16 }}
          />
          <View>

          <LabeledInput
            label="Descrição"
            placeholder="Digite os alimentos da refeição"
            testID="descricao-input"
          />
          </View>

          <BotaoPrimario
            testID="turma-save-button"
            title="Enviar refeição"
            onPress={() => router.back()}
            style={{ marginTop: 22 }}
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
  label: { fontSize: 13, color: colors.textDark, fontWeight: '600', marginBottom: 6 },
  select: {
    backgroundColor: '#fff', borderRadius: 12,
    borderWidth: 1, borderColor: colors.inputBorder,
    height: 48, paddingHorizontal: 14,
    flexDirection: 'row', alignItems: 'center',
  },
  selectText: { flex: 1, color: colors.textLight, fontSize: 14 },
});
