const addWeightField = (key, weights, setWeights, units, setUnits) => {
    const newWeights = { ...weights };
    newWeights[key] = [...(weights[key] || []), ''];
    setWeights(newWeights);
  
    const newUnits = { ...units };
    newUnits[key] = [...(units[key] || []), 'percent'];
    setUnits(newUnits);
  };
  
  export default addWeightField;
  