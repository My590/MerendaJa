import React from 'react';
import { Image, StyleSheet } from 'react-native';

type Props = {
  size?: number;
};

export default function ChefLogo({ size = 150 }: Props) {
  return (
    <Image
      testID="chef-logo"
      source={require('../assets/logo.png')}
      style={[
        styles.logo,
        {
          width: size,
          height: size,
        },
      ]}
      resizeMode="contain"
    />
  );
}

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
  },
});