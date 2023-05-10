import React from "react"
import Dolist from "./Dolist"
import Donelist from "./Donelist"
let todoarr=[
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
]
    class Todo extends React.Component{
        constructor(props)
        {
            super(props)
            this.state={todoarr:todoarr}
    
        }
        getDoItem=()=>{
            return this.state.todoarr.filter((todo)=>todo.completed===false)
        }
        getDoneItem=()=>{
            return this.state.todoarr.filter((todo=>todo.completed===true))
        }
        toggletodo=(todoid)=>{
            const temptodo=[...this.state.todoarr]
            const todo=temptodo.find((todo)=>todo.id===todoid)
            todo.completed=!todo.completed;
            this.setState({todos:temptodo})
        }
        deletedtodo=(todoid)=>{
          const temptodo=[...this.state.todoarr]
          const todo=temptodo.find((todo)=>todo.id===todoid)
          todo.deleted=true;
          this.setState({todo:temptodo})
          console.log(temptodo)
        }
        render()
        {
            return(
                <>
                <center><h1>ToDolist</h1></center>
                <div className="row">
                    <div className="col"><Dolist doitem={this.getDoItem()} toggletodo={this.toggletodo} deletedtodo={this.deletedtodo}></Dolist></div>
                    <div className="col"><Donelist doneitem={this.getDoneItem()} toggletodo={this.toggletodo} deletedtodo={this.deletedtodo}></Donelist></div>
                    </div>
                    </>
            )
        }

        }
        export default Todo;
    
