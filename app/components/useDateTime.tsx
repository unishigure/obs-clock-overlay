import { useEffect, useState } from "react";

export const useDateTime = (interval: number) => {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const timeoutId = setTimeout(() => setTime(Date.now()), interval);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [interval, time]);

  return time;
};
