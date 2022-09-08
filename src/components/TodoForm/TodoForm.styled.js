import styled from "styled-components"

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  grid-gap: 0.25rem;
  position: relative;
`
export const Label = styled.label`
  color: rebeccapurple;
  font-weight: bold;
`
export const Input = styled.input`
  display: block;
  border: 2px solid grey;
  color: rebeccapurple;
  font-size: 1rem;
  border-radius: 0.25rem;
  height: 2rem;
  padding: 4px;

  &:focus {
    outline: none;
    border-color: rebeccapurple;
  }
`

export const Button = styled.button`
  border: none;
  background-color: rebeccapurple;
  height: 2rem;
  border-radius: 0.25rem;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
`
