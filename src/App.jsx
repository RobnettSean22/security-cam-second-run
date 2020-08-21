import React, { useState } from "react";
import Search from "./components/Search";
import SortButton from "./components/SortButton";
import SecurityDisplay from "./components/SecurityDisplay";
import devices from "./data/sample-devices.json";
import status from "./data/sample-status.json";
import "./App.css";

function App() {
  const [byStatus, setByStatus] = useState(1);
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

  const [value, setValue] = useState("");

  const filterData = mergeData
    .sort((a, b) => {
      return a.name.localeCompare(b.name);
    })
    .filter(dVices => {
      return dVices.name.toUpperCase().indexOf(value.toUpperCase()) !== -1;
    });
  const sorted = () => {
    const sort =
      byStatus === 0
        ? filterData
        : filterData.sort((a, b) => b.active - a.active);
    return sort;
  };

  return (
    <div>
      <Search setValue={setValue} value={value} />
      <SortButton filterData={filterData} />
      <div>
        {sorted().map((devices, id) => (
          <SecurityDisplay key={id} devices={devices} />
        ))}
      </div>
    </div>
  );
}

export default App;
