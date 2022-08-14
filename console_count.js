// console.count() will count the number of times a string is printed, and print the count next to it
const oranges = ['orange', 'orange'];
const apples = ['just one apple apple'];

oranges.forEach((fruit) => {
    console.count(fruit)
})
apples.forEach((fruit) => {
    console.count(fruit)
})

// Reset counting
console.countReset('orange')
console.log('--resetting--')
oranges.forEach(fruit => {
    console.count(fruit);
});
