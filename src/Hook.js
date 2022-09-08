import React, { useState } from "react";
import "./App.css";
import {  Link } from "react-router-dom";

function Hook() {
  // State Hook - `useState`
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  // Helper Functions

  /* Adds a new item to the list array*/
  function addItem() {
    // ! Check for empty item

    const item = {
      id: Math.floor(Math.random() * 10000000),
      value: newItem,
    };

    // Add new item to items array
    setItems((oldList) => [...oldList, item]);

    // Reset newItem back to original state
    setNewItem("");
  }

  /* Deletes an item based on the `item.id` key */
  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  /* Edit an item text after creating it. */

  // Main part of app
  return (
    <div className="app">
      <h1 className="app-title">MY LIST</h1>
      <div className="container">
        <div
          style={{
            padding: 30,
            textAlign: "left",
            maxWidth: 500,
            margin: "auto",
          }}
        >
          Add an item...
          <br />
          {/* 2. Add new item (input) */}
          <input
            type="text"
            placeholder="Type item here..."
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          {/* Add (button) */}
          <button
            className="add-btn btn-floating"
            onClick={() => addItem()}
            disabled={!newItem.length}
          >
            <i class="material-icons"> + </i>
          </button>
          {/* 3. List of todos (unordered list) */}
          <ul>
            {items.map((item) => {
              return (
                <div>
                  <li>
                    {item.value}
                    <button
                      className="btn btn-floating"
                      onClick={() => deleteItem(item.id)}
                    >
                      X
                    </button>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      <Link to="/">
        <button className="class-tohook-page">To Class</button>
      </Link>
    </div>
  );
}

export default Hook;
