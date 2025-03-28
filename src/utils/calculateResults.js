const calculateResults = (weight, fullWeight, liquidWeight) => {
    const percentage = ((weight / fullWeight) * 100).toFixed(2);
    const liters = ((weight / fullWeight) * liquidWeight).toFixed(2);
    return { percent: percentage, liters: liters };
  };
  
  export default calculateResults;
  