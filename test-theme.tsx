import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from './contexts/ThemeContext';

const TestTheme = () => {
  const { theme, isDarkMode } = useTheme();

  console.log('Theme Debug:', {
    isDarkMode,
    backgroundColor: theme.colors.background,
    textColor: theme.colors.text,
    surfaceColor: theme.colors.surface
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      color: theme.colors.text,
      textAlign: 'center',
      marginBottom: 10,
    },
    card: {
      backgroundColor: theme.colors.surface,
      padding: 20,
      borderRadius: 10,
      marginTop: 20,
    },
    cardText: {
      color: theme.colors.text,
      fontSize: 16,
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Theme Test: {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </Text>
      <Text style={styles.text}>
        Background: {theme.colors.background}
      </Text>
      <Text style={styles.text}>
        Text Color: {theme.colors.text}
      </Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>This is a card with surface color</Text>
      </View>
    </View>
  );
};

export default TestTheme;
