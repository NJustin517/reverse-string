function reverseString(str) {
  const strArray = str.split("");
  const newArray = [];
  strArray.forEach((char) => newArray.unshift(char));
  return newArray.join("");
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

//Pseudocode:
//Split the string into and array
//Iterate over the array and unshift into new array to get the
//array in revers order
//Join the array back into a string

//I started by splitting the string into and array of individual characters.
//Then I used the forEach array iteration method to iterate over each char.
//I then made sure that the char I was on was added to the front of a new, empty array using unshift.
//I then joined the new, reversed array into a string and returned the result.
