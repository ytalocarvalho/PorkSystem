import React, {useState} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from 'react-native';
import BeerWeightSection from '../components/BeerWeightSection';
import handleCalculate from '../utils/handleCalculate';
import addWeightField from '../utils/addWeightField';
import updateWeight from '../utils/updateWeight';
import updateUnit from '../utils/updateUnit';
import shareWeights from '../utils/shareWeights';
import removeWeight from '../utils/removeWeight';

const BeerWeightScreen = () => {
  const initialWeights = {
    pilsen: [],
    ipa: [],
    sessionIpa: [],
    sourFramboesa: [],
    apaManga: [],
    puroMalte: [],
    mafiaPigAle: [],
    doubleIpa: [],
    trigueiros: [],
    cacauIpa: [],
    vinho: [],
  };

  const [weights, setWeights] = useState(initialWeights);
  const [results, setResults] = useState(initialWeights);
  const [units, setUnits] = useState(initialWeights);

  const beerData = {
    pilsen: {fullWeight: 63.8, liquidWeight: 50, size: 50},
    ipa: {fullWeight: 40.7, liquidWeight: 30, size: 30},
    sessionIpa: {fullWeight: 40.7, liquidWeight: 30, size: 30},
    sourFramboesa: {fullWeight: 40.7, liquidWeight: 30, size: 30},
    apaManga: {fullWeight: 40.7, liquidWeight: 30, size: 30},
    puroMalte: {fullWeight: 63.8, liquidWeight: 50, size: 50},
    mafiaPigAle: {fullWeight: 40.7, liquidWeight: 30, size: 30},
    doubleIpa: {fullWeight: 40.7, liquidWeight: 30, size: 30},
    trigueiros: {fullWeight: 40.7, liquidWeight: 30, size: 30},
    cacauIpa: {fullWeight: 40.7, liquidWeight: 30, size: 30},
    vinho: {fullWeight: 40.7, liquidWeight: 30, size: 30},
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex: 1, backgroundColor: '#1f1f1f', padding: 16}}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <BeerWeightSection
              title="Biomma"
              beers={[
                'Pilsen',
                'IPA',
                'Session IPA',
                'Sour Framboesa',
                'APA Manga',
              ]}
              weights={[
                weights.pilsen,
                weights.ipa,
                weights.sessionIpa,
                weights.sourFramboesa,
                weights.apaManga,
              ]}
              units={[
                units.pilsen,
                units.ipa,
                units.sessionIpa,
                units.sourFramboesa,
                units.apaManga,
              ]}
              results={[
                results.pilsen,
                results.ipa,
                results.sessionIpa,
                results.sourFramboesa,
                results.apaManga,
              ]}
              addWeightField={beerIndex =>
                addWeightField(
                  ['pilsen', 'ipa', 'sessionIpa', 'sourFramboesa', 'apaManga'][
                    beerIndex
                  ],
                  weights,
                  setWeights,
                  units,
                  setUnits,
                )
              }
              updateWeight={(beerIndex, weightIndex, text) =>
                updateWeight(
                  ['pilsen', 'ipa', 'sessionIpa', 'sourFramboesa', 'apaManga'][
                    beerIndex
                  ],
                  weightIndex,
                  text,
                  weights,
                  setWeights,
                )
              }
              updateUnit={(beerIndex, weightIndex, itemValue) =>
                updateUnit(
                  ['pilsen', 'ipa', 'sessionIpa', 'sourFramboesa', 'apaManga'][
                    beerIndex
                  ],
                  weightIndex,
                  itemValue,
                  units,
                  setUnits,
                )
              }
              removeWeight={(beerIndex, weightIndex) =>
                removeWeight(
                  ['pilsen', 'ipa', 'sessionIpa', 'sourFramboesa', 'apaManga'][
                    beerIndex
                  ],
                  beerIndex,
                  weightIndex,
                  weights,
                  setWeights,
                  units,
                  setUnits,
                  results,
                  setResults,
                )
              }
            />
            <View
              style={{height: 1, backgroundColor: 'white', marginVertical: 10}}
            />
            <BeerWeightSection
              title="Mafia"
              beers={['Puro Malte', 'Mafia Pig Ale']}
              weights={[weights.puroMalte, weights.mafiaPigAle]}
              units={[units.puroMalte, units.mafiaPigAle]}
              results={[results.puroMalte, results.mafiaPigAle]}
              addWeightField={beerIndex =>
                addWeightField(
                  ['puroMalte', 'mafiaPigAle'][beerIndex],
                  weights,
                  setWeights,
                  units,
                  setUnits,
                )
              }
              updateWeight={(beerIndex, weightIndex, text) =>
                updateWeight(
                  ['puroMalte', 'mafiaPigAle'][beerIndex],
                  weightIndex,
                  text,
                  weights,
                  setWeights,
                )
              }
              updateUnit={(beerIndex, weightIndex, itemValue) =>
                updateUnit(
                  ['puroMalte', 'mafiaPigAle'][beerIndex],
                  weightIndex,
                  itemValue,
                  units,
                  setUnits,
                )
              }
              removeWeight={(beerIndex, weightIndex) =>
                removeWeight(
                  ['puroMalte', 'mafiaPigAle'][beerIndex],
                  beerIndex,
                  weightIndex,
                  weights,
                  setWeights,
                  units,
                  setUnits,
                  results,
                  setResults,
                )
              }
            />
            <View
              style={{height: 1, backgroundColor: 'white', marginVertical: 10}}
            />
            <BeerWeightSection
              title="4 Poderes"
              beers={['Double IPA', 'Trigueiros']}
              weights={[weights.doubleIpa, weights.trigueiros]}
              units={[units.doubleIpa, units.trigueiros]}
              results={[results.doubleIpa, results.trigueiros]}
              addWeightField={beerIndex =>
                addWeightField(
                  ['doubleIpa', 'trigueiros'][beerIndex],
                  weights,
                  setWeights,
                  units,
                  setUnits,
                )
              }
              updateWeight={(beerIndex, weightIndex, text) =>
                updateWeight(
                  ['doubleIpa', 'trigueiros'][beerIndex],
                  weightIndex,
                  text,
                  weights,
                  setWeights,
                )
              }
              updateUnit={(beerIndex, weightIndex, itemValue) =>
                updateUnit(
                  ['doubleIpa', 'trigueiros'][beerIndex],
                  weightIndex,
                  itemValue,
                  units,
                  setUnits,
                )
              }
              removeWeight={(beerIndex, weightIndex) =>
                removeWeight(
                  ['doubleIpa', 'trigueiros'][beerIndex],
                  beerIndex,
                  weightIndex,
                  weights,
                  setWeights,
                  units,
                  setUnits,
                  results,
                  setResults,
                )
              }
            />
            <View
              style={{height: 1, backgroundColor: 'white', marginVertical: 10}}
            />
            <BeerWeightSection
              title="Madstein"
              beers={['Cacau IPA']}
              weights={[weights.cacauIpa]}
              units={[units.cacauIpa]}
              results={[results.cacauIpa]}
              addWeightField={beerIndex =>
                addWeightField(
                  ['cacauIpa'][beerIndex],
                  weights,
                  setWeights,
                  units,
                  setUnits,
                )
              }
              updateWeight={(beerIndex, weightIndex, text) =>
                updateWeight(
                  ['cacauIpa'][beerIndex],
                  weightIndex,
                  text,
                  weights,
                  setWeights,
                )
              }
              updateUnit={(beerIndex, weightIndex, itemValue) =>
                updateUnit(
                  ['cacauIpa'][beerIndex],
                  weightIndex,
                  itemValue,
                  units,
                  setUnits,
                )
              }
              removeWeight={(beerIndex, weightIndex) =>
                removeWeight(
                  ['cacauIpa'][beerIndex],
                  beerIndex,
                  weightIndex,
                  weights,
                  setWeights,
                  units,
                  setUnits,
                  results,
                  setResults,
                )
              }
            />
            <View
              style={{height: 1, backgroundColor: 'white', marginVertical: 10}}
            />
            <BeerWeightSection
              title="Astúria"
              beers={['Vinho']}
              weights={[weights.vinho]}
              units={[units.vinho]}
              results={[results.vinho]}
              addWeightField={beerIndex =>
                addWeightField(
                  ['vinho'][beerIndex],
                  weights,
                  setWeights,
                  units,
                  setUnits,
                )
              }
              updateWeight={(beerIndex, weightIndex, text) =>
                updateWeight(
                  ['vinho'][beerIndex],
                  weightIndex,
                  text,
                  weights,
                  setWeights,
                )
              }
              updateUnit={(beerIndex, weightIndex, itemValue) =>
                updateUnit(
                  ['vinho'][beerIndex],
                  weightIndex,
                  itemValue,
                  units,
                  setUnits,
                )
              }
              removeWeight={(beerIndex, weightIndex) =>
                removeWeight(
                  ['vinho'][beerIndex],
                  beerIndex,
                  weightIndex,
                  weights,
                  setWeights,
                  units,
                  setUnits,
                  results,
                  setResults,
                )
              }
            />
          </ScrollView>
          <View style={{marginVertical: 10}}>
            <Button
              title="Calcular"
              onPress={() =>
                handleCalculate(weights, setResults, units, beerData)
              }
            />
          </View>
          <View style={{marginVertical: 10}}>
            <Button
              title="Compartilhar"
              onPress={() => shareWeights(weights, results, units)}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default BeerWeightScreen;
