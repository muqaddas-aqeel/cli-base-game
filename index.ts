#!/usr/bin/env node
import inquirer from  'inquirer';
 



const randomNumber = Math.floor(Math.random() * 6 +1);
// console.log(randomNumber);

const answer = await inquirer.prompt([

{
     name: "useGuessedNumber",
     type: "number",
     message:"please guess a number between 1-6:",
     

}
    ]);
    if(answer.useGuessedNumber === randomNumber){
        
        console.log("congtratulation! you guessed right number");
    }

else{
console.log("you guessed rong number");
}

    