
export default function PackingList({Items, handleDeleteItem, handleUpdateItem}) {
    return (
      <div className="list">
        <ul>
          {Items.map((item) => (
              <Item 
            key={item.id}
            id={item.id}
            quantity={item.quantity}
            description={item.description} 
            packed={item.packed }
            handleDeleteItem={handleDeleteItem}
            handleUpdateItem={handleUpdateItem}
            />
          ))}
        </ul>
      </div>
    );
  }


  function Item({ description, quantity, packed, id, handleDeleteItem , handleUpdateItem}){
    return(
      <div className="container">
      <input 
          type="checkbox" 
          checked={packed} // Sets the checkbox to reflect the packed status
          onChange={() => handleUpdateItem(id)} // Calls the function with the item's ID
        />
        <li className={packed ? "packed": ""}>
          {description} ({quantity})
        </li>
        <li><button onClick={() => handleDeleteItem(id)}> ❌</button></li>
        
      </div>
    )
  }

  