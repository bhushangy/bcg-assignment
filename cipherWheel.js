function cipherWheel(encryptedStr, k) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
    const letterToIndex = {};
    const indexToLetter = {};
  
    alphabet.split('').forEach((chr, index) => {
      letterToIndex[chr] = index;
      indexToLetter[index] = chr;
    });
  
    let n = k % 26;
    let decryptedStr = '';
  
    for (let chr of encryptedStr) {
      const currPos = letterToIndex[chr];
      const newPos = (currPos + n) % 26;
      decryptedStr += indexToLetter[newPos];
    }
  
    return decryptedStr;
  }
  
  console.log(cipherWheel('UWGHFAZX', 76));
  