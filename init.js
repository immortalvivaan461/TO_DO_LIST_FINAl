//this is a separete file to send some preloaded data in database
const mongoose = require('mongoose');
const Chat = require("./models/todo.js");

main()
    .then(() => {
        console.log("connection successfully")
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/ToDo-Data');
}

let allWork = [
    {
       work: "Complete Java Notes"
    },
    {
        work: "Check Emails"
    },
    {
        work: "DSA Practice"
    },
    {
        work: "Website Submission"
    },
    {
        work: "Gym"
    },
    {
        work: "marketing"
    }
];

Chat.insertMany(allWork);