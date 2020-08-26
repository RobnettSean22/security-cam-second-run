import React, { useState } from "react";
import sorting from "../assets/Sorting.svg";
import styled from "styled-components";

const Button = styled.div`
  width: 23%;
  height: 87%;
  margin-right: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 4px;
  img {
    width: 10%;
    height: 53%;
    padding-right: 4%;
  }
  h5 {
    margin: 0;
    align-self: flex-start;
    font-size: 12px;
  }
`;

function SortButton({ setByStatus, byStatus }) {
  const [nav, setNav] = useState(false);

  return (
    <Button onClick={e => setNav(true)}>
      <img src={sorting} alt='' />
      <h5>Sort by : {byStatus === 0 ? "Name" : "Status"}</h5>
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
