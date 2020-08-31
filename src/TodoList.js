import React from 'react'
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Todo from "./Todo"


function TodoList({todos,removeTodo,toggleTodo,editTodo}) {
       if(todos.length)
    return (
       <Paper elevation={2}>
         <List>
          {todos.map((todo,i)=>(
              <>
                <ListItem>
                  <ListItemText>
                    <Todo task={todo.task}
                    id={todo.id}
                     key={todo.id} 
                     completed ={todo.completed} 
                    // deleteTodo={deleteTodo} 
                     removeTodo={removeTodo}
                     toggleTodo ={toggleTodo}
                     editTodo={editTodo}
                     />
                  </ListItemText>
                </ListItem>
               {i < todos.length -1 && <Divider />}
            </>
          ))}
         </List>
       </Paper>
    );
    return null;
}

export default TodoList;
