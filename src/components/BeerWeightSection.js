import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import BeerWeightInput from './BeerWeightInput';

const BeerWeightSection = ({
  title,
  beers,
  weights,
  units,
  results,
  addWeightField,
  updateWeight,
  updateUnit,
  removeWeight,
}) => {
  return (
    <View style={{marginBottom: 20}}>
      <Text
        style={{
          color: 'white',
          fontSize: 18,
          fontWeight: 'bold',
          marginBottom: 10,
        }}>
        {title}
      </Text>
      {beers.map((beer, beerIndex) => (
        <View key={beer} style={{marginBottom: 10}}>
          <Text style={{color: 'white', fontSize: 16, marginBottom: 6}}>
            {beer}
          </Text>
          {weights[beerIndex]?.map((weight, index) => (
            <BeerWeightInput
              key={index}
              weight={weight}
              unit={units[beerIndex]?.[index]}
              onWeightChange={text => updateWeight(beerIndex, index, text)}
              onUnitChange={itemValue =>
                updateUnit(beerIndex, index, itemValue)
              }
              result={results[beerIndex]?.[index]}
              onRemove={() => removeWeight(beerIndex, index)}
            />
          ))}
          <TouchableOpacity
            style={{
              backgroundColor: '#4f46e5',
              padding: 8,
              borderRadius: 4,
              marginBottom: 10,
            }}
            onPress={() => addWeightField(beerIndex)}>
            <Text style={{color: 'white', textAlign: 'center'}}>
              Adicionar Pesagem
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default BeerWeightSection;
