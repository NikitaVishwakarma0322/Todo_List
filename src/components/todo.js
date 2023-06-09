import React, { useState } from "react";
import './todo.css';
const Todo = (props) => {
    const[inputText, setInputText] = useState('');

    return( 
       
        <div>
            <div className="input-container">
                <input type="text" className="input-box-todo" placeholder="Enter your Todo" value={inputText}
                onChange = { e =>  setInputText( e.target.value ) }
                /> 
                <button className="add-btn" onClick={()=>{props.addList(inputText) 
                    setInputText("") }}>+</button>
              
                
                
            </div>
        </div>

    );
}

export default Todo;