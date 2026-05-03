import { useNavigate } from "react-router-dom";
import ItemForm from "../components/ItemForm";
import { createItem } from "../api/itemApi";

export default function AddItemPage() {
  const navigate = useNavigate();

  const handleAddItem = async (data) => {
    try {
      await createItem(data);
      alert("Item added successfully");
      navigate("/");
    } catch (error) {
      alert("Failed to add item");
      console.error(error);
    }
  };

  return (
    <div className="page-container">
      <h2>Add New Item</h2>
      <ItemForm onSubmit={handleAddItem} buttonText="Add Item" />
    </div>
  );
}