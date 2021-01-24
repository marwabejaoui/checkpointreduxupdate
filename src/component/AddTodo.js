import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/todoAction";

const AddTodo = () => {
    const [text, setText] = useState("");

    const dispatch = useDispatch();
    const add = () => {
        dispatch(addTodo({ id: Math.random(), iscomplete: false, text: text }));
        setText("");
    };

    return (
        <div className="input">
            <div className="add">
                <h1> to do app  </h1>
                <h2> add new todo </h2>
                <input type="text"
                    id="myinput"
                    placeholder="  ..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button className=" addbtn" onClick={add}>
                    Add </button>
            
            </div>
        </div>
    )
}
export default AddTodo;
