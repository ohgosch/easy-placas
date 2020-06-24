const regOldPlate = /^[a-zA-Z]{3}[0-9]{4}\b/;

const regNewPlate = /^[a-zA-Z]{3}[0-9][a-zA-Z][0-9]{2}\b/;

/**
 * Validade Plate
 * 
 * @param {String} plate 
 * @returns {Boolean}
 */
export function validatePlate(plate) {
  if (plate.length !== 7) return true;

  const validation = [regOldPlate, regNewPlate];

  return !validation.some((reg) => reg.test(plate));
}
