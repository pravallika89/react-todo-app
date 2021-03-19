const TodoList=({todos, deleteTodo})=>{
  return(
    <div className="col-6 offset-3 ">
        <ul className="list-group">
          {
            todos.map((todo,index)=>{
              return (
                <li className='list-group-item list-group-item-info ' key={index}
                primary={todo}>{todos[index]} 
                <div>
                  <button className='btn btn-primary '
                    onClick={()=>{
                      deleteTodo(index)
                    }}>delete
                  </button>
                </div>
                </li>
                );
            })
          }
        </ul>
      </div>
  )


}

export default TodoList;