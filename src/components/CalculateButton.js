import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const CalculateButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={{ backgroundColor: '#4f46e5', padding: 10, borderRadius: 4, marginVertical: 10 }}
      onPress={onPress}
    >
      <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>Calcular</Text>
    </TouchableOpacity>
  );
};

export default CalculateButton;
