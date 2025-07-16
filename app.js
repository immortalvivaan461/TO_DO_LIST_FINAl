const express = require("express");
const app = express();
const PORT = 3000;

const mongoose = require('mongoose');
const path = require("path");
const TODO = require("./models/todo.js")
const methodOverride = require("method-override")


app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

main()
    .then(() => {
        console.log("connection successfully")
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/ToDo-Data');

}

app.post("/", (req, res) => {
    let { task } = req.body;
    let newtask = new TODO({
        work: task
    })

    newtask.save()
    .then((res) =>{
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

    res.redirect("/")
});

app.delete("/:id", async (req ,res)=>{
    let { id } = req.params;
    let deletedTask = await TODO.findByIdAndDelete(id);
    // console.log(deletedTask);
    res.redirect("/")
})

app.patch("/toggle/:id", async (req, res) => {
    const { id } = req.params;
    const task = await TODO.findById(id);
    task.done = !task.done;
    await task.save();
    res.redirect("/");
});


app.get("/", async (req, res) => {
    let works = await TODO.find();
    // console.log(works);
    res.render("home.ejs", { works });
});

app.get("/:id/edit",async (req,res)=>{
    let { id } = req.params;
    let toupdatetask = await TODO.findById(id);
    res.render("edit.ejs",{toupdatetask})
});

app.put("/edit/:id", async ( req, res) =>{
    let { id } = req.params;
    let { editedtask: newtask} = req.body;
    let updatedTask = await TODO.findByIdAndUpdate( id, {work: newtask}, {new: true});
    res.redirect("/")
})

app.listen(PORT, () => {
    console.log("server Started");
})