function Todo ({index, item, deleteTodo, changeDone}){
    return(
        <div className="flex">
            <p
              onClick={() => changeDone(index)}
              className={
                item.isDone ? "cursor-pointer line-through" : "cursor-pointer"
              }
            >
              {item.name}
            </p>
            <button
              onClick={() => deleteTodo(index)}
              className="bg-red-500 ml-2"
            >
              ELIMINA
            </button>
          
        </div>
    )
}

export default Todo;