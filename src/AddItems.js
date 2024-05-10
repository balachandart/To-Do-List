import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItems = ({handleSubmit,newItem,setNewItem}) => {
  return (
    <form className='addForm' onSubmit={(e)=>handleSubmit(e)}>
      <label htmlFor="addItem">Add Item</label>
      <input type="text"
      autoFocus
      id='addItem'
      required
      placeholder='Add Item'
      value={newItem}
      onChange={(e)=>{setNewItem(e.target.value)}}
      />
      <button type="submit" >
        <FaPlus />
      </button>

    </form>
  )
}

export default AddItems