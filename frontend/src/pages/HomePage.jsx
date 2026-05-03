import { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import { deleteItem, getItems } from "../api/itemApi";

export default function HomePage() {
  const [items, setItems] = useState([]);

  const loadItems = async () => {
    try {
      const res = await getItems();
      setItems(res.data);
    } catch (error) {
      alert("Failed to load items");
      console.error(error);
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");

    if (!confirmDelete) return;

    try {
      await deleteItem(id);
      alert("Item deleted successfully");
      loadItems();
    } catch (error) {
      alert("Failed to delete item");
      console.error(error);
    }
  };

  return (
    <div className="page-container">
      <h2>Item List</h2>

      <div className="item-grid">
        {items.length > 0 ? (
          items.map((item) => (
            <ItemCard key={item._id} item={item} onDelete={handleDelete} />
          ))
        ) : (
          <p>No items found</p>
        )}
      </div>
    </div>
  );
}