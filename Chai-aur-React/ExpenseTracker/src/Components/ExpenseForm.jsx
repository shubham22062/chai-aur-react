import { useState } from "react"

export default function ExpenseForm({ addExpense }) {
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title || !amount) return
    addExpense({ id: Date.now(), title, amount })
    setTitle("")
    setAmount("")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-2xl p-5 w-full max-w-md mb-6"
    >
      <div className="mb-3">
        <input
          type="text"
          placeholder="Expense Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Add Expense
      </button>
    </form>
  )
}
