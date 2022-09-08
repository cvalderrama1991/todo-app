import {
  Container,
  FormSection,
  GlobalStyle,
  Main,
} from "./Global/Global.styled"
import TodoHeader from "./components/TodoHeader/TodoHeader"
import TodoForm from "./components/TodoForm/TodoForm"
import TodoList from "./components/TodoList/TodoList"
import { useEffect, useState } from "react"

function App() {
  const [todoInput, setTodoInput] = useState("")
  const [todos, setTodos] = useState([])
  const [editId, setEditId] = useState(null)

  useEffect(() => {
    const JsonTodos = JSON.parse(localStorage.getItem("todos"))
    if (JsonTodos && JsonTodos.length > 0) {
      setTodos(JsonTodos)
    }
  }, [])

  useEffect(() => {
    const JsonTodos = JSON.stringify(todos)
    localStorage.setItem("todos", JsonTodos)
  }, [todos])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (editId) {
      const editTodo = todos.find((todo) => todo.id === editId)
      const updatedTodos = todos.map((todo) =>
        todo.id === editTodo.id
          ? {
              ...todo,
              id: todo.id,
              todoName: todoInput,
              completed: todo.completed,
            }
          : {
              ...todo,
              id: todo.id,
              todoName: todo.todoName,
              completed: todo.completed,
            }
      )
      setTodos(updatedTodos)
      setTodoInput("")
      setEditId(null)
    } else {
      const newTodo = {
        id: new Date().valueOf().toString(),
        todoName: todoInput,
        completed: false,
      }
      setTodos([...todos, newTodo])
      setTodoInput("")
    }
  }

  // Remove Todo
  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }

  // Edit Todo
  const handleEdit = (id) => {
    const editTodo = todos.find((todo) => todo.id === id)
    setTodoInput(editTodo.todoName)
    setEditId(id)
  }
  const handleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      } else {
        return todo
      }
    })
    setTodos(updatedTodos)
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Main>
          <FormSection>
            <TodoHeader />
            <TodoForm
              todoInput={todoInput}
              setTodoInput={setTodoInput}
              handleSubmit={handleSubmit}
            />
            <TodoList
              todos={todos}
              setTodos={setTodos}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleComplete={handleComplete}
            />
          </FormSection>
        </Main>
      </Container>
    </>
  )
}

export default App
