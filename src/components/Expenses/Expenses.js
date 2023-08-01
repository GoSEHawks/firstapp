import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import { useState } from 'react';

function Expenses(props) {
  const [filterdYear,setFilterdYear] =useState('2020');
  const filterChangeHandler = seletedYear => {
    console.log('Expanses.js');
    setFilterdYear(seletedYear);

  }
  return (
    <div>

    <Card className="expenses">
      <ExpensesFilter selected={filterdYear} onChangeFilter ={filterChangeHandler}/>
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
    </Card>
    </div>
  );
}

export default Expenses;