import { useState } from "react";
import "./App.css";
import { Card } from "./components/card/card.tsx";
import React from "react";
import { useFoodData } from "./hooks/useFoodData.ts";

function App() {
  const { data, isLoading, error } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data && Array.isArray(data) && data.map(foodData => (
          <Card
            price={foodData.price}
            title={foodData.title}
            image={foodData.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;