import fs from 'fs'

fs.rename("./newFolder", "./newRenameFolder", err => {
    if (err) {
        console.log(err)
    }

    console.log('Success')
})