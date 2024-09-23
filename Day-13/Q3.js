// 3. Write a function that counts the number of consonants in a given string.



function countConsonants(str) {
  // Convert the string to lowercase to simplify the comparison.
  const lowerCaseStr = str.toLowerCase();
  
  // Initialize a counter for consonants.
  let consonantCount = 0;
  
  // Iterate over each character in the string.
  for (let i = 0; i < lowerCaseStr.length; i++) {
    const char = lowerCaseStr[i];
    
    // Check if the character is a letter and not a vowel.
    if (char.match(/[a-z]/) && !char.match(/[aeiou]/)) {
      consonantCount++;
    }
  }
  
  return consonantCount;
}

// Example usage:
console.log(countConsonants("Hello World")); // Output: 7