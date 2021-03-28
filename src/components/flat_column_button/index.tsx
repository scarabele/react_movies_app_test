
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

interface Props {
  title: string;
  icon: string;
  onPress: () => void;
}

const FlatColumnButton = ({ title, icon, onPress }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.column}>
          <FontAwesome5 name={icon} size={24} color="white" />
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 10
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white'
  }
});

export default FlatColumnButton;
