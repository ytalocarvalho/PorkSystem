const handleCalculate = (weights, setResults, units, beerData) => {
  const newResults = {};

  Object.keys(weights).forEach(key => {
    newResults[key] = weights[key].map((weight, index) => {
      const weightNum = parseFloat(weight);
      if (!isNaN(weightNum)) {
        if (units[key][index] === 'percent') {
          const percentage = (
            (weightNum / beerData[key].fullWeight) *
            100
          ).toFixed(2);
          return {percent: percentage, liters: ''};
        } else {
          return {percent: '', liters: weight};
        }
      }
      return {percent: '', liters: ''};
    });
  });

  setResults(newResults);
};

export default handleCalculate;
