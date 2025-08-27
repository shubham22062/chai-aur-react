export default function ExpenseList({ expenses, deleteExpense }) {
  return (
    <div className="w-full max-w-md bg-black shadow-md rounded-2xl p-5">
      <h2 className="text-lg font-semibold mb-3 text-white">Expenses</h2>
      {expenses.length === 0 ? (
        <p className="text-gray-400">No expenses added yet.</p>
      ) : (
        <ul className="space-y-2">
          {expenses.map((e) => (
            <li
              key={e.id}
              className="flex justify-between items-center bg-gray-800 p-2 rounded-lg"
            >
              <span className="text-gray-100">
                {e.title} - ₹{e.amount}{" "}
                <small className="text-gray-400">({e.date})</small>
              </span>
              <button
                onClick={() => deleteExpense(e.id)}
                className="text-red-400 hover:text-red-600"
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
