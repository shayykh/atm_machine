"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var myBalance = 10000; //Dollars
var myPin = 1234;
var pinAns = await inquirer_1.default.prompt([
    {
        type: "number",
        name: "pin",
        message: "Enter your pin: ",
    },
]);
if (pinAns.pin === myPin) {
    console.log("Your balance is $".concat(myBalance));
    var option = await inquirer_1.default.prompt([
        {
            type: "list",
            name: "key",
            message: "Choose an option: ",
            choices: ["Deposit", "Quick Withdraw", "Cash Withdraw", "Change Pin", "Check Balance"],
        },
    ]);
    switch (option.key) {
        case "Deposit":
            var deposit = await inquirer_1.default.prompt([
                {
                    type: "number",
                    name: "amount",
                    message: "Enter the amount you want to deposit: ",
                },
            ]);
            if (deposit.amount < 0) {
                console.log("Invalid amount");
            }
            else {
                myBalance += deposit.amount;
                console.log("You have deposited $".concat(deposit.amount));
                console.log("Your new balance is $".concat(myBalance));
            }
            break;
        case "Quick Withdraw":
            var quickWithdraw = await inquirer_1.default.prompt([
                {
                    type: "list",
                    name: "amount",
                    message: "Choose amount to withdraw: ",
                    choices: [100, 200, 500, 1000, 2000, 5000, 10000, 20000, 50000],
                },
            ]);
            if (quickWithdraw.amount > myBalance) {
                console.log("Insufficient funds");
            }
            else {
                console.log("You have withdrawn $".concat(quickWithdraw.amount));
                myBalance -= quickWithdraw.amount;
                console.log("Your new balance is $".concat(myBalance));
            }
            break;
        case "Cash Withdraw":
            var cashWithdraw = await inquirer_1.default.prompt([
                {
                    type: "number",
                    name: "amount",
                    message: "Enter the amount you want to withdraw: ",
                },
            ]);
            if (cashWithdraw.amount > myBalance) {
                console.log("Insufficient funds");
            }
            else {
                console.log("You have withdrawn $".concat(cashWithdraw.amount));
                myBalance -= cashWithdraw.amount;
                console.log("Your new balance is $".concat(myBalance));
            }
            break;
        case "Change Pin":
            var changePin = await inquirer_1.default.prompt([
                {
                    type: "number",
                    name: "newPin",
                    message: "Enter your new pin: ",
                },
            ]);
            myPin = changePin.newPin;
            console.log("Your pin has been changed to ".concat(changePin.newPin));
            break;
        case "Check Balance":
            console.log("Your balance is ".concat(myBalance));
            break;
        default:
            console.log("Invalid option");
            break;
    }
}
else {
    console.log("Invalid pin");
}
