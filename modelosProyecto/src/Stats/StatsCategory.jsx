import React, { useState, useEffect, useRef } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js/auto";
import data from "./product_totals.json"; // Asegúrate de que la ruta sea correcta
import "./statsCategoryStyle.css";
// Registrar los componentes necesarios en Chart.js
ChartJS.register(Tooltip, Legend, ArcElement);

const PieChart = () => {
  const chartRef = useRef(null);
  // Extraer etiquetas y valores del JSON
  const labels = data.map((item) => item.product_line);
  const values = data.map((item) => item.percentage);

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: values,
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
    <>
      <p className="descriptionCategory">El gráfico de pastel (pie chart) que se presenta a continuación muestra una visualización clara y concisa de las categorías de productos vendidas. Cada sección del gráfico representa una categoría de productos, y el tamaño de cada sección es proporcional a la cantidad total de ventas de esa categoría. Para crear este gráfico, primero se filtraron y contaron las ventas por cada categoría a partir de los datos de ventas generales. Luego, se utilizaron estos datos para configurar el gráfico, asignando colores distintos a cada categoría para facilitar la diferenciación visual. Este tipo de gráfico es ideal para destacar la distribución de las ventas entre diferentes categorías, proporcionando una comprensión rápida y efectiva de las tendencias de ventas y las preferencias de los clientes.</p>
      <div className="statsCategory">
        <h2>Categorias</h2>
        <Pie
          data={chartData}
          ref={chartRef}
          width={"600%"}
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
    </>
  );
};

export default PieChart;
