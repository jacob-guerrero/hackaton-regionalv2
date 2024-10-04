import { useState, useEffect } from "react";

// Definimos una interfaz para los items que recibimos
interface Item {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  isAdded: boolean; // Campo adicional para seguimiento
  qty: number;      // Campo adicional para la cantidad
}

// Definimos la estructura del hook que vamos a retornar
interface UseItemsHook {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
  error: Error | null;
  loading: boolean;
}

const useItems = (): UseItemsHook => {
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=11", { mode: "cors" })
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("server error");
        }
        return res.json();
      })
      .then((json: Item[]) => {
        // Agregamos la clave isAdded a cada item
        const updatedItems = json.map((item) => ({
          ...item,
          isAdded: false, // Valor inicial
          qty: 0,         // Cantidad inicial
        }));

        setItems(updatedItems);
      })
      .catch((error: Error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { items, setItems, error, loading };
};

export default useItems;
