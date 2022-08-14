const fs = require('fs')

const folderName = "unused"

// Create folder first
const unusedFolder = () => {
    try {
        !fs.existsSync(folderName) && fs.mkdirSync(folderName)
        return console.log(`Folder ${folderName} sukses dibuat`)
    } catch (error) {
        console.error(error)
    }
}

unusedFolder()

const removeFolder = fs.rmdir(folderName, err => {
    if (err) {
        throw err;
    }

    console.log(`${folderName} is deleted!`)
})