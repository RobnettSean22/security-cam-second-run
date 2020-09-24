import React from "react";
import styled from "styled-components";

const CameraBlocks = styled.div`
  width: 290px;
  height: 217.2px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  box-shadow: 5px 9px 10px -6px rgba(0, 0, 0, 0.75);
  align-items: center;
  border-radius: 10px;
  overflow-x: hidden;
  overflow-y: auto;
`;
const CameraName = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  border-radius: 0px 0px 5px 5px;
  background: #ffffff;

  .active {
    width: 94.7%;
    height: 75%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    border-left: 3px solid rgb(7, 204, 7);
    border-radius: 2px;

    h3 {
      font-family: "Lato", sans-serif;
      font-style: 600;
      font-size: 8px;
      letter-spacing: 1px;
      margin: 0 0 0 -4%;
      opacity: 0.5;
    }
    h1 {
      font-size: 13px;
      font-family: "Lato", sans-serif;
      font-weight: 600;
      color: #2b4039;
      letter-spacing: 1px;
      margin: 1.5% 0 0 3.1%;
    }
  }
  .inactive {
    width: 94.7%;
    height: 75%;
    border-left: 3px solid red;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 2px;

    h3 {
      font-size: 8px;
      font-family: "Lato", sans-serif;
      letter-spacing: 1px;
      font-style: 600;
      opacity: 0.5;
      margin: 0 0 0 -4%;
    }
    h1 {
      font-size: 12px;
      font-family: "Lato", sans-serif;
      font-weight: 600;
      letter-spacing: 1px;
      color: #2b4039;
      margin: 1.5% 0 0 3.1%;
      font-size: 12px;
    }
  }
`;
const ImgContainer = styled.div`
  width: 100%;
  height: 80%;
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px 10px 0px 0px;
  }
`;
function SecurityDisplay({ devices, id }) {
  const getRepContents = devices.name.substring(15);
  const shortName =
    devices.name.length > 15
      ? devices.name.replace(getRepContents, "...")
      : devices.name;

  return (
    <CameraBlocks key={devices.id}>
      <ImgContainer>
        <img src={devices.thumbnail} alt='' />
      </ImgContainer>
      <CameraName className='status-n-name'>
        <div className={devices.active ? "active" : "inactive"}>
          <h3>{devices.active ? "ACTIVE" : "INACTIVE"}</h3>
          <h1>{shortName}</h1>
        </div>
      </CameraName>
    </CameraBlocks>
  );
}

export default SecurityDisplay;
