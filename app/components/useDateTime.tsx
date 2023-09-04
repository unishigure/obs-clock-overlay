import { useEffect, useState } from "react";

export const useDateTime = (interval: number) => {
  const [time, updateTime] = useState(Date.now());

  useEffect(() => {
    const timeoutId = setTimeout(() => updateTime(Date.now()), interval);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [time]); // eslint-disable-line react-hooks/exhaustive-deps

  return time;
};
