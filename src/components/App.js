import { useState } from "react";

// Initial packing items
const initialItems = [
  { id: 1, description: "Shirt", quantity: 5, packed: false },
  { id: 2, description: "Pants", quantity: 2, packed: true },
];

function Logo() {
  return <h1>My Travel List</h1>;
}

function Form({handleAddItems}) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  // const [items, setItems] = useState([]);   To Check inside Dev tools

  // function handleAddItems(item) {
  //   setItems((prevItems) => [...prevItems, item]);
  // }


  function handleSubmit(e){ //Prevents from reloading the page everytime
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      packed: false
    };
    
    handleAddItems(newItem);
    setDescription("");
    setQuantity(1);
    
  }

  function handleText(e){
    setDescription(e.target.value);
  } 

  function handleDropdown(e){
    setQuantity(Number(e.target.value));
  }

  

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need to pack?</h3>
      <select name="num" id="num" value={quantity} onChange={handleDropdown}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <input type="text" placeholder="item..." value={description} onChange={handleText}/>
      <button disabled={description==="" ? true: false} style={description==="" ? {backgroundColor: "white"}: {}}>ADD</button>
    </form>
  );
}


function Item(props){
  return(
    <div>
      <li className={props.packed ? "packed": ""}>{props.description} ({props.quantity})</li>
    </div>
  )
}


function PackingList({Items}) {
  return (
    <div className="list">
      <ul>
        {Items.map((item) => (
            <Item 
          key={item.id}
          quantity={item.quantity}
          description={item.description} 
          packed={item.packed }
          />
        ))}
      </ul>
    </div>
  );
}

function Stats({ Items }) {
  // Calculate how many items are packed
  const packedAmt = Items.filter(item => item.packed).length;
  const packedPercentage = (packedAmt / Items.length) * 100;

  return (
    <footer className="stats">
      <em>
        You have {Items.length} items in the list. You already packed {packedAmt}  ({packedPercentage.toFixed(2)}%) .
      </em>
    </footer>
  );
}

function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItems(item) {
    setItems((prevItems) => [...prevItems, item]);
  }
  
  return (
    <div className="app">
      <Logo />
      <Form  handleAddItems={handleAddItems}/>
      <PackingList  Items={items} />
      <Stats  Items={items}/>
    </div>
  );
}

export default App;
