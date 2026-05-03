import { useEffect, useState } from "react";

export default function ItemForm({ initialData, onSubmit, buttonText }) {
  const [formData, setFormData] = useState({
    itemName: "",
    category: "",
    quantity: "",
    price: "",
    materialType: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        itemName: initialData.itemName || "",
        category: initialData.category || "",
        quantity: initialData.quantity || "",
        price: initialData.price || "",
        materialType: initialData.materialType || "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      itemName: formData.itemName,
      category: formData.category,
      quantity: Number(formData.quantity),
      price: Number(formData.price),
      materialType: formData.materialType,
    });
  };

  return (
    <form className="item-form" onSubmit={handleSubmit}>
      <label>Item Name</label>
      <input
        type="text"
        name="itemName"
        value={formData.itemName}
        onChange={handleChange}
        placeholder="Enter item name"
        required
      />

      <label>Category</label>
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Enter category"
        required
      />

      <label>Quantity</label>
      <input
        type="number"
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
        placeholder="Enter quantity"
        required
      />

      <label>Price</label>
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Enter price"
        required
      />

      <label>Material Type</label>
      <input
        type="text"
        name="materialType"
        value={formData.materialType}
        onChange={handleChange}
        placeholder="Enter material type"
        required
      />

      <button type="submit">{buttonText}</button>
    </form>
  );
}