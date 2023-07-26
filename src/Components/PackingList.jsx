import { useState } from "react";
import Item from "./Item";
// received data form parent
export default function PackingList({
  items,
  onDeleteItem,
  handleUpdatePacked,
  onDeleteAllItem
}) {
  const [sortBy, setSortBy] = useState("input");

  let orderBy = "";

  if (sortBy === "input") orderBy = items;
  if (sortBy === "description") {
    orderBy = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    orderBy = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul style={{ overflow: "hidden" }}>
        {/* render items */}
        {orderBy.map((item) => (
          <Item
            key={item.id}
            handleUpdatePacked={handleUpdatePacked}
            item={item}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onDeleteAllItem}>Clear</button>
      </div>
    </div>
  );
}
