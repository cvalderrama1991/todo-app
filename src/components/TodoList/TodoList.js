import Todo from "../Todo/Todo"
import { List } from "./TodoList.styled"

const TodoList = ({ todos, handleDelete, handleEdit, handleComplete }) => {
  return (
    <List>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleComplete={handleComplete}
          />
        )
      })}
    </List>
  )
}

export default TodoList
