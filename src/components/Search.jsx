import React from "react";

function Search({ setValue }) {
  return (
    <div>
      <input onChange={e => setValue(e.target.value)} />
    </div>
  );
}

export default Search;
