import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ItemForm from "../components/ItemForm";
import { getItemById, updateItem } from "../api/itemApi";

export default function EditItemPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await getItemById(id);
        setItem(res.data);
      } catch (error) {
        alert("Failed to load item");
        console.error(error);
      }
    };

    fetchItem();
  }, [id]);

  const handleUpdateItem = async (data) => {
    try {
      await updateItem(id, data);
      alert("Item updated successfully");
      navigate("/");
    } catch (error) {
      alert("Failed to update item");
      console.error(error);
    }
  };

  return (
    <div className="page-container">
      <h2>Edit Item</h2>

      {item ? (
        <ItemForm
          initialData={item}
          onSubmit={handleUpdateItem}
          buttonText="Update Item"
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}