const fs = require('fs')

const folderName = "newFolder";

try {
    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName)
        return console.log("Sukses")
    }
} catch (err) {
    console.log(err)
}