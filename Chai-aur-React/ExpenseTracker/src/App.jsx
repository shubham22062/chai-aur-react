import { useState } from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import SummaryCard from './components/SummaryCard'

export default function App() {
  const [expenses, setExpenses] = useState([])

  const addExpense = (expense) => {
    setExpenses([...expenses, expense])
  }

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id))
  }

  const total = expenses.reduce((acc, e) => acc + parseFloat(e.amount), 0)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-900 tracking-wide">
        💰 Expense Tracker
      </h1>

      {/* Summary Section */}
      <SummaryCard total={total} />

      {/* Form Section */}
      <ExpenseForm addExpense={addExpense} />

      {/* List Section */}
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
    </div>
  )
}
