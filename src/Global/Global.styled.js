import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
`

export const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: rebeccapurple;
`
export const Main = styled.main`
  width: 100%;
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  place-items: center;
`

export const FormSection = styled.section`
  background-color: white;
  height: 500px;
  width: 359px;
  display: grid;
  grid-gap: 0.5rem;
  align-content: start;
  border-radius: 0.5rem;
  padding: 0.5rem;
  box-shadow: 4px 4px 8px black;
`
