const fs = require('fs')

const content = 'Last!'

fs.appendFile('./writing_file.txt', content, err => {
    if (err) {
        console.log(err)
        return
    }

    console.log("Sukses!")

    const readfile = async () => {
        try {
            console.log('Reading file...')
            await fs.readFile("./writing_file.txt", "utf-8", (err, data) => {
                err && console.log(err)
                console.log(data)
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    readfile()
})