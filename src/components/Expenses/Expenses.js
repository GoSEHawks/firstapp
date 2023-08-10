import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import { useState } from 'react';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [filterdYear,setFilterdYear] =useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilterdYear(selectedYear);
  }
  const filterExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filterdYear;
  });

  
  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter selected={filterdYear}
      onChangeFilter ={filterChangeHandler}/>
      <ExpensesChart expenses = {filterExpenses}/>
      <ExpenseList items ={filterExpenses}/>
    </Card>
    </div>
  );
}

export default Expenses;