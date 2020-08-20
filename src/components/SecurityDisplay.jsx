import React, { useState } from "react";

function SecurityDisplay({ devices, id }) {
  //   const [devicebyName, setdeviceByname] = useState(devices);
  //   console.log(devicebyName);
  //   //   setdeviceByname(
  //   //     devices.sort((a, b) => {
  //   //       const abc = this.state.camID && this.state.camConnect ? -1 : 1;
  //   //       return abc * a.name.localeCompare(b.name);
  //   //     })
  //   //   );

  return <div>{devices.name}</div>;
}

export default SecurityDisplay;
