const removeWeight = (
  key,
  beerIndex,
  weightIndex,
  weights,
  setWeights,
  units,
  setUnits,
  results,
  setResults,
) => {
  const newWeights = {...weights};
  const newUnits = {...units};
  const newResults = {...results};

  newWeights[key].splice(weightIndex, 1);
  newUnits[key].splice(weightIndex, 1);
  newResults[key].splice(weightIndex, 1);

  setWeights(newWeights);
  setUnits(newUnits);
  setResults(newResults);
};

export default removeWeight;
