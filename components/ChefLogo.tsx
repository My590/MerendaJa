import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../constants/theme';

type Props = {
  size?: number;
  variant?: 'yellow' | 'white';
};

export default function ChefLogo({ size = 88, variant = 'yellow' }: Props) {
  const bg = variant === 'yellow' ? colors.yellow : colors.white;
  const border = colors.primary;
  return (
    <View
      testID="chef-logo"
      style={[
        styles.circle,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: bg,
          borderColor: border,
          borderWidth: Math.max(2, size * 0.04),
        },
      ]}
    >
      <MaterialCommunityIcons
        name="chef-hat"
        size={size * 0.5}
        color={colors.primary}
      />
      <View style={[styles.utensils, { bottom: size * 0.18 }]}>
        <MaterialCommunityIcons
          name="silverware-fork-knife"
          size={size * 0.22}
          color={colors.primary}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.primary,
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
    position: 'relative',
  },
  utensils: {
    position: 'absolute',
  },
});