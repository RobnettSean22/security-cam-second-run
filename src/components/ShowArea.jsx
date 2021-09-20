import React, { useState, useEffect } from "react";
import Header from "./Header";
import Search from "../components/Search";
import SortButton from "../components/SortButton";
import SecurityDisplay from "../components/SecurityDisplay";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  background: #f5f6f8;
`;
const Grouped = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`;
const Info = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  margin-top: 1%;

  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  h1 {
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    font-size: 25px;
    margin: 0;
    margin-left: 17.4%;
  }
  h5 {
    font-family: "Open Sans", sans-serif;
    font-style: italic;
    opacity: 0.5;
    font-size: 11px;
    margin: 0;
    margin-left: 17.4%;
  }
`;
const SearchContainer = styled.div`
  width: 100%;
  height: 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  margin-top: 1.8%;
`;
const Title = styled.div`
  width: 100%;
  height: 1%;
  margin-top: 3.3%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  h3 {
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    color: #181616;
    opacity: 0.5;
    margin: 0;
    font-size: 13px;
    margin-left: 17.4%;
  }
  h5 {
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    color: #181616;
    margin-left: 3.4%;

    margin-bottom: 0.2%;
    font-size: 11px;
    opacity: 0.5;
  }
  hr {
    width: 57.6%;
    margin: 0 0 0.5% -2%;
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
  width: 65.4%;
  height: 69.1%;
  margin-top: 2.8%;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(3, 280px);
  grid-auto-rows: 219.2px;
  grid-column-gap: 2.1%;
  grid-row-gap: 1.9%;
`;
const StatusView = styled.div`
  width: 69.4%;
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
  height: 85%;
  display: grid;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-auto-rows: 48%;
  grid-column-gap: 13px;
  grid-row-gap: 13px;
  justify-content: center;
  overflow: none;
`;
const Inactive = styled.div`
  width: 100%;
  height: 85%;
  display: grid;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-auto-rows: 48%;
  grid-column-gap: 13px;
  grid-row-gap: 13px;
  justify-content: center;
  overflow: none;
  h3 {
    margin: 0;
  }
`;
const ShowArea = () => {
  const [byStatus, setByStatus] = useState(0);
  const [value, setValue] = useState("");
  const [cameraData, setCameraData] = useState(null);
  const [active, setActive] = useState([]);
  const [inactive, setInactive] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    camData();
  }, []);
  const camData = async () => {
    const res = await axios.get("/getData/");
    const data = await res.data;

    let sortData = () => {
      data.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      const sort =
        byStatus === 0 ? data : data.sort((a, b) => b.active - a.active);
      return sort;
    };

    return (
      setCameraData(sortData()),
      setActive(
        sortData().filter((online) => {
          return online.active === true;
        })
      ),
      setInactive(
        sortData().filter((online) => {
          return online.active === false;
        })
      ),
      setLoading(false)
    );
  };

  console.log(1111, active);
  console.log(2222, inactive);
  return (
    <Wrapper>
      <Header />
      {loading ? (
        <Spinner animation='border' role='status' variant='dark' />
      ) : (
        <Grouped style={{ width: "100%", height: "100%" }}>
          <Info>
            <h1>Your Cameras</h1> <h5>Total Devices: {cameraData.length}</h5>
          </Info>
          <SearchContainer>
            <Search setValue={setValue} value={value} />
            <SortButton setByStatus={setByStatus} byStatus={byStatus} />
          </SearchContainer>

          {byStatus === 0 ? (
            <Title>
              <h3>All Devices</h3>
              <h5>({cameraData.length})</h5> <hr></hr>
            </Title>
          ) : (
            <Title>
              <h3>Active Cameras</h3>
              <h5>({active.length})</h5>
              <hr></hr>
            </Title>
          )}

          {byStatus === 0 ? (
            <Cameras>
              {cameraData
                .filter((dVices) => {
                  return (
                    dVices.name.toUpperCase().indexOf(value.toUpperCase()) !==
                      -1 || dVices.id.toString().indexOf(value) !== -1
                  );
                })
                .map((devices, id) => (
                  <SecurityDisplay key={id} devices={devices} />
                ))}
            </Cameras>
          ) : (
            <StatusView>
              <Active>
                {active
                  .filter((dVices) => {
                    return (
                      dVices.name.toUpperCase().indexOf(value.toUpperCase()) !==
                        -1 || dVices.id.toString().indexOf(value) !== -1
                    );
                  })
                  .map((devices, id) => (
                    <SecurityDisplay key={id} devices={devices} />
                  ))}
              </Active>
              <InactiveTitle>
                <h3>Inactive Cameras</h3>
                <h5>({inactive.length})</h5>
                <hr></hr>
              </InactiveTitle>
              <Inactive>
                {inactive
                  .filter((dVices) => {
                    return (
                      dVices.name.toUpperCase().indexOf(value.toUpperCase()) !==
                        -1 || dVices.id.toString().indexOf(value) !== -1
                    );
                  })
                  .map((devices, id) => (
                    <SecurityDisplay key={id} devices={devices} />
                  ))}
              </Inactive>
            </StatusView>
          )}
        </Grouped>
      )}
    </Wrapper>
  );
};

export default ShowArea;
