import React from "react";
import search from "../assets/Search.svg";
import styled from "styled-components";
const SearchInput = styled.div`
  width: 63%;
  height: 100%;
  margin-left: 0.5%;
  input {
    width: 42%;
    height: 70%;
    background-image: url(${search});
    background-repeat: no-repeat;
    background-position: left;
    background-size: 20px;
    padding-left: 2.3%;
    font-size: 14px;
    border-radius: 5px;

    &::after {
      opacity: 0.5;
    }
  }
`;

function Search({ setValue, value }) {
  return (
    <SearchInput>
      <input
        placeholder='Search by Name or ID'
        onChange={e => setValue(e.target.value)}
      />
    </SearchInput>
  );
}

export default Search;
