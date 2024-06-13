#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; //Dollars
let myPin: number = 1234;

const pinAns = await inquirer.prompt(
    [
        {
            type: "number",
            name: "pin",
            message: "Enter your pin: ",
        },
    ]
);

if (pinAns.pin === myPin) {
    console.log(`Your current balance is $${myBalance}`);
    const option = await inquirer.prompt(
        [
            {
                type: "list",
                name: "key",
                message: "Choose an option: ",
                choices: ["Deposit", "Quick Withdraw", "Cash Withdraw", "Change Pin", "Check Balance"],
            },
        ]
    )

    switch (option.key) {
        case "Deposit":
            const deposit = await inquirer.prompt(
                [
                    {
                        type: "number",
                        name: "amount",
                        message: "Enter the amount you want to deposit: ",
                    },
                ]
            )
            if (deposit.amount < 0) {
                console.log("Invalid amount");
            } else {
                myBalance += deposit.amount;
                console.log(`You have deposited $${deposit.amount}`);
                console.log(`Your new balance is $${myBalance}`);
            }

            break;
        
        case "Quick Withdraw":
            const quickWithdraw = await inquirer.prompt(
                [
                    {
                        type: "list",
                        name: "amount",
                        message: "Choose amount to withdraw: ",
                        choices: [100, 200, 500, 1000, 2000, 5000, 10000, 20000, 50000],
                    },
                ]
            )
            if (quickWithdraw.amount > myBalance) {
                console.log("Insufficient funds");
            } else {
                console.log(`You have withdrawn $${quickWithdraw.amount}`);
                myBalance -= quickWithdraw.amount;
                console.log(`Your new balance is $${myBalance}`);
            }

            break;
    
        case "Cash Withdraw":
            const cashWithdraw = await inquirer.prompt(
                [
                    {
                        type: "number",
                        name: "amount",
                        message: "Enter the amount you want to withdraw: ",
                    },
                ]
            )
            if (cashWithdraw.amount > myBalance) {
                console.log("Insufficient funds");
            } else {
                console.log(`You have withdrawn $${cashWithdraw.amount}`);
                myBalance -= cashWithdraw.amount;
                console.log(`Your new balance is $${myBalance}`);
            }

            break;
        
        case "Change Pin":
            const changePin = await inquirer.prompt(
                [
                    {
                        type: "number",
                        name: "newPin",
                        message: "Enter your new pin: ",
                    },
                ]
            )

            myPin = changePin.newPin;
            console.log(`Your pin has been changed to ${changePin.newPin}`);
            break;
        
        case "Check Balance":
            console.log(`Your balance is ${myBalance}`);
            break;
        
        default:
            console.log("Invalid option");
            break;
    }

}
else {
    console.log("Invalid pin");
}