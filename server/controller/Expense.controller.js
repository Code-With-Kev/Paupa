const Expense = require("../models/Expense.model")

//find all
module.exports.allExpenses = (req, res) => {
    Expense.find()
        .then(allExpenses => res.json({results: allExpenses}))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

//create
module.exports.createExpense = (req, res) => {
    Expense.create(req.body)
    .then(newExpense => res.json({results: newExpense}))
    .catch(err => res.status(400).json(err))
}

//find one
module.exports.oneExpense = (req, res) => {
    Expense.findOne({_id: req.params.id})
        .then(Expense => res.json({results: Expense}))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

//update
module.exports.updateExpense = (req, res) => {
    Expense.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        { new: true, runValidators: true})
        .then(Expense => res.json({results: Expense}))
        .catch(err => res.status(400).json(err))
}

//delete
module.exports.deleteExpense = (req, res) => {
    Expense.deleteOne({_id: req.params.id})
        .then(result => res.json({results: result}))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}