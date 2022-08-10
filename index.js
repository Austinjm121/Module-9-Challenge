const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const { title } = require('process');

const question = [
    {
        name: "title",
        message: "What is the name of your project?"
    },
    {
        name: "description",
        message: "Give a description of what your project is."
    },
    {
        name: "installation",
        message: "What must be installed for your project to run?"
    },
    {
        name: "test",
        message: "Describe how to test your project."
    },
    {
        name: "contribute",
        message: "Describe how to contribute to your project."
    },
    {
        name: "githubUserName",
        message: "Enter your github username."
    },
    {
        name: "email",
        message: "Enter your email."
    }
]