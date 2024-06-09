import React, { useState, useEffect, useRef } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js/auto";
import data from "./city_percentages.json"; // Asegúrate de que la ruta sea correcta
import "./statsCategoryStyle.css";
// Registrar los componentes necesarios en Chart.js
ChartJS.register(Tooltip, Legend, ArcElement);

const PieChartCity = () => {
  const chartRef = useRef(null);
  // Extraer etiquetas y valores del JSON
  const labelsCity1 = data
    .filter((item) => item.city === "Mandalay")
    .map((item) => item.product_line);

  const labelsCity2 = data
    .filter((item) => item.city === "Naypyitaw")
    .map((item) => item.product_line);

  const labelsCity3 = data
    .filter((item) => item.city === "Yangon")
    .map((item) => item.product_line);

  const valuesCity1 = data
    .filter((item) => item.city === "Mandalay")
    .map((item) => item.percentage);

  const valuesCity2 = data
    .filter((item) => item.city === "Naypyitaw")
    .map((item) => item.percentage);

  const valuesCity3 = data
    .filter((item) => item.city === "Yangon")
    .map((item) => item.percentage);

  const chartDataCity1 = {
    labels: labelsCity1,
    datasets: [
      {
        data: valuesCity1,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  const chartDataCity2 = {
    labels: labelsCity2,
    datasets: [
      {
        data: valuesCity2,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  const chartDataCity3 = {
    labels: labelsCity3,
    datasets: [
      {
        data: valuesCity3,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  // Lógica de destrucción del gráfico
  useEffect(() => {
    // Función para destruir el gráfico cuando el componente se desmonte
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="containerStatsCity">
      <h2>Categorias de productos vendidos por ciudad</h2>
      <div className="statsCity">
        <div>
          <h2>Mandalay</h2>
          <Pie
            data={chartDataCity1}
            ref={chartRef}
            width={"400%"}
            options={{
              plugins: {
                legend: {
                  labels: {
                    color: "white", // Cambia el color del texto de la leyenda a blanco
                  },
                },
              },
            }}
          />
        </div>

        <div>
          <h2>Naypyitaw</h2>
          <Pie
            data={chartDataCity2}
            ref={chartRef}
            width={"400%"}
            options={{
              plugins: {
                legend: {
                  labels: {
                    color: "white", // Cambia el color del texto de la leyenda a blanco
                  },
                },
              },
            }}
          />
        </div>

        <div>
          <h2>Yangon</h2>
          <Pie
            data={chartDataCity3}
            ref={chartRef}
            width={"400%"}
            options={{
              plugins: {
                legend: {
                  labels: {
                    color: "white", // Cambia el color del texto de la leyenda a blanco
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PieChartCity;
