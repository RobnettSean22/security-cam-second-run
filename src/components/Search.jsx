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
    background-position: 3% 50%;
    background-size: 6%;
    padding-left: 2.3%;
    font-size: 10px;
    color: #888888;
    font-family: "Open Sans", sans-serif;
    font-style: italic;
    border: 1px #bfd1cb solid;
    border-radius: 2px;
    text-indent: 7%;

    &:after {
      opacity: 0.5;
    }

    &:focus {
      outline: none;
      background-image: none;
    }
    &:focus::placeholder {
      color: transparent;
    }
  }
`;

function Search({ setValue, value }) {
  return (
    <SearchInput>
      <input
        placeholder='Search by Name or ID...'
        onChange={e => setValue(e.target.value)}
      />
    </SearchInput>
  );
}

export default Search;
