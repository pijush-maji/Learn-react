import './ExpenseItem.css';

function ExpenseItem(props) {
    let title = props.expense.title;
    const clickHandler = () => {
        title = "Upadated!"
        console.log(title)
    }

    return (
        <div className="expense-item">
            <div>{props.expense.date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{props.expense.title}</h2>
                <div className="expense-item__price">
                    ${props.expense.amount}
                </div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </div>
    )
}

export default ExpenseItem;