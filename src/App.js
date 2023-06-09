// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Todo from './components/todo';
import { useState } from 'react';
import List from './components/list';

function App() {
  const[listTodo,setListTodo] = useState([]);
  let addList = (inputText) =>{
    setListTodo([...listTodo,inputText])
  }
  return (
    <div className='main-container'>
      <div className='center-container'>
            <Todo addList={addList} />
            <h1 className='app-heading'>TODO</h1>
            <hr></hr>
            {listTodo.map((listItem,i) => {
              return(
                <List key={i} item={listItem}/>
              )
            })}
      </div>



    </div>
  );
}

export default App;
