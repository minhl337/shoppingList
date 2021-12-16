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
const StyledHeader = styled.div`
  display: flex;
  padding: 24px;
  font-size: 24px;
  justify-content: space-between;
  background-color: #fafafa;
`
const StyledDiv = styled.div`
  width: 60%;
  margin: auto;
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
const StyledInput = styled.input`
  width: 100%;
  height: 36px;
  border: 1px solid #d0d0d0;
  margin: 12px;
  margin-bottom: 0;
  margin-left: 0;
  border-radius: 5px;
  padding-left: 12px;
  color: #87898c;
  font-family: "Nunito", sans-serif;
`
const StyledHeaderText = styled.div`
  font-size: 20px;
`
const StyledHeaderText2 = styled.div`
  font-size: 16px;
  color: #87898c;
  margin-top: 6px;
`

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 128px;
  border: 1px solid #d0d0d0 !important;
  margin: 12px;
  margin-bottom: 0;
  margin-left: 0;
  border-radius: 5px;
  padding-left: 12px;
  padding-top: 12px;
  color: #87898c;
  font-family: "Nunito", sans-serif;
  resize: none;
`

const StyledSelect = styled.select`
  width: 100%;
  height: 36px;
  border: 1px solid #d0d0d0;

  border-radius: 5px;
  padding-left: 12px;
  color: #87898c;
  font-family: "Nunito", sans-serif;
`
const StyledTextAreaCounter = styled.div`
  text-align: end;
  position: relative;
  font-size: 12px;
  bottom: 32px;
  color: #87898c;
`

const StyledSelectAreaCounter = styled.div`
  margin-top: -12px;
  width: 102%;
`

const StyledFooter = styled.div`
  height: 6px;
  background: #4d81b7;
`

const ItemModal = ({
  handleSubmit,
  setShowModal,
  item,
  setActiveItem,
  handleEdit,
}) => {
  const [textAreaCount, setTextAreaCount] = React.useState(0)
  const [itemName, setItemName] = React.useState("")
  const [itemDescription, setItemDescription] = React.useState("")
  const [itemCount, setItemCount] = React.useState("")

  React.useEffect(() => {
    if (item) {
      setItemName(item.name)
      setItemDescription(item.description)
      setItemCount(item.count)
    }
  }, [])

  const handleDescriptionChange = (e) => {
    setTextAreaCount(e.target.value.length)
    setItemDescription(e.target.value)
  }

  const handleSave = () => {
    if (item) {
      const updatedItem = {
        id: item.id,
        name: itemName,
        description: itemDescription,
        count: itemCount,
        checked: item.checked,
      }
      handleEdit(updatedItem)
    } else {
      handleSubmit(itemName, itemDescription, itemCount)
    }
    setShowModal(false)
    setActiveItem(null)
  }

  const handleCancel = () => {
    setShowModal(false)
    setActiveItem(null)
  }

  return (
    <StyledModal>
      <StyledDiv>
        <StyledHeader>
          <div>SHOPPING LIST</div>
          <div onClick={handleCancel}>>|</div>
        </StyledHeader>
        <div>
          <StyledInputContainer>
            <StyledHeaderText>{item ? "Edit" : "Add"} an Item</StyledHeaderText>
            <StyledHeaderText2>
              {item ? "Edit" : "Add"} your new item below
            </StyledHeaderText2>
            <div>
              <StyledInput
                type="text"
                placeholder="Item Name"
                onChange={(e) => setItemName(e.target.value)}
                value={itemName}
              />
            </div>
            <div>
              <StyledTextArea
                placeholder="Description"
                maxLength={100}
                onChange={handleDescriptionChange}
                value={itemDescription}
              />
              <StyledTextAreaCounter>{textAreaCount}/100</StyledTextAreaCounter>
            </div>
            <StyledSelectAreaCounter>
              <StyledSelect
                name="selectList"
                id="selectList"
                onChange={(e) => setItemCount(e.target.value)}
                value={itemCount}
              >
                <option value="" disabled defaultValue>
                  How many?
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </StyledSelect>
            </StyledSelectAreaCounter>
          </StyledInputContainer>
          <StyledButtonsContainer>
            <StyledButton2 onClick={handleCancel}>Cancel</StyledButton2>
            <StyledButton onClick={handleSave}>
              {item ? "Save Item" : "Add Task"}
            </StyledButton>
          </StyledButtonsContainer>
        </div>
        <StyledFooter></StyledFooter>
      </StyledDiv>
    </StyledModal>
  )
}

export default ItemModal
