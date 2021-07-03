/*******************************************************************************************************/
// Función que valida el valor del texto con el tipo de input, si pasa el test devuelve true //
/*******************************************************************************************************/
const validateInput = (type, value) => {
  // Tipo de regexp para validación de texto
  const onlyNumber = /^[0-9\b]+$/; // Sólo números
  const onlyLetter = /^[A-Za-z\b]+$/; // Sólo letras
  const onlyLetterAndAtSingScriptUnderscore = /^[A-Za-z-0-9-@_.\b]+$/; // Sólo letras @ - _
  const onlyNumberAndSpace = /^[0-9\s]+$/; // Sólo números con espacios
  const onlyLetterAndSpace = /^[A-Za-z\s]+$/; // Sólo letras con
  const onlyNumberPunto = /^[0-9.]+$/; // Solo numeros con punto
  const onlyNumberGuion = /^[0-9-]+$/; // Solo numeros con coma

  // Condicional de tipos de inputs
  switch (type) {
    case "onlyNumber":
      if (value === "" || onlyNumber.test(value)) {
        return true;
      }
      return false;
    case "onlyLetter":
      if (value === "" || onlyLetter.test(value)) {
        return true;
      }
      return false;
    case "onlyNumberAndSpace":
      if (value === "" || onlyNumberAndSpace.test(value)) {
        return true;
      }
      return false;
    case "onlyLetterAndSpace":
      if (value === "" || onlyLetterAndSpace.test(value)) {
        return true;
      }
      return false;
    case "onlyNumberPunto":
      if (value === "" || onlyNumberPunto.test(value)) {
        return true;
      }
      return false;
    case "onlyNumberGuion":
      if (value === "" || onlyNumberGuion.test(value)) {
        return true;
      }
    case "onlyLetterAndAtSingScriptUnderscore":
      if (value === "" || onlyLetterAndAtSingScriptUnderscore.test(value)) {
        return true;
      }
      return false;
    default:
      return true;
  }
};

/*******************************************************************************************************/
// Exportamos la función //
/*******************************************************************************************************/
export default validateInput;
