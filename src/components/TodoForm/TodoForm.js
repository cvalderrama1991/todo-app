import { Button, Form, Input, Label } from "./TodoForm.styled"

const TodoForm = ({ todoInput, setTodoInput, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Label>Enter Todo</Label>
      <Input
        type="text"
        placeholder="Enter Todo"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        required
      />
      <Button disabled={!todoInput}>Add Todo</Button>
    </Form>
  )
}

export default TodoForm
