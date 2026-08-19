import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, Pressable, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import ScreenHeader from '../components/ScreenHeader';
import LabeledInput from '../components/LabeledInput';
import BotaoPrimario from '../components/BotaoPrimario';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../constants/theme';

const OPCOES_REFEICAO = [
  { value: 'cafe', label: 'Café da manhã' },
  { value: 'almoco', label: 'Almoço' },
  { value: 'janta', label: 'Janta' },
];

export default function AddRefeicao() {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState('');
  const [menuAberto, setMenuAberto] = useState(false);
  const router = useRouter();
  const [nome, setNome] = useState('');

  const labelSelecionado =
    OPCOES_REFEICAO.find((o) => o.value === opcaoSelecionada)?.label ??
    'Selecione o tipo de refeição';

  return (
    <SafeAreaView style={styles.safe}>
      <ScreenHeader title="Adicionar refeição" />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={styles.body}>
          <View style={styles.avatar}>
            <MaterialCommunityIcons name="bread-slice" size={38} color="#fff" />
          </View>

          <View>
            <LabeledInput
              label="Descrição"
              placeholder="Digite os alimentos da refeição"
              testID="descricao-input"
            />
          </View>

          <LabeledInput
            testID="turma-nome-input"
            label="Horario da refeição"
            placeholder="10h00 - 10h20"
            value={nome}
            onChangeText={setNome}
            containerStyle={{ marginTop: 16 }}
          />

          <LabeledInput
            testID="turma-nome-input"
            label="data refeição"
            placeholder="07/04 - 12/04"
            value={nome}
            onChangeText={setNome}
            containerStyle={{ marginTop: 16 }}
          />

          <Text style={styles.label}>Tipo de refeição</Text>

          <Pressable
            style={styles.select}
            onPress={() => setMenuAberto((prev) => !prev)}
          >
            <Text
              style={[
                styles.selectText,
                !opcaoSelecionada && { color: colors.textDark, opacity: 0.5 },
              ]}
            >
              {labelSelecionado}
            </Text>
            <Ionicons
              name={menuAberto ? 'chevron-up' : 'chevron-down'}
              size={18}
              color={colors.textDark}
            />
          </Pressable>

          {menuAberto && (
            <View style={styles.dropdown}>
              {OPCOES_REFEICAO.map((opcao) => {
                const ativo = opcao.value === opcaoSelecionada;
                return (
                  <Pressable
                    key={opcao.value}
                    style={[styles.dropdownItem, ativo && styles.dropdownItemAtivo]}
                    onPress={() => {
                      setOpcaoSelecionada(opcao.value);
                      setMenuAberto(false);
                    }}
                  >
                    <Text
                      style={[
                        styles.dropdownItemText,
                        ativo && styles.dropdownItemTextAtivo,
                      ]}
                    >
                      {opcao.label}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          )}

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
  safe: { flex: 1, backgroundColor: colors.splashBg },
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
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    height: 48,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectText: { flex: 1, color: colors.textDark, fontSize: 14 },
  dropdown: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    marginTop: 6,
    overflow: 'hidden',
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
  dropdownItemAtivo: {
    backgroundColor: colors.primary,
  },
  dropdownItemText: {
    fontSize: 14,
    color: colors.textDark,
  },
  dropdownItemTextAtivo: {
    color: '#fff',
    fontWeight: '600',
  },
});