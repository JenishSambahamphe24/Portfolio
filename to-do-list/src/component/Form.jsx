import React from 'react'

export default function Form({todos,settodos,setinputText}) {

    const changeHandler =(e)=>{
      console.log(e.target.value)
      setinputText(e.target.value)
      
    }
    const onSubmitHandler =(e)=>{
        e.preventDefault();
        settodos([...todos,{text:inputText, completed:false, id:Math.random()*100 }])

    }
    return (
        <div>
            <form>
                <input onChange={changeHandler} type="text" className="todo-input" />
                <button onClick={onSubmitHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
}
