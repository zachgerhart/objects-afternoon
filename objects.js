// Create an object called user that has name, age, password properties and assign them appropriate values.

var user = {
  name: "zach",
  age: 26,
  password: "asdf;lkj"
};// Code Here



// Add an email and username, as well as a method called alertUser that alerts the users name, to your user object using dot notation.

user.email = "zgerhart@gmail.com"
user.username = "zachgerhart"// Code Here



// Now loop over your user object and alert each of the keys.

for ( var key in user){
  alert(key);
}// Code Here



// Now loop over your user object and alert each of the values for each key.

for (var key in user){
  alert(user[key])
}// Code Here



// Remove the username from your user object

delete user.username// Code Here



// Create an object called creditCard that has number, cvc, type, and limit properties and assign them appropriate values.

var creditCard = {
  number: 12345678,
  cvc: 988,
  type: "visa",
  limit: 3000
};  // Code Here



// Create a variable called alternating. Set it equal to the string bonusCategories.
var alternating = "bonusCategories"

// Code Here



/* Using bracket notation, add a bonusCategories key to your creditCard object using 'alternating'.
    Set it's value to an array of 3 items that are objects.
    Each object should have one key value pair.
    That key value pair should be the category as the key and the percent it's work for the bonus as the value.
    (e.g. Department Stores, 5%)

    Using dot notation add another key to your object called 'bank' with the value being an object with 2 keys,
        the bank name, and the bank address.

    */

creditCard[alternating] = [{food: "3%"},{gas: "2%"}, {cash: "1%"}];
creditCard.bank = {
  bank name: "Wells Fargo",
  bank address: "jkdnajkndad"
};// Code Here



// Write a function that will take your creditCard object and user object as arguments and combine them into one object. /* HINT: You will need a for..in loop */
function myFunction(creditCard, user){
  var newArr1 = [];
  var newArr2 = [];
  for(var key in creditCard ){

}// Code Here


/*Below you are given an object. Write a function that will loop over the allies property, remove LittleFinger, and insert Dragon Lady.
    It will also change alive to 'More Than Ever'.
    Return the object. */

var obj = {
    user: 'Jon Snow',
    allies: ['That guy into Brienne', 'Ser Davos', 'LittleFinger'],
    alive: 'Sort of',
  };

  // Code Here
