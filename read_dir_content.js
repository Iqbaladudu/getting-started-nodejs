const fs = require('fs')
const path = require('path')

export const basePath = "/home/iqbaladudu/"
export const folder = "Documents"
export const fullPath = path.join(basePath, folder)

const contents = fs.readdirSync(fullPath)

for (let content in contents) {
    console.log(contents[content])
}

console.log("======")

// get full path
const getFullPath = fs.readdirSync(fullPath).map(fileName => {
    return path.join(fullPath, fileName)
})

console.log(getFullPath)

// Filter result
const isFile = fileName => {
    return fs.lstatSync(fileName).isFile();
}

const justFiles = fs.readdirSync(fullPath)
    .map(fileName => {
        return path.join(fullPath, fileName)
    })
    .filter(isFile)

console.log(justFiles);