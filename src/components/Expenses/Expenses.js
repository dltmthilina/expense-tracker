import React, { useState } from 'react';
import ExpenseFilter from "./ExpensesFilter";
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesList  from './ExpensesList';
import ExpensesChart from './ExpensesChart';


const Expenses= (props) =>{

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (filterYear)=>{
        setFilteredYear(filterYear);
        console.log('Expense.js');
        console.log(filterYear);
    };

    const filteredExpenses = props.item.filter(expense=>{
        return expense.date.getFullYear().toString() === filteredYear;
    })

    

    return(

        <Card className= 'expenses'>
          
            <ExpenseFilter selected = {filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
{            <ExpensesList item={filteredExpenses}/>}
        </Card>
    
        
    );
}

export default Expenses;