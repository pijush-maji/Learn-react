import { useState } from "react";
import ExpenseItem from "./component/ExpenseItem";
import NewExpense from "./component/NewExpense/NewExpense";


function App() {

    
  const intialExpenes =[{
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenses, setExpenses] = useState(intialExpenes);

  const onGetDataFromNewExpenseHandler = (newExpense) =>{
   
    //if state depends on previous state, correct way is-update the state using function
    //below function first it'll add the new value in a new array then push the
    //previous state value in the array
    setExpenses((prvExpenses) =>{
      return [newExpense,...prvExpenses]
    });
    
    console.log(expenses);
  }

  return (
    <div>
      <NewExpense onGetDataFromNewExpense={onGetDataFromNewExpenseHandler} />
      
      {expenses.map(exp => <ExpenseItem key={exp.id} expense={exp}/>)}
      {/* <ExpenseItem expense={expenses[0]}></ExpenseItem>
      <ExpenseItem expense={expenses[1]}></ExpenseItem>
      <ExpenseItem expense={expenses[2]}></ExpenseItem>
      <ExpenseItem expense={expenses[3]}></ExpenseItem> */}
    </div>
  );
}

export default App;
