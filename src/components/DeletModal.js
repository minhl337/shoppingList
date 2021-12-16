import React from "react"
import styled from "styled-components"

const StyledModal = styled.div`
  position: fixed;
  padding-top: 50px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  font-family: "Nunito", sans-serif !important;
`

const StyledDiv = styled.div`
  width: 40%;
  margin: 15% auto;
  background: white;
`

const StyledButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 24px;
  margin-top: -36px;
`
const StyledButton = styled.button`
  margin-top: 16px;
  color: white;
  background-color: #1871e8;
  border-radius: 5px;
  border: 0;
  padding: 8px 16px;
`
const StyledButton2 = styled.button`
  margin-top: 16px;
  color: black;
  background: unset;
  border-radius: 5px;
  border: 0;
  padding: 8px 16px;
`
const StyledInputContainer = styled.div`
  display: flex;
  padding: 24px;
  padding-right: 36px !important;
  font-size: 24px;
  flex-direction: column;
`

const StyledHeaderText = styled.div`
  font-size: 20px;
`
const StyledHeaderText2 = styled.div`
  font-size: 16px;
  color: #87898c;
  margin-top: 6px;
`

const DeleteModal = ({ handleEdit, setShowModal, item, setActiveItem }) => {
  const handleCancel = () => {
    setShowModal(false)
    setActiveItem(null)
  }

  return (
    <StyledModal>
      <StyledDiv>
        <div>
          <StyledInputContainer>
            <StyledHeaderText>Delete Item?</StyledHeaderText>
            <StyledHeaderText2>
              Are you sure you want to delete this item? This can not be undone.
            </StyledHeaderText2>
          </StyledInputContainer>
          <StyledButtonsContainer>
            <StyledButton2 onClick={handleCancel}>Cancel</StyledButton2>
            <StyledButton onClick={() => handleEdit(item, true)}>
              Delete
            </StyledButton>
          </StyledButtonsContainer>
        </div>
      </StyledDiv>
    </StyledModal>
  )
}

export default DeleteModal
