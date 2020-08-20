import { useState, useEffect } from "react";

export default function useSortButton(data) {
  const [isOnline, setIsOnline] = useState(data);

  useEffect(() => {
    const sortByName = isOnline.sort((a, b) => {
      const abc = null ? -1 : 1;
      return abc * a.name.localeCompare(b.name);
    });
    return setIsOnline(sortByName);
  });

  return isOnline;
}
