import React, { useState } from "react";
import sorting from "../assets/Sorting.svg";
import styled from "styled-components";

const SortContainer = styled.div`
  width: 18%;
  height: 71%;
  margin-right: 2.5%;
`;
const Button = styled.div`
  width: 100%;
  height: 100%;
  margin-right: 2.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
  }
  img {
    width: 10%;
    height: 62%;
    padding-right: 4%;
  }
  h5 {
    margin: 0;
    align-self: flex-start;
    font-size: 10px;
  }
`;
const Navigation = styled.div`
  width: 7.4%;
  height: 6%;
  border-left: 1px solid black;
  border-right: 1px solid black;
  top: 17.3%;
  right: 30%;
  position: absolute;
  display: flex;
  flex-direction: column;
  div {
    width: 100%;
    height: 49%;
    border-bottom: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      cursor: pointer;
    }
    h5 {
      text-align: center;
    }
  }
`;

function SortButton({ setByStatus, byStatus }) {
  const [nav, setNav] = useState(false);

  return (
    <SortContainer>
      <Button onClick={e => setNav(true)}>
        <img src={sorting} alt='' />
        <h5>Sort by : {byStatus === 0 ? "Name" : "Status"}</h5>
      </Button>
      {nav ? (
        <Navigation>
          <div
            onClick={e => {
              setByStatus(0);
              setNav(false);
            }}
          >
            {" "}
            <h5>Name</h5>
          </div>
          <div
            onClick={e => {
              setByStatus(1);
              setNav(false);
            }}
          >
            <h5>Status</h5>
          </div>
        </Navigation>
      ) : null}
    </SortContainer>
  );
}

export default SortButton;
