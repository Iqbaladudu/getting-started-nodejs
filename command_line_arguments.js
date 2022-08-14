// Will iterate over all arguments, including node path and file path and additional arguments
process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
})

// Get additional arguments, wil, return array of additional arguments
// const args = process.argv.slice(2);
// console.log(args)
// result = ['name=iqbal', 'cwk', ...]
// How to parse 1st result?
// Try this
const args = require('minimist')(process.argv.slice(2));
// Add double dashes befor each argument: --name=iqbal
console.log(`Nama saya adalah ${args.name}`)