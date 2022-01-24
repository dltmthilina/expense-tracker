import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses' ; 
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 100,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 100, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 100,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 100,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense =>{
    console.log(expense)
    setExpenses((prev)=>{
      return [...prev, expense];
    });
  };

  return (
    <div>
      
      {/* <ExpenseItem title={expenses[0].title } 
      amount={expenses[0].amount} 
      date={expenses[0].date}/>

      <ExpenseItem title={expenses[1].title } 
      amount={expenses[1].amount} 
      date={expenses[1].date}/>  */}

      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses item ={expenses}/>

      
    </div>
  );
}

export default App;
