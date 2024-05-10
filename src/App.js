import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItems from "./AddItems";
import { useState } from 'react'
import SearchItems from "./SearchItems";


function App() {
  const [items,setItems]=useState(JSON.parse(localStorage.getItem("to-do"))||[]);
  //add
  const [newItem,setNewItem]=useState("");

  const addItem=(item)=>{
    const id=items.length?items[items.length -1].id +1 :1;
    const addNewItem={id,checked:false,item}
    const listItems=[...items,addNewItem]
    setItems(listItems)
    localStorage.setItem("to-do",JSON.stringify(listItems))
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    //console.log(newItem)
    addItem(newItem)
    setNewItem("")
  }
  //search
  const [search,setSearch]=useState('')

  const handleCheck=(id) => {
    const listItems=items.map((item)=>
      item.id===id ? {...item,checked:!item.checked}:item)
    setItems(listItems)
    localStorage.setItem("to-do",JSON.stringify(listItems)) 
    }

const handleDelete=(id)=>{
  //console.log(id)
  const listItems=items.filter((item)=>
  item.id!==id)
  setItems(listItems)
  localStorage.setItem("to-do",JSON.stringify(listItems))
}

 
  return (
    <div className="App">
      <Header title="To Do List"/>
      <AddItems 
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}/>
      <SearchItems
      search={search}
      setSearch={setSearch}/>
      <Content
      items={items.filter(item=>
        (item.item).toLowerCase().includes(search.toLowerCase())
      )} 
      handleCheck={handleCheck}
      handleDelete={handleDelete}/>
      <Footer 
      length={items.length}/>

    </div>
  
  );
}

export default App;
