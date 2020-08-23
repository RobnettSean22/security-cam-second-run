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
    height: 15%;
    background: blue;
  }

  .search-container {
    width: 100%;
    height: 5%;
  }
`;
const Cameras = styled.div`
  width: 80%;
  height: 75%;
  align-self: center;
  display: grid;
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

  const sortData = () => {
    mergeData.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    const sort =
      byStatus === 0
        ? mergeData
        : mergeData.sort((a, b) => b.active - a.active);
    return sort.filter(dVices => {
      return dVices.name.toUpperCase().indexOf(value.toUpperCase()) !== -1;
    });
  };

  return (
    <Wrapper>
      <header>
        <img src={logo} alt='' style={{ width: "100px", height: "100px" }} />
      </header>
      <div className='search-container'>
        <Search setValue={setValue} value={value} />
        <SortButton setByStatus={setByStatus} />
      </div>
      <Cameras>
        {sortData().map((devices, id) => (
          <SecurityDisplay key={id} devices={devices} />
        ))}
      </Cameras>
    </Wrapper>
  );
}

export default App;
