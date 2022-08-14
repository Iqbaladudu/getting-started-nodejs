const path = require('path')

const iqbal = '/home/iqbaladudu/Documents/iqbal.txt'
const name = 'iqbaladudu'

console.log(path.dirname(iqbal))
console.log(path.basename(iqbal)) // filename.ext
console.log(path.extname(iqbal)) //.txt
console.log(path.basename(iqbal, path.extname(iqbal))) // get file name without extension

// Join
console.log(path.join('/', 'home', name, 'Documents/iqbal.txt'))

// Get absolute path
console.log(path.resolve(iqbal))

// Normalize => can be used with ../
console.log(path.normalize(path.join(iqbal, '..')))