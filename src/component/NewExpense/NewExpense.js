import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";



const NewExpense = (props) =>{

    const saveDataHandler = (savedData) =>{
        const newExpense={
            ...savedData,
            id:Math.random().toString()
        };
        props.onGetDataFromNewExpense(newExpense);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveData={saveDataHandler} />
        </div>
    )
}

export default NewExpense;