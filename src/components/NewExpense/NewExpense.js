
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

function NewExpense(props){
    const [isEditing, setIsEdititng] = useState(false);

    function saveExpenseDataHandler (enterdExpensedata) {
        const expenseData={ 
           ...enterdExpensedata,
            id: Math.random().toString()};
            props.onAddExpense(expenseData);
            setIsEdititng(false)
        }
    const startEdditingHandler = () => {
        setIsEdititng(true);
    }
    const stopEdditingHandler = () => {
        setIsEdititng(false);
    }
    return <div className="new-expense">
       {!isEditing && <button onClick={startEdditingHandler}>Add New Expense</button>} 
       {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel={stopEdditingHandler}/>} 
    </div>
}
export default NewExpense;