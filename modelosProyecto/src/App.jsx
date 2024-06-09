import SideBar from "./SideBar/SideBar";
import NavBar from "./NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import PieChart from "./Stats/StatsCategory";
import PieChartCity from "./Stats/StatsCity"

function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  // Permite abrir o cerrar la barra de la derecha
  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <NavBar toggleSideBar={toggleSideBar} />
          <div className="container">
            <SideBar
              isSideBarOpen={isSideBarOpen}
              closeForm={null}
              restart={null}
            />
            <div className="app-container">
              <Routes>
                <Route path="/" />
                <Route path="/categoria" element={<PieChart />} />
                <Route path="/ciudades" element={<PieChartCity/>}/>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>

    </>
  );
}

export default App;
