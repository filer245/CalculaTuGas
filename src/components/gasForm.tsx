import { useState } from "react";
import Loader from "./loader";

export default function GasForm() {
  const [distance, setDistance] = useState<number>(0);
  const [consumption, setConsumption] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCalculate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const gasto = ((distance / 100) * consumption * price);
      setResult(Number.isFinite(gasto) ? gasto : null);
    }, 2000);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <Loader />
      </div>
    );
  }

  if (result !== null) {
    return (
      <div className="p-4 flex flex-col border-2 border-gray-300 rounded-lg items-center">
        <p className="text-4xl font-bold text-green-700 mb-4">
          Gasto estimado: {result.toFixed(2)} €
        </p>
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={() => setResult(null)}
        >
          Calcular otro viaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleCalculate} className="p-4 flex flex-col border-2 border-gray-300 rounded-lg">
      <label htmlFor="distance" className="mb-2 font-bold">
        Distancia a recorrer (km):
      </label>
      <input
        type="number"
        id="distance"
        className="border border-gray-300 p-2 mb-4 rounded"
        onChange={e => setDistance(Number(e.target.value))}
        required
      />

      <label htmlFor="consumption" className="mb-2 font-bold">
        Consumo de gasolina (L/100km):
      </label>
      <input
        type="number"
        id="consumption"
        className="border border-gray-300 p-2 mb-4 rounded"
        onChange={e => setConsumption(Number(e.target.value))}
        required
      />

      <label htmlFor="price" className="mb-2 font-bold">
        Precio de la gasolina (€/L):
      </label>
      <input
        type="number"
        step="any"
        id="price"
        className="border border-gray-300 p-2 mb-4 rounded"
        onChange={e => setPrice(Number(e.target.value))}
        required
      />

      <button className="bg-blue-500 text-white p-2 rounded" type="submit">
        Calcular
      </button>
    </form>
  );
}