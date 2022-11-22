let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  // Act
  // Assert
  let words = ["Irina", "Etza", "Daniel"];
  let result = removeVowelsFromWords(words);
  let output = ["rn", "tz", "Dnl"];
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
