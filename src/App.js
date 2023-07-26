import { useState } from "react";
import Logo from "./Components/Logo";
import Form from "./Components/Form";
import PackingList from "./Components/PackingList";
import Stats from "./Components/Stats";

export default function App() {
  // lifting-up-state from packing list
  const [items, setItems] = useState([]);

  function handleItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleUpdatePacked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function onDeleteAllItem() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      {/* pass funtion to form via props */}
      <Form onAddItem={handleItems} />
      {/* pass item to children component via props */}
      <PackingList
        items={items}
        handleUpdatePacked={handleUpdatePacked}
        onDeleteItem={handleDeleteItems}
        onDeleteAllItem={onDeleteAllItem}
      />
      <Stats items={items} />
    </div>
  );
}
