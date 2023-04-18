import React, {useState} from 'react'
import './App.css'
import Form from'./component/Form'
import TodoList from './component/TodoList'

export default function App() {
  const [inputText, setinputText] = useState('')
  const [todos, settodos] = useState([])
  return (
    <div className='header'>
    <header>
      <h1>My Todo List</h1>
    </header>
      <Form todos={todos} inputText={inputText} settodos={settodos} setinputText={setinputText}/>
      <TodoList inputText={inputText}/>
    </div>
  )
}
