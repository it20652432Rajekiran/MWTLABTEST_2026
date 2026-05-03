import { Link } from "react-router-dom";

export default function ItemCard({ item, onDelete }) {
  return (
    <div className="item-card">
      <h3>{item.itemName}</h3>

      <p>
        <strong>Category:</strong> {item.category}
      </p>

      <p>
        <strong>Quantity:</strong> {item.quantity}
      </p>

      <p>
        <strong>Price:</strong> Rs. {item.price}
      </p>

      <p>
        <strong>Material Type:</strong> {item.materialType}
      </p>

      <div className="card-actions">
        <Link to={`/edit/${item._id}`} className="edit-btn">
          Edit
        </Link>

        <button className="delete-btn" onClick={() => onDelete(item._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}