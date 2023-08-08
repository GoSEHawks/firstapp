import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import { useState } from 'react';

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
      <ExpensesFilter selected={filterdYear} onChangeFilter ={filterChangeHandler}/>
      {filterExpenses.map((expense) => (
       <ExpenseItem 
          key={expense.id}
          title ={expense.title}
          amount={expense.amount}
          date={expense.date}
          />))}
    </Card>
    </div>
  );
}

export default Expenses;