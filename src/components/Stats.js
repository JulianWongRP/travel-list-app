export default function Stats({ Items , handleClearAll}) {
    // Calculate how many items are packed
    const length = Items.length
    const packed = Items.filter(item => item.packed).length;
  
    const percentage = (packed / length) * 100;
  
  
    return (
      <footer className="stats">
        <em>
          {length === packed ? `You got everything!` : `You have ${length} items in the list. You already packed ${packed}(${percentage.toFixed(2)}%)`}
        </em>
        <button onClick={() => handleClearAll()}>Clear All</button>
      </footer>
    );
  }