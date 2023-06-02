function getAVG(arrayOfNumbers) {
 if (!Array.isArray(arrayOfNumbers) || arrayOfNumbers.length === 0) {
   return 0;
  }
   let sum = 0;
   const arrayOfRealNumbers = arrayOfNumbers.filter((number) => typeof number === 'number');
 arrayOfRealNumbers.forEach((number) => {
     sum += number;
   });
 return sum / arrayOfRealNumbers.length;
  }

  function replaceVocalWithPosition(phrase) {
    if (typeof phrase !== "string") {
      return null;
    }
    const vocals = ['a', 'e', 'i', 'o', 'u'];
    let phraseFormated = '';

    for (let i = 0; i < phrase.length; i++) {
      if (vocals.includes(phrase[i].toLowerCase())) {
        phraseFormated += i + 1;
      } else {
        phraseFormated += phrase[i];
      }
    }
    return phraseFormated;
  }

  function convertArrayStringsToArrayNumbers(arrayOfStrings) {
    if (!Array.isArray(arrayOfStrings)) {
      return [0];
    }
    const arrayOfNumbers = [];
    for (const string of arrayOfStrings) {
      let number = 0;
      if (typeof string === 'string') {
        const numberOfString = parseInt(string);
        if (!isNaN(numberOfString)) 
        {number = numberOfString;
        }
      }
      arrayOfNumbers.push(number);
    }
    return arrayOfNumbers;
  }

  function removeValues(array1, array2) {
    if (!Array.isArray(array1)) { 
      return [];
    }
    if (!Array.isArray(array2)) { 
      return array1;
    }
    return array1.filter(element => (!array2.includes(element)));
  }

  function findDuplicates(array) {
    if (!Array.isArray(array)) {
      let emptyArray = [];
      return emptyArray;
    }
  
    const uniqueItems = [];
    const duplicatedItems = [];
    array.forEach((element) => {
  
      if (!uniqueItems.includes(element)) {
        uniqueItems.push(element);
      } else if (!duplicatedItems.includes(element)){
        duplicatedItems.push(element);
      }
    })
    return duplicatedItems;
  
  }

  function convertNumberToStringWords(number) {
    let numberToString
    return stringConcat
  } 

module.exports = {
  getAVG,
  replaceVocalWithPosition,
  convertArrayStringsToArrayNumbers,
  removeValues,
  findDuplicates,
  convertNumberToStringWords
}