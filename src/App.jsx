import React, { useState } from "react";
import Search from "./components/Search";
import SortButton from "./components/SortButton";
import SecurityDisplay from "./components/SecurityDisplay";
import devices from "./data/sample-devices.json";
import status from "./data/sample-status.json";
import styled from "styled-components";
import logo from "./assets/Logo.svg";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  header {
    width: 100%;
    height: 10%;
    background-image: linear-gradient(to right, #a2dda7, #3fcaab);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Info = styled.div`
  width: 60%;
  height: 5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  h3 {
    margin: 0;
  }
  h5 {
    margin: 0;
  }
`;
const SearchContainer = styled.div`
  width: 60%;
  height: 5%;
`;
const Cameras = styled.div`
  width: 60%;
  height: 75%;
  overflow-y: auto;
  align-self: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 25%;
  grid-column-gap: 30px;
  grid-row-gap: 25px;
  justify-content: center;
`;
const StatusView = styled.div`
  width: 60%;
  height: 75%;
  overflow-y: auto;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Active = styled.div`
  width: 100%;
  height: 45%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 29%;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-content: center;
`;
const Inactive = styled.div`
  width: 100%;
  height: 45%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 29%;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-content: center;
`;
function App() {
  const [byStatus, setByStatus] = useState(0);
  const [value, setValue] = useState("");
  let renameProperty = JSON.stringify(status.status).replace(
    /"deviceId":/g,
    '"id":'
  );
  const cameraStatus = JSON.parse(renameProperty);
  const nameOfDevice = devices.devices;
  console.log(cameraStatus);
  console.log(nameOfDevice);
  var mergeData = [
    ...[cameraStatus, nameOfDevice]
      .reduce(
        (m, arr) => (
          arr.forEach(
            obj =>
              (m.has(obj.id) && Object.assign(m.get(obj.id), obj)) ||
              m.set(obj.id, obj)
          ),
          m
        ),
        new Map()
      )
      .values()
  ];

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
        <img src={logo} alt='' style={{ width: "3%", height: "33%" }} />
      </header>
      <Info>
        <h3>Camers</h3> <h5>Total Devices: {mergeData.length}</h5>
      </Info>
      <SearchContainer>
        <Search setValue={setValue} value={value} />
        <SortButton setByStatus={setByStatus} />
      </SearchContainer>
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
          <Inactive>
            {inactiveData.map((devices, id) => (
              <SecurityDisplay key={id} devices={devices} />
            ))}
          </Inactive>
        </StatusView>
      )}
    </Wrapper>
  );
}

export default App;
