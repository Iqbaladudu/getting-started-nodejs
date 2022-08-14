const fs = require('fs')

const content = 'Menulis!';

fs.writeFile('./writing_file.txt', content, err => {
    if (err) {
        console.log(err)
    }
    console.log("Sukses")
    console.log("Reading file....")
    fs.readFile("./writing_file.txt", 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(data)
    })
})