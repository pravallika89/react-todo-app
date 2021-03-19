import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import {useState} from 'react';
import TodoInputComponent from './TodoInput.js';
import TodoList from './TodoList.js';
import AlertComponent from './Alert';
// import TodoInputComponent from './TodoInput.js'

function App() {
  const [alert, setAlert] = useState(false);
  const [todos,setTodos]=useState([]);
 
  console.log(todos);
//Saving Todos
  const saveTodo=(todoText)=>{
  const trimmedText = todoText.trim();
    if (trimmedText.length > 0) {
    setTodos([...todos, trimmedText]);
    }
    showAlert();
    }

 //Deleting Todos

  const deleteTodo=(i)=> {
  // debugger;
  // console.log(i);
  const newTodos = todos.filter(([], index) => index !== i);
  setTodos(newTodos);
  }

  // Alert when todo added Succesfully
  const showAlert = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };
 
  return (
    <div className=" container text-center">
      <AlertComponent alert={alert}/>
      {/* {alert ? (
        <div className='row'>
        <div className='col'>
          <div class='alert alert-success' role='alert'>
            Successfully saved Task!
          </div>
        </div>
      </div>
      ):(
        <div></div>
      )} */}
      <div className='row text-center'>
        <div className='col'>
          <h2>My ToDo List!</h2>
        </div>
      </div>
      
        <TodoInputComponent   saveTodo={saveTodo}  />
        <TodoList 
          todos={todos} 
          setTodos={setTodos}
          deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
