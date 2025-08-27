export default function SummaryCard({ total }) {
  return (
    <div className="bg-gradient-to-r from-green-400 to-green-600 text-white font-bold px-8 py-5 rounded-2xl shadow-lg mb-6 w-full max-w-md text-center">
      <h2 className="text-xl">Total Spent</h2>
      <p className="text-3xl mt-2">₹{total.toFixed(2)}</p>
    </div>
  )
}
