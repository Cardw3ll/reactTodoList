import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPen, faTrash,faCheckSquare
} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import Popup from'reactjs-popup';
import './todolistStyle.css';


import i1 from './star.png'
import i2 from './infinity.png'
import i3 from './check-mark.png'
import i4 from './Sample_User_Icon.png'
import i5 from './task-done-solid.png'
import i6 from "./list.png" 


library.add(faTrash, faPen, faCheckSquare);


const TodoList = () =>{
    const [list,setList] = useState([]);
    const [input,setInput] = useState('');
    const [todoEditing,setTodoEditing]= React.useState(null);
    const [editinText, setEditingText]= React.useState('');
  
    const addTodo =(todo)=>{
      const newTodo = {
        id:Math.random(),
        todo:todo
      }
      console.log(todo)
      //add to do list
      setList([...list, newTodo]);
      //clear input box
      setInput("");
    }
    const deleteTodo=(id)=>{
      const newList = list.filter((todo)=> todo.id !== id);
      setList(newList);
    }

    function WorkDone(id){
        const updateTodos = list.map((todo)=>{
            if(todo.id===id){
                todo.completed = !todo.completed
            }
            return todo;
        });
        setList(updateTodos);
    }
    function editTodo(id){
      
        const updateTodos = list.map((todo)=>{
            if(todo.id===id){
                todo.todo = editinText;
              
            }
           console.log(todo)
            return todo;
        });
        setList(updateTodos);
        setTodoEditing(null);
        

    }
    
return(<div>


  <div  className='split left'>
    <input type="text" placeholder='search' class="search"></input>
    <br></br>
    <br></br>
    <br></br>

  <h4>My Day</h4>
  <h4>  <img src={i1} alt=""/>Important</h4>

<h4><img src={i2} alt="" />All</h4>

 <h4><img src={i3} alt=""/>Completed</h4>

 <h4><img src={i4} alt=""/>Assign to me</h4>

 <h4> <img src={i5} alt=""/>Task</h4>
 <hr></hr>
 <h4>
 <img src="/images/`list.png" alt=""/>Projects
 </h4>
 
  </div>

        <div className='split right'>
        <h1>To do list</h1>
        <br></br>
     
        <div className='Addmy'>
          
          <input type="text" placeholder='Enter task' value={input} onChange={(e) => setInput(e.target.value)}/>
          <button onClick={()=>addTodo(input)} className="butt">Add</button>
  
          </div>
        <ul className='you'>
           {
             list.map((todo)=>(
               <li key={todo.id}>
                <p className='Display'>
                 
  
               {todo.todo}
               {/* <input type="checkbox" className='checkMe'
                onChange={() => WorkDone(todo.id)}
                checked={todo.completed}/> */}
               <Popup trigger={<span className='Ico'><FontAwesomeIcon className='icons' icon="fa-solid fa-pen" onClick={()=> setTodoEditing(todo.id)}/></span>} position = "left center">
               <input type="text" placeholder='Enter edited text' onChange={(e)=>setEditingText(e.target.value)}/>
               <span className='Ico' onClick={()=> editTodo(todo.id)}><FontAwesomeIcon icon="fas fa-check-square" /></span>
               </Popup>
                 <span className='Ico'><FontAwesomeIcon className='icons' icon="trash" onClick={()=> deleteTodo(todo.id)}/></span>
               
                 </p>
               </li>
             ))
           }
       
       
        </ul>
        
        
        </div> 
        </div>

)

}

export default TodoList;