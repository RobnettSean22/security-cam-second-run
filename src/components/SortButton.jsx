import React, { useState } from "react";
import sorting from "../assets/Sorting.svg";
import styled from "styled-components";

const Button = styled.div`
  width: 15%;
  height: 90%;
`;

function SortButton({ setByStatus }) {
  const [nav, setNav] = useState(false);

  return (
    <Button onClick={e => setNav(true)}>
      <img src={sorting} alt='' />
      Sort by
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
    </Button>
  );
}

export default SortButton;
