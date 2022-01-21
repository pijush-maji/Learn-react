import { useState } from 'react';
import './ExpenseItem.css';

function ExpenseItem(props) {
    const [title,setTitle] = useState(props.expense.title)
    const clickHandler = () => {
        setTitle("Updated")
        console.log(title)
    }

    return (
        <div className="expense-item">
            <div>{props.expense.date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">
                    ${props.expense.amount}
                </div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </div>
    )
}

export default ExpenseItem;