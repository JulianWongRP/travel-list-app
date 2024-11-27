import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from './Stats'

// Initial packing items
const initialItems = [
  { id: 1, description: "Shirt", quantity: 5, packed: false },
  { id: 2, description: "Pants", quantity: 2, packed: true },
];




function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItems(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  //Handling of Deleting Items//
  function handleDeleteItem(targetId) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== targetId));
  }

  function handleUpdateItem(targetId){
    setItems((prevItems) => 
      prevItems.map((item) =>
        item.id === targetId ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearAll(){
    setItems([])
  }
  
  
  return (
    <div className="app">
      <Logo />
      <Form  handleAddItems={handleAddItems}/>
      <PackingList  Items={items} handleDeleteItem={handleDeleteItem} handleUpdateItem={handleUpdateItem}/>
      <button onClick={handleSortName}>Sort by Name</button>
      <Stats  Items={items} handleClearAll={handleClearAll}/>
    </div>
  );
}

export default App;
