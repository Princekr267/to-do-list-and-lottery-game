import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './ToDoList.css';

export default function ToDoList(){
    let [todo, setTodo] = useState([{task: "sample task", id: uuidv4(), isDone: false}]);
    let [newTodo, setNewTodo] = useState("");
    let addNewTask = () => {
        setTodo((prevTodo)=>{
            return [...prevTodo, {task: newTodo, id: uuidv4(), isDone: false}];
        });
        setNewTodo("");
    }
    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
    }
    let deleteTodo = (id) => {
        setTodo((prevTodos)=>prevTodos.filter((prevTodos)=>prevTodos.id!=id));
    }
    let upperCaseAll = () => {
        setTodo((prevTodo)=>(
            prevTodo.map((prevTodo)=>{
            return {
                ...prevTodo,
                task: prevTodo.task.toUpperCase()
            };
        })
    ))
    }
    let doneTaskAll = () => {
        setTodo((prevTodo)=>(
            prevTodo.map((prevTodo)=>{
            return {
                ...prevTodo,
                isDone: true
            };
        })
    ))
    }
    let upperCaseOne = (id) => {
        setTodo((prevTodo)=>(
            prevTodo.map((prevTodo)=>{
            if(prevTodo.id==id){
                return {
                    ...prevTodo,
                    task: prevTodo.task.toUpperCase()
                };
            } else{
                return prevTodo;
            }})
        ));
    }
    let doneTaskOne = (id) => {
        setTodo((prevTodo)=>(
            prevTodo.map((todo)=>{
            if(todo.id==id){
                return {
                    ...todo,
                    isDone: true,
                
                };
            } else{
                return todo;
            }})
        ));
    };
    return (
        <div>
            <h1>To-Do List</h1>
            <input type="text" placeholder="Add a task" value={newTodo} onChange={updateTodoValue}/>
            <button onClick={addNewTask}>Add task</button>
            <br /><br /><br />
            <hr />
            <h4>Task To DO</h4>
            <ul className="task">{
                todo.map((todo) => (
                    <li key={todo.id}>
                        <span className="task-todo" style={todo.isDone ? {textDecorationLine: "line-through"}: {}}>{todo.task}</span>
                        &nbsp;&nbsp;
                        <button className="delete" onClick={()=>deleteTodo(todo.id)}>Delete</button>
                        <button onClick={()=>upperCaseOne(todo.id)}>UpperCase One</button>
                        <button onClick={()=>doneTaskOne(todo.id)}>Done task</button>
                    </li>
                ))}
            </ul>
            <br />
            <button onClick={upperCaseAll}>UpperCase All</button>
            <button onClick={doneTaskAll}>All task done</button>
        </div>
    )
}