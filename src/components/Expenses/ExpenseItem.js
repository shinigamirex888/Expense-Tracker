// A component in react is just a js function
import React,{ useState } from 'react';
import ExpenseDate from './ExpenseDate'
import "./ExpenseItem.css"
import Card from '../UI/Card'
 //using State

function ExpenseItem(props) {
  const[title,setTitle]= useState(props.title);


    // const expenseDate=new Date(2021,2,28);
    // const expenseTitle="Car Insurance";
    // const expenseAmount=223.4;
    
    const clickHandler=()=>{    //handling clicks
      setTitle('Updated');
      console.log(title);
    };
    
    return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
