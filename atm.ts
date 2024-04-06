import inquirer from "inquirer";
import chalk from "chalk";


let myBalance = 120000;
let myPin = 3699;
console.log(chalk.green("\n \twelcome to code with Hameeda- ATM Machine\n"));
let pinAnswer = await inquirer.prompt([
{
    name: "pin",
    type:"number",
    message: chalk.yellow("Enter your pin code:")
}
])
if (pinAnswer.pin === myPin){
    console.log(chalk.blue(" \nPin is correct, login successfully!\n"));
//    console.log(`Current Account Balance is ${myBalance}`)

    let operationAns =await inquirer.prompt([

        {
            name:"operation",
            type: "list",
            message: "Select an operation:",
            choices:["Withdraw Amount","Cheque Balance"]

        }     
    ])
    if (operationAns.operation=== "Withdraw Amount"){
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "Select a withdraw method:",
                choices:["Fast cash","Enter Amount"]
            }
        ])
        if(withdrawAns.withdrawMethod ==="Fast cash"){
            let fastcashAns =await inquirer.prompt([
    
                {
                    name: "fastCash",
                    type: "list",
                    message: "Select Amount:",
                    choices: [10000,50000,700,1000,500]
                    
                    }  
            ])
            if(fastcashAns.fastCash > myBalance){
                console.log(chalk.red("Insufficient Balance"));
            }
            else{
            
                myBalance -=fastcashAns.fastCash;
                console.log(`${fastcashAns.fastCash}withdraw Successfully`);
                console.log(`Your remaining balance is: ${myBalance}`)
            }
        }

    }
    else if(operationAns.operation === "check balance"){
        console.log(`Your account Balance is: ${myBalance}`);
    }

}

else{
    console.log(chalk.red("Pin is incorrect,Try Again!"));

}