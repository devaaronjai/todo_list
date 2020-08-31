import React, { useState,useEffect } from 'react'
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { v1 as uuidv1 } from 'uuid';

function TodoApp() {
     const initialTodos = JSON.parse(window.localStorage.getItem("todos")||"[]")
   // const initialTodos = [
      //  {id:1, task:"clean fish tank", completed:false},
        //{id:2, task:"wash car", completed:true},
       // {id:3, task:"grow beard", completed:false}
        //];
    const [todos,setTodos] = useState(initialTodos);

      useEffect(()=>{
         window.localStorage.setItem("todos" ,JSON.stringify(todos));
         },[todos]);
    const addTodo = newTodoText =>{
        setTodos([...todos,{id:uuidv1() , task:newTodoText,completed:false}])
    }
    const removeTodo = todoId =>{
      const updateTodos = todos.filter(todo=>todo.id !== todoId)
      setTodos(updateTodos);
    }
    const toggleTodo = todoId =>{
      const updateTodos = todos.map(todo=>
       todo.id === todoId ? {...todo,completed:!todo.completed}  : todo
        );
        setTodos(updateTodos);
    }
    const editTodo = (todoId,newTask) =>{
      const updateTodo = todos.map(todo=> 
        todo.id===todoId ? {...todo, task:newTask } :todo
        );
        setTodos(updateTodo);
    }
    return (
     <Paper style={{
         padding:0,
         margin:0,
         height:"100vh",
         backgroundColor: "#fafafa"
     }}
     elevation={0}
     >
     <AppBar color="primary" position="static" style={{height:"64px"}}>
       <Toolbar>
         <Typography color="inherit">Todo App</Typography>
       </Toolbar>
     </AppBar>
     <Grid container justify="center" style ={{marginTop:"1rem"}}>
     <Grid item={11} md={8} lg={4}>
     <TodoForm addTodo={addTodo} />
     <TodoList
      todos = {todos}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo} 
        editTodo={editTodo} 
         />
     </Grid>
     </Grid>
     </Paper>
    )
}

export default TodoApp;
