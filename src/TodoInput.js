import {useState} from 'react';


const TodoInputComponent=({saveTodo })=>{
  
  const [value,setValue]=useState('');
  // console.log(value);
  
return(
  
    <div className='row mb-5'>
      <div className='col-6 offset-3'>
      <form 
        onSubmit={(event) => {
        event.preventDefault();
        saveTodo(value);
        setValue('');
        }}>
        <div className='form-group'>
          <input  
          placeholder='Add tasks'
          className='form-group'
          onChange={(event)=>{
            setValue(event.target.value);
          }}
          value={value} 
          />
          <button className='btn btn-primary'type='submit'>Add</button>
        </div>
      
      
     
    </form>
      </div>
    </div>
  
   

)

};

export default TodoInputComponent;