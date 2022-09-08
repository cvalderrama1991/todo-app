import {
  Checkbox,
  EditIcon,
  Item,
  RemoveIcon,
  TodoBtn,
  TodoName,
} from "./Todo.styled"

const Todo = ({ todo, handleDelete, handleEdit, handleComplete }) => {
  return (
    <Item>
      <Checkbox
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleComplete(todo.id)}
      />
      <TodoName>{todo.todoName}</TodoName>
      <TodoBtn onClick={() => handleDelete(todo.id)}>
        <RemoveIcon />
      </TodoBtn>
      <TodoBtn onClick={() => handleEdit(todo.id)}>
        <EditIcon />
      </TodoBtn>
    </Item>
  )
}

export default Todo
