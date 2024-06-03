#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import inquirer_1 from "inquirer";
import chalk_1 from "chalk";
// define the quiz question and their correct answers
var questions = [
    {
        question: "who is the CEO of tesla?",
        choices: ["jeff bezos", "elon musk", "bill gates", "tony stark"],
        correctAnswer: "elon musk"
    },
    {
        question: "what is the capital of india?",
        choices: ["new delhi", "mumbai", "haryana", "amadabad"],
        correctAnswer: "new delhi"
    },
    {
        question: "Who made the nuclear bomb in Pakistan?",
        choices: ["nawaz sharif", "abdul qadir khan", "benazir bhutto", "imran khan"],
        correctAnswer: "abdul qadir khan"
    },
    {
        question: "Which city is the biggest in Pakistan?",
        choices: ["lahore", "islamabad", "peshawar", "karachi"],
        correctAnswer: "karachi"
    },
    {
        question: "what is the smallest prime number?",
        choices: ["0", "1", "2", "3"],
        correctAnswer: "2"
    },
];
//asks the quiz question in the user and evaluates their responses.
function askQuestions() {
    return __awaiter(this, void 0, void 0, function () {
        var correctAnswers, wrongAnswers, _i, questions_1, q, answer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    correctAnswers = 0;
                    wrongAnswers = 0;
                    _i = 0, questions_1 = questions;
                    _a.label = 1;
                case 1:
                    if (!(_i < questions_1.length)) return [3 /*break*/, 4];
                    q = questions_1[_i];
                    return [4 /*yield*/, inquirer_1.prompt([
                            {
                                type: "list",
                                name: "response",
                                message: q.question,
                                choices: q.choices
                            }
                        ])];
                case 2:
                    answer = _a.sent();
                    // check if the user's answer matches the correct answer
                    if (answer.response === q.correctAnswer) {
                        console.log(chalk_1.bgGreenBright.bold("Correct\n"));
                        correctAnswers++; //increment the score for correct answer
                    }
                    else {
                        console.log("".concat(chalk_1.bold.bgRedBright("Wrong!"), " the corrext answer is \"").concat(chalk_1.bold.bgGreen(q.correctAnswer), "\".\n"));
                        wrongAnswers++;
                    }
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4:
                    //display the user final score
                    console.log("-".repeat(31));
                    console.log(chalk_1.bold.bgGray("\tfinal score:"));
                    console.log("-".repeat(31));
                    console.log(chalk_1.bold("".concat(chalk_1.bgGreen("Correct Answers: ".concat(correctAnswers)), "\n").concat(chalk_1.bgRed("Wrong Answers: ".concat(wrongAnswers)), "\n").concat(chalk_1.yellowBright("total question: ".concat(questions.length)))));
                    console.log("-".repeat(31));
                    return [2 /*return*/];
            }
        });
    });
}
// start the quiz
askQuestions();
