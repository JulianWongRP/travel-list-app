import { useState } from "react";


export default function Form({handleAddItems}) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
    // const [items, setItems] = useState([]);   To Check inside Dev tools
  
    // function handleAddItems(item) {
    //   setItems((prevItems) => [...prevItems, item]);
    // }
  
  
    function handleSubmit(e){
      e.preventDefault(); //Prevents from reloading the page everytime
  
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
      <div>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need to pack? 💼</h3>
        <select name="num" id="num" value={quantity} onChange={handleDropdown}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <input type="text" placeholder="item..." value={description} onChange={handleText}/>
        <button disabled={description==="" ? true: false} style={description==="" ? {backgroundColor: "white"}: {}}>ADD</button>
      </form>
      </div>
    );
  }