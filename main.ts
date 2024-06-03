#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


// define the question type to structure each question

type Question = {
    question: string;
    choices:string[];
    correctAnswer: string;
};

// define the quiz question and their correct answers

const questions: Question [] =[
    {
        question: `who is the CEO of tesla?`,
        choices: [`jeff bezos`,`elon musk`,`bill gates`,`tony stark`],
        correctAnswer:`elon musk`
    },
    {
        question:`what is the capital of india?`,
        choices: [`new delhi`,`mumbai`,`haryana`,`amadabad`],
        correctAnswer:`new delhi`
    },
    {
        question: `Who made the nuclear bomb in Pakistan?`,
        choices:[`nawaz sharif`,`abdul qadir khan`,`benazir bhutto`,`imran khan`],
        correctAnswer:`abdul qadir khan`
    },
    {
        question: `Which city is the biggest in Pakistan?`,
        choices:[`lahore`,`islamabad`,`peshawar`,`karachi`],
        correctAnswer:`karachi`
    },
    {
        question:`what is the smallest prime number?`,
        choices:[`0`,`1`,`2`,`3`],
        correctAnswer:`2`
    },
];

//asks the quiz question in the user and evaluates their responses.
async function askQuestions() {
    let correctAnswers = 0;
    let wrongAnswers = 0;
    // loop through each question in the questions array
    for (const q of questions) {
        //prompt the user with the current question and choices
        const answer = await inquirer.prompt([
        {
            type:`list`,
            name:`response`,
            message: q.question,
            choices: q.choices
        }
    ]);

    // check if the user's answer matches the correct answer
    if (answer.response === q.correctAnswer) {
        console.log(chalk.bgGreenBright.bold(`Correct\n`));
        correctAnswers++; //increment the score for correct answer
    }
    else {
        console.log(`${chalk.bold.bgRedBright("Wrong!")} the corrext answer is "${chalk.bold.bgGreen(q.correctAnswer)}".\n`);
        wrongAnswers++;

    }
    }
    //display the user final score
    console.log("-".repeat(31));
    console.log(chalk.bold.bgGray(`\tfinal score:`));
    console.log("-".repeat(31));
    console.log(chalk.bold(`${chalk.bgGreen(`Correct Answers: ${correctAnswers}`)}\n${chalk.bgRed(`Wrong Answers: ${wrongAnswers}`)}\n${chalk.yellowBright(`total question: ${questions.length}`)}`));
    console.log("-".repeat(31));
}

// start the quiz
askQuestions();