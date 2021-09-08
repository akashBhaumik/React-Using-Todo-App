import logo from './logo.svg';
import './App.css';
import React , {useState } from 'react';
import Todo from './components/Todo'
import { Button,FormControl,Input,InputLabel } from '@material-ui/core';


function App() {
  const [todos,setTodos] = useState([])
  const [input,setInput] = useState('')

  console.log(input)
  const addTodo = (event) =>{
    event.preventDefault()
    console.log("i am working")
    setTodos([...todos,input])
    console.log(todos)
    setInput('')
  }
  return (
    <div className="App">
      
     <h1>Todo app</h1>
    <form>
       {/* <input value={input} onChange={(event)=>setInput(event.target.value)}/> */}

        <FormControl>
          <InputLabel>Write a TODO</InputLabel>
          <Input value={input} onChange={(event)=>setInput(event.target.value)} /> 
        </FormControl>

       <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
       Add Todo
        </Button>
       {/* <button type="submit" onClick={addTodo}>Add Todo</button> */}
    </form>
     
       
     
     <ul>
       {todos.map(todo =>(
         <Todo text={todo}/>
        //  <li >{todo}</li>
       ))}
       
     </ul>
    </div>
  );
}

export default App;
