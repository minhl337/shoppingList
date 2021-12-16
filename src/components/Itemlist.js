import React from "react"
import styled from "styled-components"

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined"
import EditOutlinedIcon from "@mui/icons-material/EditOutlined"

// 1
const StyledDiv = styled.div`
  border: 1px solid #d0d0d0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  margin: 12px 256px;
  border-radius: 5px;
  font-family: "Nunito", sans-serif;
`
const StyledHeader = styled.div`
  border: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  margin: 0 256px;
  font-family: "Nunito", sans-serif;
  justify-content: space-between;
  margin-top: 64px;
`

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-content: center;
`
const StyledLeftSide = styled.div`
  display: flex;
`
const StyledRightSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  color: #87898c;
`

const StyledCheckBox = styled.input`
  width: 16px;
  height: 16px;
  margin: 24px;
`

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
`

const StyledDecription = styled.div`
  color: #87898c;
`
const StyledDeleteButton = styled(DeleteOutlineOutlinedIcon)`
  margin-left: 12px;
`
// 2
const StyledButton = styled.button`
  color: white;
  background-color: #1871e8;
  border-radius: 5px;
  border: 0;
  padding: 8px 16px;
`

const CreateCard = (item, handelEdit, handleCheckBox) => {
  return (
    <StyledDiv key={item.id + item.name}>
      <StyledContainer>
        <StyledLeftSide>
          <div>
            <StyledCheckBox
              type="checkbox"
              onChange={() => handleCheckBox(item)}
              checked={item.checked}
            />
          </div>
          <StyledTextContainer
            className="item-container"
            checked={item.checked}
          >
            <div>{item.name}</div>
            <StyledDecription>{item.description}</StyledDecription>
          </StyledTextContainer>
        </StyledLeftSide>
        <StyledRightSide>
          <EditOutlinedIcon onClick={() => handelEdit(item)} />
          <StyledDeleteButton onClick={() => handelEdit(item, true)} />
        </StyledRightSide>
      </StyledContainer>
    </StyledDiv>
  )
}

const ItemList = ({
  list,
  setShowModal,
  setActiveItem,
  setShowDeleteModal,
  handleCheck,
}) => {
  const handelEdit = (item, deleteItem = false) => {
    setActiveItem(item)
    if (deleteItem) {
      setShowDeleteModal(true)
    } else {
      setShowModal(true)
    }
  }

  const handleCheckBox = (item) => {
    handleCheck(item)
  }

  return (
    <>
      <StyledHeader>
        <div>Your Items</div>
        <div>
          <StyledButton onClick={() => setShowModal(true)}>
            Add Item
          </StyledButton>
        </div>
      </StyledHeader>
      {list.map((item) => CreateCard(item, handelEdit, handleCheckBox))}
    </>
  )
}

export default ItemList
