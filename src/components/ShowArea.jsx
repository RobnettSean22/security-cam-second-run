import React, { useState } from "react";
import Search from "../components/Search";
import SortButton from "../components/SortButton";
import SecurityDisplay from "../components/SecurityDisplay";
// import devices from "../data/sample-devices.json";
// import status from "../data/sample-status.json";
import styled from "styled-components";
import logo from "../assets/Logo.svg";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  header {
    width: 100%;
    height: 7%;
    background-image: linear-gradient(to right, #a2dda7, #3fcaab);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Info = styled.div`
  width: 40.5%;
  height: 5%;
  display: flex;
  margin-top: 1%;

  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  h1 {
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    font-size: 15px;
    margin: 0;
  }
  h5 {
    font-family: "Open Sans", sans-serif;
    font-style: italic;
    opacity: 0.5;
    padding-top: 1%;
    font-size: 8px;
    margin: 0;
  }
`;
const SearchContainer = styled.div`
  width: 41%;
  height: 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  margin-top: 0.5%;
`;
const Title = styled.div`
  width: 40%;
  height: 5%;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  h3 {
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    color: #181616;
    opacity: 0.5;
    margin: 0;
    font-size: 9px;
  }
  h5 {
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    color: #181616;
    margin: 0;
    padding-left: 1%;
    margin-bottom: 0.2%;
    font-size: 9px;
    opacity: 0.5;
  }
  hr {
    width: 78%;
    margin-left: 4%;
    margin-bottom: 0.5%;
    opacity: 0.5;
  }
`;

const InactiveTitle = styled.div`
  width: 97%;
  height: 6%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 27px 0px 21px 14px;
  h3 {
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    color: #181616;
    margin: 0;
    font-size: 9px;
    opacity: 0.5;
  }
  h5 {
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    color: #181616;
    margin: 0;
    padding-left: 1%;
    margin-bottom: 0.2%;
    font-size: 9px;
    opacity: 0.5;
  }
  hr {
    width: 79%;
    margin-bottom: 0.5%;
    opacity: 0.5;
  }
`;
const Cameras = styled.div`
  width: 42%;
  height: 76%;
  padding-top: 1.2%;
  overflow-y: auto;
  align-self: center;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-auto-rows: 25%;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-content: center;
`;
const StatusView = styled.div`
  width: 42%;
  height: 75%;
  padding-top: 1.2%;
  overflow-y: auto;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Active = styled.div`
  width: 100%;
  height: 48%;
  display: grid;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-auto-rows: 48%;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-content: center;
  overflow: none;
`;
const Inactive = styled.div`
  width: 100%;
  height: 48%;
  display: grid;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-auto-rows: 48%;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-content: center;
  overflow: none;
  h3 {
    margin: 0;
  }
`;
const ShowArea = () => {
  const [byStatus, setByStatus] = useState(0);
  const [value, setValue] = useState("");
  const [mergeData, setMergeData] = useState();

  let sortData = () => {
    mergeData.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    const sort =
      byStatus === 0
        ? mergeData
        : mergeData.sort((a, b) => b.active - a.active);
    return sort.filter(dVices => {
      return (
        dVices.name.toUpperCase().indexOf(value.toUpperCase()) !== -1 ||
        dVices.id.toString().indexOf(value) !== -1
      );
    });
  };
  const activeData = sortData().filter(online => {
    return online.active === true;
  });
  const inactiveData = sortData().filter(online => {
    return online.active === false;
  });
  console.log(1111, activeData);
  console.log(2222, inactiveData);
  return (
    <Wrapper>
      <header>
        <img
          placeholder='Search by Name or I...'
          src={logo}
          alt=''
          style={{ width: "20%", height: "35%" }}
        />
      </header>
      <Info>
        <h1>Your Cameras</h1> <h5>Total Devices: {mergeData.length}</h5>
      </Info>
      <SearchContainer>
        <Search setValue={setValue} value={value} />
        <SortButton setByStatus={setByStatus} byStatus={byStatus} />
      </SearchContainer>

      {byStatus === 0 ? (
        <Title>
          <h3>All Devices</h3>
          <h5>({sortData().length})</h5> <hr></hr>
        </Title>
      ) : (
        <Title>
          <h3>Active Cameras</h3>
          <h5>({activeData.length})</h5>
          <hr></hr>
        </Title>
      )}

      {byStatus === 0 ? (
        <Cameras>
          {sortData().map((devices, id) => (
            <SecurityDisplay key={id} devices={devices} />
          ))}
        </Cameras>
      ) : (
        <StatusView>
          <Active>
            {activeData.map((devices, id) => (
              <SecurityDisplay key={id} devices={devices} />
            ))}
          </Active>
          <InactiveTitle>
            <h3>Inactive Cameras</h3>
            <h5>({inactiveData.length})</h5>
            <hr></hr>
          </InactiveTitle>
          <Inactive>
            {inactiveData.map((devices, id) => (
              <SecurityDisplay key={id} devices={devices} />
            ))}
          </Inactive>
        </StatusView>
      )}
    </Wrapper>
  );
};

export default ShowArea;
