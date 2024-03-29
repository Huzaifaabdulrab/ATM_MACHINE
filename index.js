#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellow(".............ATM machine create by Huzaifa Abdulrab............................GIAIC beach 1 "));
let myBalance = 10000;
let pin = Math.floor(Math.random() * 10000);
let userName = await inquirer.prompt([
    {
        message: chalk.blueBright("Please enter your name"),
        name: "name",
        type: "string"
    }
]);
console.log(chalk.italic.gray.underline(`Dear ${chalk.bold(userName.name)} your pin code is ${chalk.white(pin)}`));
let userPin = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.blue("Please enter pin code"),
    },
]);
if (userPin.pin === pin) {
    console.log(chalk.white.bold(`correct pin code wellcome to your ATM account!`));
    console.log(chalk.green(`Your current balance is ${myBalance}$`));
    let operation = await inquirer.prompt([
        {
            name: "operation",
            message: (chalk.red("Please choose an option")),
            type: "list",
            choices: ["withdrow", "faster cash", "cheak balance"],
        }
    ]);
    if (operation.operation === "withdrow") {
        let ammountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: chalk.underline(("Enter your amount")),
            }
        ]);
        if (ammountAns.amount >= 0 && ammountAns.amount <= myBalance) {
            myBalance -= ammountAns.amount;
            console.log(chalk.bold.yellowBright(`Your remaing balanced is ${myBalance}$`));
        }
        else {
            console.log(chalk.red.overline(`Please drow a valid ammount your current amount is ${myBalance}$`));
        }
    }
    if (operation.operation === "faster cash") {
        let cashlist = await inquirer.prompt([
            {
                name: "cash",
                type: "list",
                message: chalk.underline("Choose you amount"),
                choices: ["1000", "2000", "5000", "10000"]
            }
        ]);
        if (cashlist.cash === cashlist.cash) {
            myBalance -= cashlist.cash;
            console.log(chalk.bold.yellowBright(`Your remaing balanced is ${myBalance}$`));
        }
    }
    else if (operation.operation === "cheak balance") {
        console.log(chalk.bold.yellowBright(`Your balace is ${myBalance}$`));
    }
}
else {
    console.log(chalk.red(`Incorrect pin`));
}
