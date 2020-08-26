import React from "react";
import search from "../assets/Search.svg";
import styled from "styled-components";
const SearchInput = styled.div`
  width: 63%;
  height: 50%;
  margin-left: 0.5%;
  input {
    width: 42%;
    height: 100%;
    background-image: url(${search});
    background-repeat: no-repeat;
    background-position: left;
    background-size: 20px;
    padding-left: 2.3%;
    font-size: 14px;

    &:after {
      opacity: 0.5;
    }

    border-radius: 5px;
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
      <input onChange={e => setValue(e.target.value)} />
    </SearchInput>
  );
}

export default Search;
