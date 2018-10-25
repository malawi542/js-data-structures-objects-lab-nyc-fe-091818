// Write your solution in this file!
const driver = {}


function updateDriverWithKeyAndValue(driver, key, value) {
  const driverCopy = {...driver}    
  // {name: Sam}
  driverCopy[key] = value
 driver[key] = value
 return driverCopy
}