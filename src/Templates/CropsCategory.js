import React, { useState } from "react";
import "../Css Files/ComponentCss/CropsCategory.css";
const Crops = [1, 1, 2, 3, 3, 4, 4];

function CropsCategory() {
  const [displayCrops, setDisplayCrops] = useState(Crops);
  const [searchParameter, setSearchParameter] = useState("");

  function filterCrops(e) {
    e.preventDefault();
    setSearchParameter(e.target.value);
    Crops.filter(
      (item) => item?.name.toUpperCase() !== e.target.value.toUpperCase()
    );
  } 
  return (
    <div className="crops-category-container">
      <input
        type="text"
        className="search-filter-input"
        onChange={filterCrops}
        placeholder="Bitki Arayın"
      ></input>
      <div className="crops-container">
        {displayCrops && displayCrops.map((item) => <>Arda</>)}
      </div>
    </div>
  );
}

export default CropsCategory;
