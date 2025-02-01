import { useState, useEffect } from 'react'
import SideBar from "../../components/sideBar";
import SearchField from "../../components/searchField";
import AddItemButton from "../../components/addItemButton";
import HeaderMaterial from "../../components/headerMaterial";
import MaterialList from "../../components/materialList";
import AddMaterialForm from "../../components/addMaterialForm";
import { getMaterials, addNewMaterial } from "../../services/api.js";

import './style.css'

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [addMaterial, setAddMaterial] = useState(false);
  const [materials, setMaterials] = useState([]);

  const loadMaterials = async () => {
      try {
          const data = await getMaterials();
          setMaterials(data);
      } catch (error) {
          setErro(error.message);
      }
  };

  const handleAddMaterial  = async (dados) => {
    await addNewMaterial(dados);
    setMaterials((prevMaterials) => [...prevMaterials, dados]);
    loadMaterials();
  }
  
  useEffect(() => {
    loadMaterials();
  }, []);


  return (
    <>
      <div className="parent-container">
          <div>
              <SideBar />
          </div>
          <div className="dashboard-control">
              <SearchField setSearchTerm={setSearchTerm} />
              <div className="dashboard-content">
                  <h1>Material</h1>
            <AddItemButton item="Material" setAddMaterial={setAddMaterial} addMaterial={addMaterial} />
              </div>
              <div className="dashboard-itemns">
                  <AddMaterialForm addMaterial={addMaterial} setAddMaterial={setAddMaterial} onAdd={handleAddMaterial}/>
                  <HeaderMaterial />
                  <MaterialList searchTerm={searchTerm} materials={materials} loadMaterials={loadMaterials}/>
              </div>
          </div>
      </div>
    </>
  )
}
export default App
