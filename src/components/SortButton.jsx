import React, { useState } from "react";
import sorting from "../assets/Sorting.svg";

function SortButton({ setByStatus }) {
  const [nav, setNav] = useState(false);
  return (
    <div>
      <div onClick={e => setNav(true)}>
        <img src={sorting} alt='' />
        Sort by
      </div>
      {nav ? (
        <div style={{ width: "100px", height: "100px" }}>
          <div
            onClick={e => {
              setByStatus(0);
              setNav(false);
            }}
          >
            name
          </div>
          <div
            onClick={e => {
              setByStatus(1);
              setNav(false);
            }}
          >
            status
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default SortButton;
