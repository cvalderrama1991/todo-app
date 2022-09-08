import styled from "styled-components"
import { FaTrash, FaRegEdit } from "react-icons/fa"

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  background-color: rebeccapurple;
  color: white;
  padding: 0.5rem;
  border-radius: 0.25rem;
`
export const Checkbox = styled.input`
  width: 1rem;
  height: 1rem;

  &:checked + p {
    text-decoration: line-through;
    color: grey;
  }
`
export const TodoName = styled.p`
  flex: 1;
`
export const TodoBtn = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1rem;
  display: grid;
  place-items: center;
  cursor: pointer;
  color: inherit;
`
export const EditIcon = styled(FaRegEdit)`
  font-size: inherit;
  color: inherit;
`
export const RemoveIcon = styled(FaTrash)`
  font-size: inherit;
  color: inherit;
`
