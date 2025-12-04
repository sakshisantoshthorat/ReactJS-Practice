import React, { useState } from 'react'; // <-- add useState

function CRUDApp() {
    const [items, setItems] = useState([]);
    const [currentItem, setCurrentItem] = useState({ name: "", id: null });
    const [isEditing, setIsEditing] = useState(false);

    // Handle input change
    const handleChange = (e) => {
        setCurrentItem({ ...currentItem, name: e.target.value });
    };

    // Add new item
    const addItem = () => {
        if (currentItem.name.trim() !== "") {
            setItems([...items, { ...currentItem, id: Date.now() }]);
            setCurrentItem({ name: "", id: null });
        }
    };

    // Edit item
    const editItem = (item) => {
        setCurrentItem(item);
        setIsEditing(true);
    };

    // Update item
    const updateItem = () => {
        setItems(
            items.map((item) =>
                item.id === currentItem.id ? { ...item, name: currentItem.name } : item
            )
        );
        setCurrentItem({ name: "", id: null });
        setIsEditing(false);
    };

    // Delete item
    const deleteItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    return (
        <div>
            <h1>CRUD App</h1>

            <div>
                <input
                    type="text"
                    value={currentItem.name}
                    onChange={handleChange}
                    placeholder="Enter item"
                />
                {isEditing ? (
                    <button onClick={updateItem}>Update Item</button>
                ) : (
                    <button onClick={addItem}>Add Item</button>
                )}
            </div>

            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name}{" "}
                        <button onClick={() => editItem(item)}>Edit</button>{" "}
                        <button onClick={() => deleteItem(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CRUDApp;
