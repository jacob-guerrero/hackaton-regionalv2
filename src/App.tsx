import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Head/Head";
import useItems from "./hooks/Items";
import { useEffect, useState } from "react";

// Definimos el tipo de un Item (lo mismo que en useItems)
interface Item {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  isAdded: boolean;
  qty: number;
}

function App() {
  const { items, setItems, error, loading } = useItems();
  const [cartItems, setCartItems] = useState<number>(0); // Tipamos cartItems como número

  // Update isAdded state
  const updateAddedItem = (itemId: number) => {
    setItems((prevItems: Item[]) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, isAdded: !item.isAdded, qty: !item.isAdded ? 1 : 0 } // Change isAdded status
          : item
      )
    );
  };

  // Update the item quantity
  const updateItemQuantity = (itemId: number, quantity: number) => {
    setItems((prevItems: Item[]) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, isAdded: quantity > 0, qty: quantity }
          : item
      )
    );
  };

  // Delete the item
  const deleteItem = (itemId: number) => {
    setItems((prevItems: Item[]) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isAdded: !item.isAdded, qty: 0 } : item
      )
    );
  };

  // Calculate and update cart items
  useEffect(() => {
    const count = items.reduce((total, item) => total + item.qty, 0);
    setCartItems(count);
  }, [items]);

  return (
    <>
      <Header />

      <Outlet
        context={{
          items,
          error,
          loading,
          cartItems,
          updateAddedItem,
          updateItemQuantity,
          deleteItem,
        }}
      />
    </>
  );
}

export default App;
