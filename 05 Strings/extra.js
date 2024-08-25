// ! at()
//* Returns the character at the specified index, allowing negative indices to count from the end of the string.
//* This method is useful for accessing characters from both the start and the end of the string.
//* The index of the character to return. Can be negative to count from the end

const sentence = "The quick brown fox jumps over the lazy dog.";
let index = 5;
console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of 5 returns the character u"

index = -4;
console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of -4 returns the character d"

// ! charAt()
// * Returns the character at the specified index.
// * This method is useful for retrieving a character at a given position in a string.

const sentence1 = "The quick brown fox jumps over the lazy dog.";
const index1 = 4;
console.log(`The character at index ${index1} is ${sentence1.charAt(index1)}`);
// Expected output: "The character at index 4 is q"

// ! charCodeAt()
//* Returns the Unicode character code of the character at the specified index.
// * This method is useful for finding the numeric Unicode value of a character in a string.

const sentence2 = "The quick brown fox jumps over the lazy dog.";
const index2 = 4;
console.log(
  `Character code ${sentence2.charCodeAt(
    index2
  )} is equal to ${sentence2.charAt(index2)}`
);
// Expected output: "Character code 113 is equal to q"

// ! concat()
// *Joins two or more strings together and returns the resulting string.
// * This method is used to concatenate multiple strings into a single string.

const str1 = "Hello";
const str2 = "World";
console.log(str1.concat(" ", str2));
// Expected output: "Hello World"

console.log(str2.concat(", ", str1));
// Expected output: "World, Hello"

// ! includes()
// * Checks if the string contains the specified substring and returns true or false.
// * This method is useful for determining the presence of a substring within a string.

const sentence3 = "The quick brown fox jumps over the lazy dog.";
const word = "fox";
console.log(
  `The word "${word}" ${
    sentence3.includes(word) ? "is" : "is not"
  } in the sentence`
);
// Expected output: "The word "fox" is in the sentence"

// ! indexOf()
// *  Returns the index of the first occurrence of the specified substring. Returns -1 if not found.
// * This method is useful for finding the position of a substring within a string.

const paragraph = "I think Ruth's dog is cuter than your dog!";
const searchTerm = "dog";
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);
// Expected output: "The index of the first "dog" is 15"

console.log(
  `The index of the second "${searchTerm}" is ${paragraph.indexOf(
    searchTerm,
    indexOfFirst + searchTerm.length
  )}`
);
// Expected output: "The index of the second "dog" is 38"

// ! lastIndexOf()
// * Returns the index of the last occurrence of the specified substring. Returns -1 if not found.
// * This method helps in finding the last position where a substring appears in a string.

const paragraph1 = "I think Ruth's dog is cuter than your dog!";
const searchTerm1 = "dog";

console.log(
  `Index of the last ${searchTerm1} is ${paragraph1.lastIndexOf(searchTerm1)}`
);
// Expected output: "Index of the last "dog" is 38"

// ! padEnd()
// * Pads the current string with another string until the specified length is reached, adding characters to the end.
// * This method is useful for aligning text or ensuring a string reaches a specific length.
// * This method ensures that the string is extended to a given length with padding characters.

const str3 = "Breaded Mushrooms";
console.log(str3.padEnd(25, "."));
// Expected output: "Breaded Mushrooms........"

const str4 = "200";
console.log(str4.padEnd(5));
// Expected output: "200  "

// ! padStart()
//*  Pads the current string with another string until the specified length is reached, adding characters to the beginning.
// * This method is useful for formatting numbers or strings to a specific width.
const str5 = "5";
console.log(str5.padStart(2, "0"));
// Expected output: "05"
const fullNumber = "2034399002125581";
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, "*");
console.log(maskedNumber);
// Expected output: "************5581"
// * This method is useful for masking or extracting parts of a string.

// ! repeat()
// * Repeats the string a specified number of times and returns the new string.
// * This method is useful for generating a repeated pattern or message.
const mood = "Happy! ";
console.log(`I feel ${mood.repeat(3)}`);
// Expected output: "I feel Happy! Happy! Happy! "

// ! replace()
// *Replaces the first occurrence of the specified substring with a new substring.
// * This method is useful for modifying parts of a string by substituting text.
const paragraph2 = "I think Ruth's dog is cuter than your dog!";
console.log(paragraph2.replace("Ruth's", "my"));
// Expected output: "I think my dog is cuter than your dog!"

// ! replaceAll()
// * Replaces all occurrences of the specified substring with a new substring.
// * This method is useful for replacing every instance of a substring within a string.
const paragraph3 = "I think Ruth's dog is cuter than your dog!";
console.log(paragraph3.replaceAll("dog", "monkey"));
// Expected output: "I think Ruth's monkey is cuter than your monkey!"

// ! split()
// * Splits the string into an array of substrings based on the specified separator.
// * This method is useful for breaking a string into smaller parts based on a delimiter.
const str6 = "The quick brown fox jumps over the lazy dog.";
const words = str6.split(" ");
console.log(words[3]);
// Expected output: "fox"

const chars = str6.split("");
console.log(chars[8]);
// Expected output: "k"

const strCopy = str6.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]

// ! startsWith()
// * Checks if the string starts with the specified substring.
// * This method is useful for verifying the beginning of a string.

const str7 = "Saturday night plans";
console.log(str7.startsWith("Sat"));
// Expected output: true

console.log(str7.startsWith("Sat", 3));
// Expected output: false

// ! substring()
// *  Extracts characters from the string between two specified indices (not including the end index).
// * This method is useful for obtaining a part of a string within a range of indices.

const str8 = "Mozilla";
console.log(str8.substring(1, 3));
// Expected output: "oz"

console.log(str8.substring(2));
// Expected output: "zilla"

// ! toLowerCase()
// *  Converts all characters in the string to lowercase.
// * This method is useful for standardizing text to lowercase.

const sentence4 = "The quick brown fox jumps over the lazy dog.";
console.log(sentence4.toLowerCase());
// Expected output: "the quick brown fox jumps over the lazy dog."

// ! toString()
//  Converts the String object to a primitive string.
// * This method is useful for obtaining the primitive value of a String object.
const stringObj = new String("foo");
console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.toString());
// Expected output: "foo"

// ! toUpperCase()
// *Converts all characters in the string to uppercase.
// * This method is useful for standardizing text to uppercase.
const sentence5 = "The quick brown fox jumps over the lazy dog.";
console.log(sentence5.toUpperCase());
// Expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."

// ! trim()
// * Removes whitespace from both ends of the string.
// * This method is useful for cleaning up strings by removing unnecessary spaces.
const greeting = "   Hello world!   ";
console.log(greeting);
// Expected output: "   Hello world!   "

console.log(greeting.trim());
// Expected output: "Hello world!"

// ! valueOf()
// * Returns the primitive value of the String object.
// * This method is useful for converting a String object to a primitive string value.
const stringObj1 = new String("foo");
console.log(stringObj1);
// Expected output: String { "foo" }

console.log(stringObj1.valueOf());
// Expected output: "foo"
