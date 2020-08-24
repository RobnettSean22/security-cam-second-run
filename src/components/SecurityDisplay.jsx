import React, { useState } from "react";
import styled from "styled-components";

const CameraBlocks = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 9px 10px -6px rgba(0, 0, 0, 0.75);
  align-items: center;
  border-radius: 10px;
  overflow-x: hidden;
  overflow-y: auto;
  .pic-capsule {
    width: 100%;
    height: 80%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px 10px 0px 0px;
    }
  }
  .status-n-name {
    width: 100%;
    height: 45%;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 0px 0px 5px 5px;
    background: rgb(228, 222, 222);

    .active {
      width: 90%;
      height: 90%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: flex-start;
      border-left: 3px solid rgb(7, 204, 7);
      border-radius: 4px;

      h3 {
        font-size: 10px;
        margin: 0 0 0 2px;
        opacity: 0.5;
      }
      h1 {
        font-size: 12px;
        margin: 0 0 0 2px;
      }
    }
    .inactive {
      width: 90%;
      height: 90%;
      border-left: 3px solid red;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: flex-start;
      border-radius: 4px;

      h3 {
        margin: 0 0 0 2px;
        font-size: 10px;
        opacity: 0.5;
      }
      h1 {
        margin: 0 0 0 2px;
        font-size: 12px;
      }
    }
  }
`;
function SecurityDisplay({ devices, id }) {
  const getRepContents = devices.name.substring(14);
  const shortName =
    devices.name.length >= 14
      ? devices.name.replace(getRepContents, "...")
      : devices.name;

  return (
    <CameraBlocks key={devices.id}>
      <div className='pic-capsule'>
        <img src={devices.thumbnail} alt='' />
      </div>
      <div className='status-n-name'>
        <div className={devices.active ? "active" : "inactive"}>
          <h3>{devices.active ? "Active" : "Inactive"}</h3>
          <h1>{shortName}</h1>
        </div>
      </div>
    </CameraBlocks>
  );
}

export default SecurityDisplay;
