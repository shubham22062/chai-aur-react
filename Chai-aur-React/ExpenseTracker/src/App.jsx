import { useState } from "react"
import ExpenseForm from "./Components/ExpenseForm"
import ExpenseList from "./Components/ExpenseList"
import SummaryCard from "./Components/SummaryCard"

export default function App() {
  const [expenses, setExpenses] = useState([])

  const addExpense = (expense) => {
    setExpenses([...expenses, expense])
  }

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id))
  }

  const total = expenses
    .reduce((acc, e) => acc + parseFloat(e.amount), 0)
    .toFixed(2)
  return (
    <div className="w-full h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 flex items-center">
        💰 Expense Tracker
      </h1>

      <SummaryCard total={0} />

      <ExpenseForm addExpense={() => {}} />

      <ExpenseList expenses={[]} deleteExpense={() => {}} />
    </div>
  );
}
