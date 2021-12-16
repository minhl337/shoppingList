import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
  padding: 64px;
  border: 1px solid #d0d0d0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  margin: 64px 256px;
  border-radius: 5px;
  font-family: "Nunito", sans-serif;
`

const StyledButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  color: #87898c;
`

const StyledButton = styled.button`
  margin-top: 16px;
  color: white;
  background-color: #1871e8;
  border-radius: 5px;
  border: 0;
  padding: 8px 16px;
`

const EmptyCart = ({ setShowModal }) => {
  return (
    <StyledDiv>
      <StyledButtonDiv>
        Your Shopping list is empty :(
        <br />
        <StyledButton onClick={() => setShowModal(true)}>
          Add your first item
        </StyledButton>
      </StyledButtonDiv>
    </StyledDiv>
  )
}

export default EmptyCart
