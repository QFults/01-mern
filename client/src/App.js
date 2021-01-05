import { useState } from 'react'
import ItemAPI from './utils/ItemAPI'

const {
  createItem,
  deleteItem  
} = ItemAPI

const App = () => {
  const [itemState, setItemState] = useState({
    item: '',
    items: []
  })

  itemState.handleInputChange = event => {
    setItemState({ ...itemState, [event.target.name]: event.target.value })
  }

  itemState.handleAddItem = event => {
    event.preventDefault()
    let items = JSON.parse(JSON.stringify(itemState.items))
    createItem({
      text: itemState.item,
      isDone: false
    })
      .then(({ data: item }) => {
        items.push(item)
        setItemState({ ...itemState, items, item: '' })
      })
  }

  itemState.handleDeleteItem = item => {
    let items = JSON.parse(JSON.stringify(itemState.items))
    items = items.filter(itm => itm !== item)
    setItemState({ ...itemState, items })
  }
  return (
    <h1>Hello World!</h1>
  )
}

export default App
