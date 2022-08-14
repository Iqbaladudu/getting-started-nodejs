import inquirer from "inquirer"

const question = [
    {
        type: 'input',
        name: 'name',
        message: "What's ur name? "
    },
]

const prompt = inquirer.createPromptModule()

prompt(question).then(answers => {
    console.log(`Hi ${answers.name}!`)
})