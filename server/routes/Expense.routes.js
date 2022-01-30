const ExpenseController = require("../controller/Expense.controller")

module.exports = app => {
    app.get("/api/expenses", ExpenseController.allExpenses)
    app.post("/api/expenses", ExpenseController.createExpense)
    app.get("/api/expenses/:id", ExpenseController.oneExpense)
    app.put("/api/expenses/:id", ExpenseController.updateExpense)
    app.delete("/api/expenses/:id", ExpenseController.deleteExpense)
}
