import React from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const BeerWeightInput = ({
  weight,
  unit,
  onWeightChange,
  onUnitChange,
  result,
  onRemove,
}) => {
  return (
    <View
      style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
      <View style={{flex: 1}}>
        <Text style={{color: 'white', marginBottom: 4}}>Peso atual:</Text>
        <TextInput
          style={{
            backgroundColor: '#333',
            color: 'white',
            padding: 8,
            borderRadius: 4,
          }}
          keyboardType="numeric"
          placeholder="Peso"
          placeholderTextColor="gray"
          value={weight}
          onChangeText={onWeightChange}
        />
        <View
          style={{
            backgroundColor: '#333',
            padding: 8,
            borderRadius: 4,
            marginTop: 8,
          }}>
          <Picker
            selectedValue={unit}
            style={{color: 'white'}}
            onValueChange={onUnitChange}>
            <Picker.Item label="Porcentagem" value="percent" />
            <Picker.Item label="Litros" value="liters" />
          </Picker>
        </View>
        {result && (
          <Text style={{color: 'white', marginTop: 8}}>
            {unit === 'percent'
              ? `Restante: ${result.percent}%`
              : `Litros: ${result.liters} L`}
          </Text>
        )}
      </View>
      <TouchableOpacity onPress={onRemove} style={{marginLeft: 10}}>
        <Icon name="trash" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};

export default BeerWeightInput;
