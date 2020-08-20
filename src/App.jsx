import React from "react";
import Search from "./components/Search";
import SortButton from "./components/SortButton";
import SecurityDisplay from "./components/SecurityDisplay";
import devices from "./data/sample-devices.json";
import status from "./data/sample-status.json";
import "./App.css";

function App() {
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
            o =>
              (m.has(o.id) && Object.assign(m.get(o.id), o)) || m.set(o.id, o)
          ),
          m
        ),
        new Map()
      )
      .values()
  ];

  console.log(mergeData);

  return (
    <div>
      <Search />
      <SortButton />
      <SecurityDisplay />
    </div>
  );
}

export default App;
