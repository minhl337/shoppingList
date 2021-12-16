import React from "react"

import "./App.css"

import EmptyCart from "./components/EmptyCart"
import ItemModal from "./components/ItemModal"
import ItemList from "./components/Itemlist"
import DeleteModal from "./components/DeletModal"

const App = () => {
  const [shoppingList, setShoppingList] = React.useState([])
  const [showModal, setShowModal] = React.useState(false)
  const [showDeleteModal, setShowDeleteModal] = React.useState(false)
  const [activeItem, setActiveItem] = React.useState()

  const handleSubmit = (itemName, itemDescription, itemCount) => {
    const newItem = {
      id: shoppingList.length + 1,
      name: itemName,
      description: itemDescription,
      count: itemCount,
      checked: false,
    }

    setShoppingList([...shoppingList, newItem])
  }

  const handleEdit = (item, deleteItem = false) => {
    const indexOfItem = shoppingList.findIndex((thing) => thing.id === item.id)
    const updatedList = [...shoppingList]
    if (deleteItem) {
      updatedList.splice(indexOfItem, 1)
      setShowDeleteModal(false)
    } else {
      updatedList[indexOfItem] = item
    }
    setActiveItem(null)
    setShoppingList(updatedList)
  }

  const handleCheck = (item) => {
    const indexOfItem = shoppingList.findIndex((thing) => thing.id === item.id)
    const updatedList = [...shoppingList]
    updatedList[indexOfItem] = { ...item, checked: !item.checked }
    setShoppingList(updatedList)
  }

  return (
    <>
      {showDeleteModal && (
        <DeleteModal
          setShowModal={setShowDeleteModal}
          setActiveItem={setActiveItem}
          item={activeItem}
          handleEdit={handleEdit}
        />
      )}
      <div className="header">SHOPPING LIST</div>
      {shoppingList.length ? (
        <ItemList
          list={shoppingList}
          setShowModal={setShowModal}
          setShoppingList={setShoppingList}
          setActiveItem={setActiveItem}
          setShowDeleteModal={setShowDeleteModal}
          handleCheck={handleCheck}
        />
      ) : (
        <EmptyCart setShowModal={setShowModal} />
      )}

      {showModal && (
        <ItemModal
          setShowModal={setShowModal}
          handleSubmit={handleSubmit}
          item={activeItem}
          setActiveItem={setActiveItem}
          handleEdit={handleEdit}
        />
      )}
    </>
  )
}

export default App
