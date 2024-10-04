import { useOutletContext } from "react-router-dom";

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

// Definimos los tipos para el contexto que recibimos desde Outlet
interface OutletContext {
  items: Item[];
  updateAddedItem: (id: number) => void;
  updateItemQuantity: (id: number, qty: number) => void;
  deleteItem: (id: number) => void;
}

const Canjear = () => {
  const { items, updateAddedItem } = useOutletContext<OutletContext>();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Canjear Items</h1>

      {items.length === 0 ? (
        <p>No hay items disponibles.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col border p-4 rounded-lg shadow-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover mb-4"
              />
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p className="text-gray-900 font-semibold">${item.price}</p>

              <button
                onClick={() => updateAddedItem(item.id)}
                disabled={item.isAdded} // Deshabilitar el botón si el item ya ha sido canjeado
                className={`mt-4 text-white bg-blue-500 px-4 py-2 rounded-lg ${
                  item.isAdded
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                {item.isAdded ? "Canjeado" : "Canjear"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Canjear;
