
import React, { useState } from "react";

 function Expenses() {
   const [expenses, setExpenses] = useState([]);
   const [expense, setExpense] = useState("");
   const [category, setCategory] = useState("");
   const [description, setDescription] = useState("");
   const [amount, setAmount] = useState("");
   const [date, setDate] = useState("");
   const [search, setSearch] = useState("");

   const handleSubmit = (event) => {
     event.preventDefault();
     if (!expense || !category || !description || !amount || !date) {
       alert("Fill all the fields");
       return;
     }

     const newExpense = {
       id: Date.now(),
       expense,
       category,
       description,
       amount,
       date,
     };

     setExpenses([newExpense, ...expenses]);
     setExpense("");
     setCategory("");
     setDescription("");
     setAmount("");
     setDate("");
   };

   const handleDelete = (id) => {
     setExpenses(expenses.filter((item) => item.id !== id));
   };

   const filteredExpenses = expenses.filter((item) =>
     item.expense.toLowerCase().includes(search.toLowerCase()) ||
     item.category.toLowerCase().includes(search.toLowerCase()) ||
     item.description.toLowerCase().includes(search.toLowerCase()) ||
     item.amount.toString().includes(search) ||
     item.date.includes(search)
   );

   return (
     <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-xl mt-8">
      <h1 class="text-center text-3xl font-semibold mt-6">Expense Tracker</h1>

       <h1 className="text-2xl font-bold mb-4 text-center text-gray-800"> Add Expense </h1>

       <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
         <input
           type="text"
           placeholder="Expense"
           value={expense}
           onChange={(e) => setExpense(e.target.value)}
           className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
         />
         <input
           type="text"
           placeholder="Category"
           value={category}
           onChange={(e) => setCategory(e.target.value)}
           className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
         />
         <input
           type="text"
           placeholder="Description"
           value={description}
           onChange={(e) => setDescription(e.target.value)}
           className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
         />
         <input
           type="number"
           placeholder="Amount"
           value={amount}
           onChange={(e) => setAmount(e.target.value)}
           className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
         />
         <input
           type="date"
           value={date}
           onChange={(e) => setDate(e.target.value)}
           className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
         />
         <button
           type="submit"
           className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition duration-300"
         >
           Submit
         </button>
       </form>

       <input
         type="text"
         placeholder="Search expenses..."
         value={search}
         onChange={(e) => setSearch(e.target.value)}
         className="mb-4 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
       />

       <div className="overflow-x-auto">
         <table className="w-full table-auto border-collapse rounded-lg overflow-hidden shadow-sm">
           <thead>
             <tr className="bg-blue-100 text-gray-700">
               <th className="px-4 py-2 text-left">Expense</th>
               <th className="px-4 py-2 text-left">Category</th>
               <th className="px-4 py-2 text-left">Description</th>
               <th className="px-4 py-2 text-left">Amount</th>
               <th className="px-4 py-2 text-left">Date</th>
               <th className="px-4 py-2 text-center">Action</th>
             </tr>
           </thead>
           <tbody>
             {filteredExpenses.length > 0 ? (
               filteredExpenses.map((item) => (
                 <tr key={item.id} className="hover:bg-gray-50">
                   <td className="border-t px-4 py-2">{item.expense}</td>
                   <td className="border-t px-4 py-2">{item.category}</td>
                   <td className="border-t px-4 py-2">{item.description}</td>
                   <td className="border-t px-4 py-2">Ksh {item.amount}</td>
                   <td className="border-t px-4 py-2">{item.date}</td>
                   <td className="border-t px-4 py-2 text-center">
                     <button
                       onClick={() => handleDelete(item.id)}
                       className="text-red-500 hover:text-red-700 transition"
                     >
                       Delete
                     </button>
                   </td>
                 </tr>
               ))
             ) : (
               <tr>
                 <td colSpan="6" className="text-center py-6 text-gray-400">
                   No expenses found
                 </td>
               </tr>
             )}
           </tbody>
         </table>
       </div>
     </div>
   );
 }

 export default Expenses;