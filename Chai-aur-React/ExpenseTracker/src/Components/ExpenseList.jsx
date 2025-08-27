export default function ExpenseList({ expenses, deleteExpense }) {
  return (
    <div className="w-full max-w-md bg-white shadow-md rounded-2xl p-5">
      <h2 className="text-lg font-semibold mb-3">Expenses</h2>
      {expenses.length === 0 ? (
        <p className="text-gray-500">No expenses added yet.</p>
      ) : (
        <ul className="space-y-2">
          {expenses.map((e) => (
            <li
              key={e.id}
              className="flex justify-between items-center bg-gray-50 p-2 rounded-lg"
            >
              <span>
                {e.title} - ₹{e.amount}
              </span>
              <button
                onClick={() => deleteExpense(e.id)}
                className="text-red-500 hover:text-red-700"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
