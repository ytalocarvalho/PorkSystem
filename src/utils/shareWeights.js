import {Share} from 'react-native';

const shareWeights = (weights, results, units) => {
  const beerNames = {
    pilsen: 'Pilsen',
    ipa: 'IPA',
    sessionIpa: 'Session IPA',
    sourFramboesa: 'Sour Framboesa',
    apaManga: 'APA Manga',
    puroMalte: 'Puro Malte',
    mafiaPigAle: 'Mafia Pig Ale',
    doubleIpa: 'Double IPA',
    trigueiros: 'Trigueiros',
    cacauIpa: 'Cacau IPA',
    vinho: 'Vinho',
  };

  let message = 'Pesagem de Chopp:\n\n';

  const appendWeights = (title, weightList, resultList, unitList, beerKeys) => {
    if (weightList.some(weightArray => weightArray.length > 0)) {
      message += `${title}\n`;
      let counter = 1;
      beerKeys.forEach((key, beerIndex) => {
        weightList[beerIndex].forEach((weight, index) => {
          const beerName = beerNames[key];
          if (unitList[beerIndex][index] === 'percent') {
            message += `${counter}. ${beerName} - ${
              resultList[beerIndex][index]?.percent || '0'
            }%\n`;
          } else {
            message += `${counter}. ${beerName} - ${weight} L\n`;
          }
          counter++;
        });
      });
      message += '\n';
    }
  };

  appendWeights(
    'Biomma',
    [
      weights.pilsen,
      weights.ipa,
      weights.sessionIpa,
      weights.sourFramboesa,
      weights.apaManga,
    ],
    [
      results.pilsen,
      results.ipa,
      results.sessionIpa,
      results.sourFramboesa,
      results.apaManga,
    ],
    [
      units.pilsen,
      units.ipa,
      units.sessionIpa,
      units.sourFramboesa,
      units.apaManga,
    ],
    ['pilsen', 'ipa', 'sessionIpa', 'sourFramboesa', 'apaManga'],
  );
  appendWeights(
    'Mafia',
    [weights.puroMalte, weights.mafiaPigAle],
    [results.puroMalte, results.mafiaPigAle],
    [units.puroMalte, units.mafiaPigAle],
    ['puroMalte', 'mafiaPigAle'],
  );
  appendWeights(
    '4 Poderes',
    [weights.doubleIpa, weights.trigueiros],
    [results.doubleIpa, results.trigueiros],
    [units.doubleIpa, units.trigueiros],
    ['doubleIpa', 'trigueiros'],
  );
  appendWeights(
    'Madstein',
    [weights.cacauIpa],
    [results.cacauIpa],
    [units.cacauIpa],
    ['cacauIpa'],
  );
  appendWeights(
    'Astúria',
    [weights.vinho],
    [results.vinho],
    [units.vinho],
    ['vinho'],
  );

  Share.share({message});
};

export default shareWeights;
