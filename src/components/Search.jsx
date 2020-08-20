import React from "react";

function Search({ setValue, value }) {
  console.log(value);
  return (
    <div>
      <input onChange={e => setValue(e.target.value)} />
    </div>
  );
}

export default Search;
