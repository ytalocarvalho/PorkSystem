const updateUnit = (key, index, unit, units, setUnits) => {
    const newUnits = { ...units };
    newUnits[key][index] = unit;
    setUnits(newUnits);
  };
  
  export default updateUnit;
  