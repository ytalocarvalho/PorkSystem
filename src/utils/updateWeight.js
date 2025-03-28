const updateWeight = (key, index, value, weights, setWeights) => {
    const newWeights = { ...weights };
    newWeights[key][index] = value;
    setWeights(newWeights);
  };
  
  export default updateWeight;
  