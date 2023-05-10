import React from "react";
import Dolist1 from "./Dolist1";
import Donelist1 from "./Donelist1";

import { useState } from "react";
function Todo1()
{
  const [Todoarr,setTodoarr]=useState([
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false,
      "deleted": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false,
      "deleted": false
  
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false,
      "deleted": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true,
      "deleted": false
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false,
      "deleted": false
    },
    {
      "userId": 1,
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false,
      "deleted": false
    },
    {
      "userId": 1,
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false,
      "deleted": false
    },
    {
      "userId": 1,
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": true,
      "deleted": false
    },
    {
      "userId": 1,
      "id": 9,
      "title": "molestiae perspiciatis ipsa",
      "completed": false,
      "deleted": false
    },
    {
      "userId": 1,
      "id": 10,
      "title": "illo est ratione doloremque quia maiores aut",
      "completed": true,
      "deleted":false
  
    },

  ])
  const getDoItem=()=>{
     return Todoarr.filter((Todo)=>Todo.completed===false)
  }
  const getDoneItem=()=>{
    return Todoarr.filter((Todo)=>Todo.completed===true)
  }
  const toggleTodo=(Todoid)=>{
    const tempTodo=[Todoarr]
    const Todo=tempTodo.find((Todo)=>Todo1.id===Todoid)
    Todo.completed=!Todo.completed;
    setTodoarr(tempTodo)
  }
  const deletedTodo=(Todoid)=>{
    const tempTodo=[Todoarr]
    const Todo=tempTodo.find((Todo)=>Todo.id===Todoid)
    Todo.deleted=true;
    setTodoarr(tempTodo)
    console.log(tempTodo)
  }
  return(
    <>
    <center><h1>Todo list</h1></center>
    <div className="row">
      <div className="col"><Dolist1 doitem={getDoItem()} toggleTodo={toggleTodo} deletedTodo={deletedTodo}></Dolist1></div>
      <div className="col"><Donelist1 doneitem={getDoneItem()} toggleTodo={toggleTodo} deletedTodo={deletedTodo}></Donelist1></div>
      </div></>
  )

}
export default Todo1

    
