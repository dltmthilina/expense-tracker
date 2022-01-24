import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

export const ExpensesList = (props) => {
    if(props.item.length===0){
        return <h2 className='expenses-list__fallback'>No Expenses Found</h2>;
    }

    return (
             <ul className='expenses-list'>
                {
                 props.item.map(expense=> (
                    <ExpenseItem 
                        title = {expense.title} 
                        amount = {expense.amount} 
                        date={expense.date}
                    />
                    ))
                }
        </ul>
    )
}

export default ExpensesList;
